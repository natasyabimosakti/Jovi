// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2026-06-09
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

let sudahBeli = false;
let riwayatStok = {};





var TARGET_MODEL_NAME = "100 ml"; // Nama varian yang ingin dicari
var TARGET_MIN_STOK = 1;  // Bot otomatis bergerak jika stok >= 3
var JUMLAH_BELI = 1;      // Jumlah item yang langsung diorder
// ========================================================



setInterval(() => {
    if (window.location.href.includes('/cart')) {

        if (document.querySelector(".shopee-alert-popup")) {
            document.location.reload()
        }
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        console.log("Klik berhasil disimulasikan!");

        let limitCari = 0;
        const sinkronUI = setInterval(() => {
            limitCari++;
            const itemLoaded = document.querySelector('div[role="listitem"]');
            const checkbox = document.querySelector(".stardust-checkbox__box");
            const btnCheckout = document.querySelector(".shopee-button-solid");

            if (itemLoaded && checkbox && btnCheckout) {
                clearInterval(sinkronUI);

                checkbox.click();
                console.log("✅ Item berhasil di-checklist!");

                setTimeout(() => {
                    btnCheckout.click();
                    console.log("🚀 Tombol Checkout ditekan! Mengalihkan ke pembayaran...");
                }, 100);
            }

            if (limitCari > 200) clearInterval(sinkronUI);
        }, 100);
    }
}, 200);



// ========================================================
// 0. OTOMASI HALAMAN CHECKOUT (QRIS & BUAT PESANAN)
// ========================================================
const simulateClick = (el) => {
    const opts = { bubbles: true, cancelable: true, view: window, buttons: 1 };
    el.dispatchEvent(new MouseEvent('mousedown', opts));
    el.dispatchEvent(new MouseEvent('mouseup', opts));
    el.dispatchEvent(new MouseEvent('click', opts));
};

var checkoutPoller = setInterval(() => {
    if (!window.location.href.includes('/payment')) {
        const qrisBtn = document.querySelector('button[aria-label="QRIS"]') ||
            Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('QRIS'));
        const bankBtn = document.querySelector('button[aria-label="Transfer Bank"]') ||
            Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Transfer Bank'));

        const btnBuatPesanan = Array.from(document.querySelectorAll('button.stardust-button--primary'))
            .find(btn => btn.textContent.trim().includes('Buat Pesanan'));

        if (qrisBtn && !qrisBtn.disabled) {
            simulateClick(qrisBtn);
        } else if (bankBtn) {
            simulateClick(bankBtn);

            // Memilih Bank BCA jika muncul pilihan bank
            const pilihanBca = Array.from(document.querySelectorAll('.checkout-bank-transfer-item__title'))
                .find(el => el.textContent.trim().includes('Bank BCA'));

            if (pilihanBca) {
                const wadahPilihanBca = pilihanBca.closest('.checkout-bank-transfer-item');
                if (wadahPilihanBca) {
                    simulateClick(wadahPilihanBca);
                }
            }
        }

        // Mengecek apakah ada popup dialog barang habis
        const popupDialog = document.querySelector(".stardust-popup__dialog");
        if (popupDialog && popupDialog.textContent.toLowerCase().includes("habis")) {
            const btnOk = popupDialog.querySelector(".stardust-popup-button--main");
            if (btnOk) {
                simulateClick(btnOk);
                console.log("%c[INFO] Popup barang habis terdeteksi, menekan tombol OK!", "background: orange; color: white; padding: 5px; font-weight: bold;");
            }
        }

        if (btnBuatPesanan && !btnBuatPesanan.disabled) {
            simulateClick(btnBuatPesanan);
            console.log("%c[SUKSES] Tombol 'Buat Pesanan' diklik!", "background: green; color: white; padding: 5px; font-weight: bold;");
        }
    }
}, 200);



// 1. EKSTRAKSI DATA OTOMATIS DARI SCRIPT MFE SHOPEE
// ========================================================
function ambilConfigProdukOtomatis() {
    try {
        if (window.location.href.includes('/cart')) { return null }
        const elemenData = document.querySelector("[data-module]");

        if (!elemenData) {
            return null;
        }

        const dataMentah = JSON.parse(elemenData.textContent);
        const konteksDomain = dataMentah.initialState.DOMAIN_CONTEXT.data;

        const config = {
            shop_id: konteksDomain.shopId,
            item_id: konteksDomain.itemId,
            model_id: konteksDomain.displayModelId,
            urlCekStok: `https://shopee.co.id/api/v4/item/get?itemid=${konteksDomain.itemId}&shopid=${konteksDomain.shopId}`,
            urlBuyNow: "https://shopee.co.id/api/v4/cart/add_to_cart"
        };

        return config;
    } catch (err) {
        console.error("Gagal mengekstrak data otomatis:", err);
        return null;
    }
}

const CONFIG = ambilConfigProdukOtomatis();



// ========================================================
// 2. FUNGSI TEMBAK ORDER ("BUY NOW" METHOD)
// ========================================================
function getCookie(name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

async function eksekusiOrderOtomatis() {
    if (sudahBeli || !CONFIG) return;
    sudahBeli = true;

    console.log("%c[PROSES] Stok memenuhi syarat! Menembak server Shopee...", "color: yellow; font-weight: bold;");

    const payloadBeli = {
        "quantity": JUMLAH_BELI,
        "checkout": true,
        "update_checkout_only": false,
        "donot_add_quantity": false,
        "source": "{\"refer_urls\":[]}",
        "client_source": 1,
        "shopid": CONFIG.shop_id,
        "itemid": CONFIG.item_id,
        "modelid": CONFIG.model_id,
        "cart_client_id": 1
    };

    try {
        let response = await fetch(CONFIG.urlBuyNow, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRFToken": getCookie("csrftoken"),
                "Referer": window.location.href
            },
            body: JSON.stringify(payloadBeli)
        });

        let hasil = await response.json();

        if (hasil && hasil.error === 0) {
            console.log("%c[SUKSES] ORDER BERHASIL DIBUAT! Menampilkan Drawer (Tetap di halaman ini)...", "background: green; color: white; font-size: 20px; font-weight: bold; padding: 10px;");
            clearInterval(jalankanBot);

            (async () => {
                const cartButton = document.querySelector('a#cart_drawer_target_id');

                if (!cartButton) {
                    console.log("Elemen keranjang tidak ditemukan!");
                    return;
                }

                const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

                const rect = cartButton.getBoundingClientRect();
                const clientX = rect.left + (rect.width / 2) + (Math.random() * 4 - 2);
                const clientY = rect.top + (rect.height / 2) + (Math.random() * 4 - 2);

                console.log("Memulai simulasi interaksi manusia ke:", { clientX, clientY });

                cartButton.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, cancelable: true, clientX, clientY }));
                cartButton.dispatchEvent(new MouseEvent('mouseover', { bubbles: true, cancelable: true, clientX, clientY }));
                cartButton.classList.add('stardust-popover__target--active');

                await sleep(Math.floor(Math.random() * 300) + 200);

                cartButton.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, clientX, clientY, buttons: 1 }));

                await sleep(Math.floor(Math.random() * 70) + 50);

                cartButton.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, clientX, clientY, buttons: 0 }));

                const clickEvent = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    clientX,
                    clientY,
                    view: window
                });
                cartButton.dispatchEvent(clickEvent);

                console.log("Klik berhasil disimulasikan!");

                let limitCari = 0;
                const sinkronUI = setInterval(() => {
                    limitCari++;
                    const itemLoaded = document.querySelector('div[role="listitem"]');
                    const checkbox = document.querySelector(".stardust-checkbox__box");
                    const btnCheckout = document.querySelector(".shopee-button-solid");

                    if (itemLoaded && checkbox && btnCheckout) {
                        clearInterval(sinkronUI);

                        checkbox.click();
                        console.log("✅ Item berhasil di-checklist!");

                        setTimeout(() => {
                            btnCheckout.click();
                            console.log("🚀 Tombol Checkout ditekan! Mengalihkan ke pembayaran...");
                        }, 100);
                    }

                    if (limitCari > 200) clearInterval(sinkronUI);
                }, 100);
            })();
        } else {
            console.log(`%c[GAGAL] Server Shopee menolak order: ${hasil.message || JSON.stringify(hasil)}`, "color: red;");
            document.location.href = "https://shopee.co.id/cart";
            sudahBeli = false;
        }
    } catch (err) {
        console.error("Error Sistem saat melakukan POST order:", err);
        sudahBeli = false;
    }
}

// ========================================================
// 3. LOOPING MONITOR STOK REAL-TIME
// ========================================================
async function pantauStokOtomatis() {
    if (!CONFIG) return;

    try {
        let response = await fetch(CONFIG.urlCekStok);
        let json = await response.json();

        if (!json || !json.data) {
            console.log("Menunggu respon database Shopee...");
            return;
        }

        let dataProduk = json.data;
        let varianList = dataProduk.models;

        if (varianList && varianList.length > 0) {
            let varianIncaran = varianList.find(m =>
                m.name.toLowerCase().includes(TARGET_MODEL_NAME.toLowerCase())
            );

            if (varianIncaran) {
                CONFIG.model_id = varianIncaran.modelid;
            } else {
                varianIncaran = varianList.find(m => m.modelid === CONFIG.model_id) || varianList[0];
                CONFIG.model_id = varianIncaran.modelid;
            }

            console.clear();
            console.log("%c[INFO] Daftar Varian & Model ID ditemukan:", "color: #00b894; font-weight: bold;");
            varianList.forEach(v => console.log(`- ${v.name.padEnd(20)} | ID: ${v.modelid} | Stok: ${v.stock}`));

            console.log(`%c=== ALL-IN-ONE AUTOMATIC BOT RUNNING ===`, "color: #ff9f43; font-weight: bold; font-size: 14px;");
            console.log(`Produk : ${dataProduk.name}`);
            console.log(`Shop ID: ${CONFIG.shop_id} | Item ID: ${CONFIG.item_id} | Model ID: ${CONFIG.model_id}`);
            console.log(`Aturan : Beli otomatis ${JUMLAH_BELI} pcs jika stok >= ${TARGET_MIN_STOK}`);
            console.log(`Waktu  : ${new Date().toLocaleTimeString()}`);
            console.log("==================================================");

            let namaVarian = varianIncaran.name || "Default/Tunggal";
            let stokVarian = varianIncaran.stock;
            let hargaVarian = varianIncaran.price / 100000;
            let idVarian = varianIncaran.modelid;

            if (riwayatStok[idVarian] !== undefined && riwayatStok[idVarian] === 0 && stokVarian > 0) {
                console.log(`%c[ALERT] BARANG RE-STOCK JADI ${stokVarian} PCS!`, "background: orange; color: white; padding: 5px; font-weight: bold;");
            }
            riwayatStok[idVarian] = stokVarian;

            let warnaLog = stokVarian >= TARGET_MIN_STOK ? "color: #2ed573; font-weight: bold;" : "color: #ff4757;";
            console.log(`Varian : ${namaVarian}`);
            console.log(`Harga  : Rp${hargaVarian.toLocaleString('id-ID')}`);
            console.log(`%cStok   : ${stokVarian} tersedia`, warnaLog);
            console.log("--------------------------------------------------");

            // TRIGGER BELI
            if (stokVarian >= TARGET_MIN_STOK) {
                eksekusiOrderOtomatis();
            }
        }
    } catch (error) {
        console.log("Koneksi API terganggu, mencoba kembali...");
    }
}


let jalankanBot;
if (CONFIG) {
    console.log("%c[SUKSES] Identitas produk berhasil dibaca otomatis. Memulai pemantauan...", "color: #2ed573; font-weight: bold;");
    jalankanBot = setInterval(pantauStokOtomatis, 1000);
}

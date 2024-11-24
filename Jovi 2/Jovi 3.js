// ==UserScript==
// @name         JOVI 3
// @namespace    http://tampermonkey.net/
// @version      3.62
// @description  Script Metode Terbaru, Cari Semua Keyword
// @updateURL	 https://raw.githubusercontent.com/natasyabimosakti/Jovi/main/Jovi%202/Jovi%203.js?token=GHSAT0AAAAAACVCFJDJBCHHK6CP6CSHVAS2ZWV3QWA
// @downloadURL	 https://raw.githubusercontent.com/natasyabimosakti/Jovi/main/Jovi%202/Jovi%203.js?token=GHSAT0AAAAAACVCFJDJBCHHK6CP6CSHVAS2ZWV3QWA
// @author       You
// @match        http*://*/*
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       window.close
// ==/UserScript==




/*======================================================================3copy tampermonkey==========================================================*/

var namagroup1 = 'Hoho';
var Comment1 = 'JFFRE2 : 85*90*95 #HOHOTOGEL';

var namagroup2 = 'K86';
var Comment2 = 'K86TOTO ( JEHOASYU7 ) : 38*50*57'; 

var namagroup3 = 'PUSAT LOMBA';
var Comment3 = 'Shiotogel4d (JJDONG9) 07*34*97'; 

var namagroup4 = 'NEMO';
var Comment4 = 'Nemo4d (JELONN9) : 52*64*93';

var namagroup5 = '(WARTO)';
var Comment5 = '#(WARUNGTOTO) = (JONAHHF9) 15*33*71';

var namagroup6 = 'DIVA4D';
var Comment6 = '#DIVA4D (JHEO24) = 20*25*32';

var namagroup7 = 'MAYAPADA';
var Comment7 = 'BETT*SingasariTOTO(BO)*JVIVI6*46*84*96';

var namagroup8 = 'INFO';
var Comment8 = 'Tok99Toto ( JXUPING8 ) : 04*36*51';

var namagroup9 = 'TOYIBSLOT';
var Comment9 = '#TOYIBSLOT ( JJWALI5 ) : 04*36*51';

var namagroup10 = 'LING';
var Comment10 = 'LING77 (JDJS4) 85*90';

var namagroup11 = 'Pasar';
var Comment11 = 'PAJAKTOTO(JOKIAD8) : 46*84';

var namagroup12 = 'SILA';
var Comment12 = '#SILATOGEL*JELONN9*38*50*57*BETTING';

var namagroup13 = 'Wellz';
var Comment13 = 'SIJITOGEL JMQZE3 20*25*32';

var namagroup14 = 'BLITAR';
var Comment14 = '#BLITAR4D ( JODI64 ) : 07*34*97'; 

var namagroup15 = 'RNR';
var Comment15 = '#RNR303(JONAHHF9) : 15*33*71';

var namagroup16 = 'KECERDASAN';
var Comment16 = 'CITA4D*JFEKK8*52*64*72';

/*======================================================================3copy tampermonkey==========================================================*/

var namagroup17 = 'Jawatengah';
var Comment17 = 'Bahagia1';

var namagroup18 = 'lajw';
var Comment18 = 'asek';



var refresh = 55;


var admin = ["Siâo","aldi","aprilia","alenta","artha","adelia","ananda","aditia","andri","aurel","alde","adm","audi","asmani","andy","ayesha","anggraini","arifin","arga","asnah","aldy","ayunda","aurora","adiatmika",
             "brian","boboho","bobby","bonar","bella","bastian","bungaps","budi",
             "cinta","calvin","celsia","cila","cindy","chintya","carole","celine","chomsiati","corene","cheline","chikaku",
             "denis","dollar","dewa","dewi","dinda","dika","dea","debby","diva",
             "echa","erika","elly","eugene","erwin","elmira","eleano","erna","elvina","eviana",
             "farah","febrian","fiana","farid","fahresa","fatimm",
             "gretha","garda",
             "herfizah","hana","hoihai","hefi","habib","harry","hokii","hoki","har",
             "inisial","intan","icha","irfan","inves",
             "jhone","jess","jovanka","jenifer","jihan","jesika","je pe","jhing",
             "kumbara","kemon","katharina","kayla","katty","kendri","kembar","kotna","kiky","kapten","karla","kopi pait",
             "lehman","lianda","laura","leon","lidya","larissa","leksa","lina","lintangz","lidia","langit","leaderbrutallovely",
             "manu","mesa","mardia","mila","maes","mad","miranda","melati","minion","mariana","mahendra","multi","megaways","maleeqq","melyska",
             "nadila","neng","naura","nathaya","nick","nella","neman","novi","nadhine",
             "oun","oscar","otong","over",
             "puput","primus","payton","pura","priyan","prediction","pencari","putranto","priyanti",
             "ratu","roy","rendy","ria","ruto","riko","rano","robby","rano","ropiq","robby","rohmanu","rindi",
             "sanchez","selly","sutanti","siska","safar","sanjaya","san","sandiego","sloter","sinta","slooter","sabrina","salsabila","sintia","sejitu","Syaqeena","saputra","sahara","shell","sundawa",
             "tink","thonex","tiara","tania","tag",
             "ujen",
             "vonny","viona","virna",
             "wahid","wahzo","wok","wndt","wiena",
             "yoky","yasmine","yao","yohana","yaya",
             "zurro","zefanyaa","zurrotul","zion","zimbabwe"];

var keyword1 = "ROOM"
var keyword2 = "𝗥𝗢𝗢𝗠"
var keyword3 = "LOMBA"
var keyword4 = "𝗟𝗢𝗠𝗕𝗔"
var keyword5 = "𝐋𝐎𝐌𝐁𝐀"
var keyword6 = "2D 2LINE"
var keyword7 = "ROM"
var keyword8 = "R00M"
var keyword9 = "2D 3LINE"
var keyword10 = "𝐑𝐎𝐎𝐌"
var keyword11 = "HONGKONG"
var keyword12 = "SINGA"
var keyword13 = "SYDNEY"
var keyword14 = "❤️"

var Backlist1 = "pemenang lomba";
var Backlist2 = "rekap";
var Backlist3 = "hasil";
var Backlist4 = "room lomba freebet";
var Backlist5 = "prediksi";
var Backlist6 = "result";
var Backlist7 = "result";


var jitter = 0
var myrefresh = setInterval(function(){
    window.scroll(0,100)

    for (let ntv = 0; ntv < document.querySelectorAll('[data-tracking-duration-id').length; ntv++) {
        if (document.querySelectorAll('[data-tracking-duration-id')[ntv]){
            // Nama FB
            var namafb = document.querySelectorAll('[data-tracking-duration-id]')[ntv].getElementsByClassName('native-text')[0];
            //Jam
            var jamposting = document.querySelectorAll('[data-tracking-duration-id]')[ntv].getElementsByClassName('native-text')[1];
            //Postingan
            var postingan =document.querySelectorAll('[data-tracking-duration-id')[ntv].getElementsByClassName('native-text')[3];
            //Comment Box
            var commentbox = document.querySelectorAll('[data-tracking-duration-id')[ntv].getElementsByClassName('native-text')
            // Cek Jam
            var ret = jamposting.textContent.replace(/  Admin   |  Moderator   /g, "");
            if (ret.includes("Baru")||ret.slice(0,7).includes("1 menit")||ret.slice(0,7).includes("2 menit")||ret.slice(0,7).includes("3 menit")||ret.slice(0,7).includes("4 menit")||ret.slice(0,7).includes("4 menit")){
                console.log("Jam Ditemukan " + ret)
                if(postingan.textContent.toLowerCase().includes(keyword1.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword2.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword3.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword4.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword5.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword6.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword7.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword8.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword9.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword10.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword11.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword12.toLowerCase())
                   ||postingan.textContent.toLowerCase().includes(keyword13.toLowerCase())){
                    console.log("Keyword Ditemukan " + postingan.textContent);
                    // Cek Backlist
                    if(postingan.textContent.toLowerCase().includes(Backlist1.toLowerCase())
                       ||postingan.textContent.toLowerCase().includes(Backlist2.toLowerCase())
                       ||postingan.textContent.toLowerCase().includes(Backlist3.toLowerCase())
                       ||postingan.textContent.toLowerCase().includes(Backlist4.toLowerCase())
                       ||postingan.textContent.toLowerCase().includes(Backlist5.toLowerCase())
                       ||postingan.textContent.toLowerCase().includes(Backlist6.toLowerCase())
                       ||postingan.textContent.toLowerCase().includes(Backlist7.toLowerCase())){
                        console.log("Terdaftar Backlist...!  ");
                        return;
                    }
                    console.log("Proses dilanjutkan tidak ada Backlist");
                    // Cek Admin
                    for (var adm in admin){
                        if(namafb.textContent.toLowerCase().includes(admin[adm].toLowerCase())||jamposting.textContent.toLowerCase().includes("admin")||jamposting.textContent.toLowerCase().includes("moderator")){
                            // Tampilkan Siapa Yang Memposting
                            if(jamposting.textContent.toLowerCase().includes("admin")||jamposting.textContent.toLowerCase().includes("moderator")){
                                console.log("Admin yang Memosting = Admin/Moderator");
                            }else{
                                console.log("Admin yang Memosting = " + admin[adm]);
                            }
                            // Click Comment Box
                            for (var clk = 0; clk < commentbox.length; clk++) {
                                if(commentbox[clk]){
                                    if(commentbox[clk].textContent.toLowerCase().includes("jawab")|| commentbox[clk].textContent.toLowerCase().includes("tulis")){

                                        clearInterval(myrefresh);
                                        console.log("Click Posting box")
                                        jitter = 0
                                        commentbox[clk].click()
                                        game.start()
                                        return;
                                    }
                                }
                            }
                            return;
                        }
                    }
                }
            }
        }
    }

    var urutkan = document.querySelectorAll("[data-mcomponent='ServerTextArea']");
    var waktupost = document.getElementsByClassName("native-text");
    if(!document.querySelectorAll("[role='presentation']")[0]){
        if (document.readyState === "complete") {
            for (var cok = 0; cok < urutkan.length; cok++) {
                if(urutkan[cok].textContent.includes("URUTKAN")) {
                    urutkan[cok].click()
                }
            }
        }
    }
    if(document.getElementsByClassName("loading-overlay").length == 0 ){

        if(document.querySelectorAll("[role='presentation']")[0]){
            if (document.readyState === "complete") {
                for (var coki = 0; coki < waktupost.length; coki++) {
                    if(waktupost[coki].textContent.includes("Aktivitas")) {
                        waktupost[coki].click()
                    }
                }
            }
        }
    }


}, refresh * 10)


function gameClosure() {
    function game() {
        console.log('The game is Start')
        if(jitter == 1){
            return;
        }
        console.log('The game is running')
        /* This is just an example, replace this with the body of gameInit() */
        if(document.getElementsByClassName("multi-line-floating-textbox").length > 0 ){
            var ceknamagroup
            var ceknamagroup1
            var ceknamagroup2
            var ceknamagroup3
            var ceknamagroup4
            'use strict';
            if( document.getElementsByClassName("fixed-container")[0]){
                ceknamagroup = document.getElementsByClassName("fixed-container")[0].textContent;
            }
            if( document.getElementsByClassName('native-text')[5]){
                ceknamagroup1 = document.getElementsByClassName('native-text')[5].textContent;
            }
            if( document.getElementsByClassName('native-text')[6]){
                ceknamagroup2 = document.getElementsByClassName('native-text')[6].textContent;
            }
            if( document.getElementsByClassName('native-text')[7]){
                ceknamagroup3 = document.getElementsByClassName('native-text')[7].textContent;
            }
            if( document.getElementsByClassName('native-text')[8]){
                ceknamagroup4 = document.getElementsByClassName('native-text')[8].textContent;
            }

            if (document.getElementsByClassName("multi-line-floating-textbox")[0]){
                if (ceknamagroup.includes(namagroup1) == true||ceknamagroup1.includes(namagroup1) == true||ceknamagroup2.includes(namagroup1) == true||ceknamagroup3.includes(namagroup1) == true||ceknamagroup4.includes(namagroup1) == true) {
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 1,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment1;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup2) == true||ceknamagroup1.includes(namagroup2) == true||ceknamagroup2.includes(namagroup2) == true||ceknamagroup3.includes(namagroup2) == true||ceknamagroup4.includes(namagroup2) == true) {
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 2,1);
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment2;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup3) == true||ceknamagroup1.includes(namagroup3) == true||ceknamagroup2.includes(namagroup3) == true||ceknamagroup3.includes(namagroup3) == true||ceknamagroup4.includes(namagroup3) == true) {
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 3,1);
                    /*cek nama group dan tulis commntar*/
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment3;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;

                }
                if (ceknamagroup.includes(namagroup4) == true||ceknamagroup1.includes(namagroup4) == true||ceknamagroup2.includes(namagroup4) == true||ceknamagroup3.includes(namagroup4) == true||ceknamagroup4.includes(namagroup4) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 4,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment4;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup5) == true||ceknamagroup1.includes(namagroup5) == true||ceknamagroup2.includes(namagroup5) == true||ceknamagroup3.includes(namagroup5) == true||ceknamagroup4.includes(namagroup5) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 5,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment5;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup6) == true||ceknamagroup1.includes(namagroup6) == true||ceknamagroup2.includes(namagroup6) == true||ceknamagroup3.includes(namagroup6) == true||ceknamagroup4.includes(namagroup6) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 6,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment6;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup7) == true||ceknamagroup1.includes(namagroup7) == true||ceknamagroup2.includes(namagroup7) == true||ceknamagroup3.includes(namagroup7) == true||ceknamagroup4.includes(namagroup7) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 7,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment7;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup8) == true||ceknamagroup1.includes(namagroup8) == true||ceknamagroup2.includes(namagroup8) == true||ceknamagroup3.includes(namagroup8) == true||ceknamagroup4.includes(namagroup8) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 8,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment8;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup9) == true||ceknamagroup1.includes(namagroup9) == true||ceknamagroup2.includes(namagroup9) == true||ceknamagroup3.includes(namagroup9) == true||ceknamagroup4.includes(namagroup9) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 9,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment9;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup10) == true||ceknamagroup1.includes(namagroup10) == true||ceknamagroup2.includes(namagroup10) == true||ceknamagroup3.includes(namagroup10) == true||ceknamagroup4.includes(namagroup10) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 10,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment10;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1;
                    return;
                }
                if (ceknamagroup.includes(namagroup11) == true||ceknamagroup1.includes(namagroup11) == true||ceknamagroup2.includes(namagroup11) == true||ceknamagroup3.includes(namagroup11) == true||ceknamagroup4.includes(namagroup11) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 11,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment11;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1;
                    return;
                }
                if (ceknamagroup.includes(namagroup12) == true||ceknamagroup1.includes(namagroup12) == true||ceknamagroup2.includes(namagroup12) == true||ceknamagroup3.includes(namagroup12) == true||ceknamagroup4.includes(namagroup12) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 12,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment12;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup13) == true||ceknamagroup1.includes(namagroup13) == true||ceknamagroup2.includes(namagroup13) == true||ceknamagroup3.includes(namagroup13) == true||ceknamagroup4.includes(namagroup13) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 13,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment13;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                }
                if (ceknamagroup.includes(namagroup14) == true||ceknamagroup1.includes(namagroup14) == true||ceknamagroup2.includes(namagroup14) == true||ceknamagroup3.includes(namagroup14) == true||ceknamagroup4.includes(namagroup14) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 14,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment14;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }

                if (ceknamagroup.includes(namagroup15) == true||ceknamagroup1.includes(namagroup15) == true||ceknamagroup2.includes(namagroup15) == true||ceknamagroup3.includes(namagroup15) == true||ceknamagroup4.includes(namagroup15) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 15,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment15;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }

                if (ceknamagroup.includes(namagroup16) == true||ceknamagroup1.includes(namagroup16) == true||ceknamagroup2.includes(namagroup16) == true||ceknamagroup3.includes(namagroup16) == true||ceknamagroup4.includes(namagroup16) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 16,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment16;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup17) == true||ceknamagroup1.includes(namagroup17) == true||ceknamagroup2.includes(namagroup17) == true||ceknamagroup3.includes(namagroup17) == true||ceknamagroup4.includes(namagroup17) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 17,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment17;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
                if (ceknamagroup.includes(namagroup18) == true||ceknamagroup1.includes(namagroup18) == true||ceknamagroup2.includes(namagroup18) == true||ceknamagroup3.includes(namagroup18) == true||ceknamagroup4.includes(namagroup18) == true) {
                    /*cek nama group dan tulis commntar*/
                    /*cek nama group dan tulis commntar*/
                    GM.setValue( 18,1);
                    document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment18;
                    console.log("Sudah Comment")
                    clicksend();
                    jitter = 1
                    return;
                }
            }
        }
    }
    var currentGame;
    return {
        start() {
            currentGame = setInterval(game, 0)
        },
        stop() {
            clearInterval(currentGame)
        }
    }
}
var game = gameClosure()

function clicksend() {

    jitter = 1
    /*Tampilkan TOMBOL SEND*/
    if(document.getElementsByClassName("textbox-submit-button")[0] && document.getElementsByClassName("multi-line-floating-textbox")[0].value.length >= 1){
        document.getElementsByClassName("textbox multi-line-floating-textbox")[0].dispatchEvent(
            new Event("input", { bubbles: true, cancelable: true })
        );
        document.getElementsByClassName("textbox-submit-button")[0].style.display=""

        /*Tekan TOMBOL SEND*/
        var clicksendcoment = document.getElementsByClassName("textbox-submit-button")[0];
        clicksendcoment.disabled = false;
        var clickEvent = document.createEvent ('MouseEvents');
        clickEvent.initEvent ("mousedown", true, true);
        clicksendcoment.dispatchEvent (clickEvent);
        console.log("Comment Terkirim");
        closer()
        /*Tekan TOMBOL SEND*/
        location.href = "about:blank"
    }
}

function closer() {
    setTimeout(function(){location.href = "about:blank"},600)


}
var lasturlku= ""
var jar = setInterval(function(){
    



    if(location.href.includes("group")){
        lasturlku = location.href;

    }
    
    if(location.href.length <= 30 ){
        location.href = lasturlku
        clearInterval(jar)
        return;
    }

},1500)

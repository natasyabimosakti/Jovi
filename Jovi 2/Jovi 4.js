// ==UserScript==
// @name         jovi 4
// @namespace    http://tampermonkey.net/
// @version      3.01
// @description  try to take over the world!
// @updateURL    https://raw.githubusercontent.com/natasyabimosakti/Jovi/main/Jovi%202/Jovi%204.js
// @downloadURL  https://raw.githubusercontent.com/natasyabimosakti/Jovi/main/Jovi%202/Jovi%204.js
// @author       You
// @match        http*://*/*
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       window.close
// ==/UserScript==
var refresh = 50;



/*======================================================================Paste Script Tampermonkey di sini===============================================================*/
var namagroup1 = 'TAFSIR';
var Comment1 = 'TAG4D : (VALOI9) 28*62*31'; 

var namagroup2 = 'K86T0T0';
var Comment2 = 'K86TOTO ( VUVUK3 ) : 03*99*24'; 

var namagroup3 = 'PUSAT LOMBA';
var Comment3 = 'Shiotogel4d (VEFEK1) 26*91*58'; 

var namagroup4 = 'SEJITU';
var Comment4 = '#SEJITU ( VUKIM8 ) : 11*70*63'; 

var namagroup5 = 'RNR';
var Comment5 = '‌#RNR303(VYUMAN0) : 22*76*98'; 

var namagroup6 = 'DIVA4D';
var Comment6 = '#DIVA4D (VTOPA7) = 08*68*74'; 

var namagroup7 = 'Hoho';
var Comment7 = 'VBUDII8 : 47*79*86 #HOHOTOGEL'; 

var namagroup8 = 'TOK99T0T0';
var Comment8 = 'Tok99Toto ( VODEX1 ) : 55*45*65'; 

var namagroup9 = 'KIU';
var Comment9 = '#(KIUTOTO) (VOLVON3) : 55*45*65'; 

var namagroup10 = 'SL0T0G3L';
var Comment10 = '#SLOTOGEL (VORTEXX4) : 28*62*31'; 

var namagroup11 = 'KEBAYA';
var Comment11 = '(KEBAYA4D) = (VGARLA5) 47*79*86'; 

var namagroup12 = 'BESTOTO';
var Comment12 = 'VARNOL8 : 03*99*24 #BESTOTO88'; 

var namagroup13 = 'GOHT0G3L';
var Comment13 = 'GOHTOGEL=VAFORR9=08*68*74'; 

var namagroup14 = 'MAYAPADA';
var Comment14 = 'BETT*SingasariTOTO(BO)*VJVON0*26*91*58'; 

var namagroup15 = 'XX1';
var Comment15 = '#XX1TOTO (VODKHA3)  22*76*98 BETTING'; 

var namagroup16 = 'TERAS';
var Comment16 = 'TERASTOTO*VZOLL8*35*70*BETTING';




/*======================================================================3D===============================================================*/







var jam = ["Baru sa","1 menit","2 menit","3 menit","4 menit","5 menit","6 menit","7 menit","8 menit","1 mnt","2 mnt","3 mnt","4 mnt","5 mnt","6 mnt","7 mnt","8 mnt"];



var keyword = ["ROOM", "𝗥𝗢𝗢𝗠", "LOMBA","𝗟𝗢𝗠𝗕𝗔","𝐋𝐎𝐌𝐁𝐀","LIMBA","ROM","R00M","R0M","🎱","⏩","🟠"];


var Backlist1 = "PEMENANG LOMBA";
var Backlist2 = "REKAP";
var Backlist3 = "HASIL";
var Backlist4 = "ROOM LOMBA FREEBET";
var Backlist5 = "Rekap";
var Backlist6 = "RESULT";
var Backlist7 = "MANA";



var myInterval = setInterval(function(){
    var urutkan = document.querySelectorAll("[data-mcomponent='ServerTextArea']");
    var urutkan2 = document.querySelectorAll("[data-mcomponent='TextArea']");
    var waktupost = document.querySelectorAll("[class='native-text']");
    window.scrollTo(0, 2000);
    if (document.readyState === "complete") {
        for (var coke = 0; coke < urutkan2.length; coke++) {
            if (urutkan2[coke].textContent.includes("URUTKAN")) {

                urutkan2[coke].click()


            }
        }

    }
    if (document.readyState === "complete") {
        for (var cok = 0; cok < urutkan.length; cok++) {
            if(urutkan[cok].textContent.includes("URUTKAN")) {
                urutkan[cok].click()

            }
        }

    }


    if (document.readyState === "complete") {
        for (var coki = 0; coki < waktupost.length; coki++) {
            if(waktupost[coki].textContent.includes("Aktivitas")) {
                waktupost[coki].click()

            }
        }

    }


    var ceknamagroup
    var ceknamagroup1
    var ceknamagroup2
    var ceknamagroup3
    var ceknamagroup4

    var cekcomment
    'use strict';
    if( document.getElementsByClassName('native-text')[4]){
        ceknamagroup = document.getElementsByClassName('native-text')[4].textContent;
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


    for (let ntv = 0; ntv < document.getElementsByClassName("native-text").length; ntv++) {
        var cekjam = document.getElementsByClassName('native-text')
        for (var u in jam){
            if(cekjam[ntv].textContent.slice(0,7).includes(jam[u])){
                console.log("waktu postingan =" + cekjam[ntv].textContent);
                for (let ntva = ntv + 1; ntva < ntv + 3; ntva++) {

                    if(document.getElementsByClassName('native-text')[ntva].textContent.length >= 5){
                        console.log("postingan =" + document.getElementsByClassName('native-text')[ntva].textContent);
                        cekcomment = document.getElementsByClassName('native-text')
                        if(cekcomment[ntva].textContent.includes(Backlist1)||cekcomment[ntva].textContent.includes(Backlist2)||cekcomment[ntva].textContent.includes(Backlist3)||cekcomment[ntva].textContent.includes(Backlist4)||cekcomment[ntva].textContent.includes(Backlist5)||cekcomment[ntva].textContent.includes(Backlist6)){
                            break;
                        }
                        for (var j in keyword){

                            if (document.getElementsByClassName('native-text')[ntva].textContent.includes(keyword[j])){
                                console.log("Keyword Ditemukan ");


                                for (let ntvb = ntva-2 ; ntvb < ntva + 6; ntvb++) {
                                    if(document.querySelectorAll("[class='native-text']")[ntvb].textContent.includes("Tulis")) {
                                        console.log("Mulai Tulis Komentar");
                                        document.querySelectorAll("[class='native-text']")[ntvb].click()

                                        if (ceknamagroup.includes(namagroup1) == true||ceknamagroup1.includes(namagroup1) == true||ceknamagroup2.includes(namagroup1) == true||ceknamagroup3.includes(namagroup1) == true||ceknamagroup4.includes(namagroup1) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment1;
                                            clicksend();
                                            clearInterval(myInterval);


                                            
                                            location.href = "about:blank"
                                            
                                            return;

                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup2) == true||ceknamagroup1.includes(namagroup2) == true||ceknamagroup2.includes(namagroup2) == true||ceknamagroup3.includes(namagroup2) == true||ceknamagroup4.includes(namagroup2) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment2;
                                            clicksend();
                                            clearInterval(myInterval);
                                            location.href = "about:blank"
                                            

                                            
                                            return;
                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup3) == true||ceknamagroup1.includes(namagroup3) == true||ceknamagroup2.includes(namagroup3) == true||ceknamagroup3.includes(namagroup3) == true||ceknamagroup4.includes(namagroup3) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment3;
                                            clicksend();
                                            clearInterval(myInterval);

                                            
                                            location.href = "about:blank"
                                            
                                            return;
                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup4) == true||ceknamagroup1.includes(namagroup4) == true||ceknamagroup2.includes(namagroup4) == true||ceknamagroup3.includes(namagroup4) == true||ceknamagroup4.includes(namagroup4) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment4;
                                            clicksend();
                                            clearInterval(myInterval);

                                            
                                            location.href = "about:blank"
                                            
                                            return;

                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup5) == true||ceknamagroup1.includes(namagroup5) == true||ceknamagroup2.includes(namagroup5) == true||ceknamagroup3.includes(namagroup5) == true||ceknamagroup4.includes(namagroup5) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment5;
                                            clicksend();
                                            clearInterval(myInterval);

                                            
                                            location.href = "about:blank"
                                            
                                            return;

                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup6) == true||ceknamagroup1.includes(namagroup6) == true||ceknamagroup2.includes(namagroup6) == true||ceknamagroup3.includes(namagroup6) == true||ceknamagroup4.includes(namagroup6) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment6;
                                            clicksend();
                                            clearInterval(myInterval);

                                            
                                            location.href = "about:blank"
                                            
                                            return;

                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup7) == true||ceknamagroup1.includes(namagroup7) == true||ceknamagroup2.includes(namagroup7) == true||ceknamagroup3.includes(namagroup7) == true||ceknamagroup4.includes(namagroup7) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment7;
                                            clicksend();
                                            clearInterval(myInterval);

                                            
                                            location.href = "about:blank"
                                            
                                            return;

                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup8) == true||ceknamagroup1.includes(namagroup8) == true||ceknamagroup2.includes(namagroup8) == true||ceknamagroup3.includes(namagroup8) == true||ceknamagroup4.includes(namagroup8) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment8;
                                            clicksend();
                                            clearInterval(myInterval);

                                            
                                            location.href = "about:blank"
                                            
                                            return;

                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup9) == true||ceknamagroup1.includes(namagroup9) == true||ceknamagroup2.includes(namagroup9) == true||ceknamagroup3.includes(namagroup9) == true||ceknamagroup4.includes(namagroup9) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment9;
                                            clicksend();
                                            clearInterval(myInterval);

                                            
                                            location.href = "about:blank"
                                            
                                            return;

                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup10) == true||ceknamagroup1.includes(namagroup10) == true||ceknamagroup2.includes(namagroup10) == true||ceknamagroup3.includes(namagroup10) == true||ceknamagroup4.includes(namagroup10) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment10;
                                            clicksend();
                                            clearInterval(myInterval);

                                            
                                            location.href = "about:blank"
                                            
                                            return;

                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup11) == true||ceknamagroup1.includes(namagroup11) == true||ceknamagroup2.includes(namagroup11) == true||ceknamagroup3.includes(namagroup11) == true||ceknamagroup4.includes(namagroup11) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment11;
                                            clicksend();
                                            clearInterval(myInterval);

                                            
                                            location.href = "about:blank"
                                            
                                            return;

                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup12) == true||ceknamagroup1.includes(namagroup12) == true||ceknamagroup2.includes(namagroup12) == true||ceknamagroup3.includes(namagroup12) == true||ceknamagroup4.includes(namagroup12) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment12;
                                            clicksend();
                                            clearInterval(myInterval);

                                            
                                            location.href = "about:blank"
                                            
                                            return;

                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup13) == true||ceknamagroup1.includes(namagroup13) == true||ceknamagroup2.includes(namagroup13) == true||ceknamagroup3.includes(namagroup13) == true||ceknamagroup4.includes(namagroup13) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment13;
                                            clicksend();
                                            clearInterval(myInterval);

                                            
                                            location.href = "about:blank"
                                            
                                            return;

                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup14) == true||ceknamagroup1.includes(namagroup14) == true||ceknamagroup2.includes(namagroup14) == true||ceknamagroup3.includes(namagroup14) == true||ceknamagroup4.includes(namagroup14) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment14;
                                            clicksend();
                                            clearInterval(myInterval);

                                            
                                            location.href = "about:blank"
                                            
                                            return;

                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup15) == true||ceknamagroup1.includes(namagroup15) == true||ceknamagroup2.includes(namagroup15) == true||ceknamagroup3.includes(namagroup15) == true||ceknamagroup4.includes(namagroup15) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment15;
                                            clicksend();
                                            clearInterval(myInterval);

                                            
                                            location.href = "about:blank"
                                            
                                            return;

                                        }


                                        /*End*/
                                        /*Komentar*/


                                        if (ceknamagroup.includes(namagroup16) == true||ceknamagroup1.includes(namagroup16) == true||ceknamagroup2.includes(namagroup16) == true||ceknamagroup3.includes(namagroup16) == true||ceknamagroup4.includes(namagroup16) == true) {
                                            /*cek nama group dan tulis commntar*/
                                            document.getElementsByClassName("multi-line-floating-textbox")[0].value = Comment16;
                                            clicksend();
                                            clearInterval(myInterval);

                                            
                                            location.href = "about:blank"
                                            
                                            return;

                                        }


                                       




                                    }
                                }
                            }
                        }

                    }
                    continue;
                }
            }
        }

    }
    'use strict';


},refresh * 10)









function clicksend() {
    /*Tampilkan TOMBOL SEND*/
    document.getElementsByClassName("textbox-submit-button")[0].style.display=""
    /*Tekan TOMBOL SEND*/
    var clicksendcoment = document.getElementsByClassName("textbox-submit-button")[0];
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent ("mousedown", true, true);
    clicksendcoment.dispatchEvent (clickEvent);
    GM.setValue("CLICKCOMMENT", 1);
    /*Tekan TOMBOL SEND*/
}

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}


let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-JavaScript dilinde hangi fonksiyon, dizinin sonuna bir eleman ekler?", { a: "pop()", b: " shift()", c: "push()", d: "unshift()" }, "c"),
    new Soru("3-JavaScript'te bir fonksiyonun çalıştırılmasını ertelemek için hangi yöntem kullanılır?", { a: "setTimeout()", b: "clearInterval()", c: "addEventListener()", d: "document.querySelector()" }, "a"),
    new Soru("4-4. JavaScript'te hangi operatör iki değerin eşit olup olmadığını tip kontrolüyle birlikte karşılaştırır?", { a: " ==", b: " ===", c: " !=",d: "||=" }, "b")
];
function zamanFarkiGoster() {
var sabahSaat = new Date(2023, 3, 2, 8, 0, 0); // 2 Nisan sabah saat 8
var suankiZaman = new Date(); // Şu anki zaman

var farkMilisaniye =  sabahSaat -suankiZaman;

// Farkı saniyeye çevir
var farkSaniye = Math.floor(farkMilisaniye / 1000) ;

// Farkı dakikaya çevir
var farkDakika = Math.floor(farkSaniye / 60);

// Farkı saate çevir
var farkSaat = Math.floor(farkDakika / 60);

// Farkı güne çevir
var farkGun = Math.floor(farkSaat / 24);

// Kullanılmayan saatleri hesapla
farkSaat %= 24;

// Kullanılmayan dakikaları hesapla
farkDakika %= 60;

// Kullanılmayan saniyeleri hesapla
farkSaniye %= 60;



let counter = document.querySelector("h1.counter")
counter.innerHTML = farkGun + " gün " + farkSaat + " saat " + farkDakika + " dakika " + farkSaniye + " saniye"


setTimeout(zamanFarkiGoster, 1000);
}

zamanFarkiGoster();
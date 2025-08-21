let ogrenciler = [];

function ogrenciEkle(event) {
    event.preventDefault();
    
    const id = document.getElementById("id").value;
    const isim = document.getElementById("isim").value;
    const soyisim = document.getElementById("soyisim").value;
    const not = document.getElementById("not").value;
    
    const yeniOgrenci = { id: Number(id), isim, soyisim, not: Number(not) };
    ogrenciler.push(yeniOgrenci);

    listeyiGuncelle();
    document.getElementById("ogrenciEkleForm").reset();
}

document.getElementById("ogrenciEkleForm").addEventListener("submit", ogrenciEkle);

function ogrenciSil() {
    const silId = document.getElementById("silId").value;
    ogrenciler = ogrenciler.filter(ogrenci => ogrenci.id !== Number(silId));
    listeyiGuncelle();
}

function notFiltrele() {
    const minNot = document.getElementById("minNot").value;
    const filtrenmisOgrenciler = ogrenciler.filter(ogrenci => ogrenci.not >= Number(minNot));
    listeyiGoster(filtrenmisOgrenciler);
}

function ortalamaHesapla() {
    if (ogrenciler.length === 0) {
        alert("Hiç öğrenci yok!");
        return;
    }
    const toplamNot = ogrenciler.reduce((toplam, ogrenci) => toplam + ogrenci.not, 0);
    const ortalama = (toplamNot / ogrenciler.length).toFixed(2);
    alert("Ortalama Not: " + ortalama);
}

function jsonIslemleri() {
    const ogrencilerJson = JSON.stringify(ogrenciler);
    console.log("JSON Verisi:", ogrencilerJson);

    const ogrencilerNesne = JSON.parse(ogrencilerJson);
    console.log("Nesne Verisi:", ogrencilerNesne);
}

function listeyiGuncelle() {
    listeyiGoster(ogrenciler);
}

function listeyiGoster(liste) {
    const ul = document.getElementById("ogrenciListesi");
    ul.innerHTML = "";
    liste.forEach(ogrenci => {
        ul.innerHTML += `<li>${ogrenci.id} - ${ogrenci.isim} ${ogrenci.soyisim} - Not: ${ogrenci.not}</li>`;
    });
}


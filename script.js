/* Bouwt de pagina op aan de hand van gegevens.js. Hier hoef je niets aan te passen. */

document.title = "Kunst van " + gegevens.naamKunstenaar;
document.getElementById("titel-header").textContent = "Kunst van " + gegevens.naamKunstenaar;
document.getElementById("over-tekst").textContent = gegevens.overDeKunstenaar;
document.getElementById("contact-email").textContent = gegevens.email;
document.getElementById("contact-email").href = "mailto:" + gegevens.email;
document.getElementById("footer-naam").textContent = gegevens.naamKunstenaar;

function bouwGalerij(containerId, lijst, map) {
    const container = document.getElementById(containerId);
    lijst.forEach(item => {
        const kaart = document.createElement("div");
        kaart.className = "kunstwerk";
        kaart.innerHTML = `
            <img src="foto's/${map}/${item.bestand}" alt="${item.titel}">
            <div class="beschrijving">
                <h3>${item.titel}</h3>
                <p>${item.beschrijving}</p>
            </div>
        `;
        container.appendChild(kaart);
    });
}

bouwGalerij("galerij-schilderijen", gegevens.schilderijen, "schilderijen");
bouwGalerij("galerij-beelden", gegevens.beelden, "beelden");

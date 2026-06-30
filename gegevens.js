/* =========================================================
   HIER VUL JE ALLES IN. Je hoeft verder nergens anders te kijken!

   - Foto's zet je in de map foto's/schilderijen of foto's/beelden
   - Hieronder verwijs je naar de bestandsnaam van die foto
   - Voeg een nieuw kunstwerk toe door een heel blokje
     { titel: ..., bestand: ..., beschrijving: ... }, te kopiëren
     en in de lijst te plakken.
   ========================================================= */

const gegevens = {

    naamKunstenaar: "Naam Opa",

    overDeKunstenaar:
        "Hier komt een korte omschrijving van de kunstenaar. " +
        "Bijvoorbeeld: sinds wanneer hij schildert en beeldhouwt, " +
        "wat zijn favoriete onderwerpen of stijl zijn, en wat kunst " +
        "voor hem betekent.",

    email: "naam@email.nl",

    schilderijen: [
        {
            titel: "Titel van het schilderij",
            bestand: "schilderij1.jpg",
            beschrijving: "Korte beschrijving van dit schilderij: bijvoorbeeld het onderwerp, de techniek of het jaar."
        },
        {
            titel: "Titel van het schilderij",
            bestand: "schilderij2.jpg",
            beschrijving: "Korte beschrijving van dit schilderij."
        }
    ],

    beelden: [
        {
            titel: "Titel van het beeld",
            bestand: "beeld1.jpg",
            beschrijving: "Korte beschrijving van dit beeld: bijvoorbeeld het materiaal of de inspiratie."
        },
        {
            titel: "Titel van het beeld",
            bestand: "beeld2.jpg",
            beschrijving: "Korte beschrijving van dit beeld."
        }
    ]

};

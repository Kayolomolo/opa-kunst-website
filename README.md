# Hoe pas ik de website aan?

Alles kan via de GitHub-website in je browser. Je hoeft niets te installeren of te programmeren.

De website zelf: **https://kayolomolo.github.io/opa-kunst-website/**

## 1. Een foto toevoegen

1. Ga naar de map [`foto's/schilderijen`](foto's/schilderijen) of [`foto's/beelden`](foto's/beelden), afhankelijk van wat je toevoegt.
2. Klik rechtsboven op **Add file → Upload files**.
3. Sleep je foto erin (of kies hem via "choose your files") en klik op **Commit changes**.
4. Onthoud de bestandsnaam van de foto, die heb je zo nodig.

## 2. De foto zichtbaar maken op de website (titel + tekst toevoegen)

1. Open het bestand [`gegevens.js`](gegevens.js).
2. Klik op het potloodje (✏️) rechtsboven om te bewerken.
3. Zoek het kopje `schilderijen:` of `beelden:`.
4. Kopieer een heel blokje zoals hieronder en plak het in de lijst (let op de komma's tussen blokjes):

```
{
    titel: "Titel van het kunstwerk",
    bestand: "naam-van-je-foto.jpg",
    beschrijving: "Korte beschrijving van dit kunstwerk."
}
```

5. Vul je eigen titel, de bestandsnaam van de geüploade foto, en je beschrijving in.
6. Scroll naar beneden en klik op **Commit changes**.

Na ongeveer 1 minuut staat de wijziging live op de website.

## 3. "Over de kunstenaar" tekst aanpassen

1. Open [`gegevens.js`](gegevens.js) en klik op het potloodje (✏️).
2. Pas de tekst aan achter `overDeKunstenaar:`.
3. Klik op **Commit changes**.

## 4. Naam of e-mailadres aanpassen

1. Open [`gegevens.js`](gegevens.js) en klik op het potloodje (✏️).
2. Pas `naamKunstenaar:` of `email:` aan.
3. Klik op **Commit changes**.

## Een kunstwerk verwijderen

Verwijder gewoon het hele blokje (van `{` tot en met `}`,) uit `gegevens.js` en klik op **Commit changes**.

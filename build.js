const fs = require("fs");
const path = require("path");

function leesMap(map) {
    if (!fs.existsSync(map)) return [];
    return fs.readdirSync(map)
        .filter(bestand => bestand.endsWith(".json"))
        .map(bestand => JSON.parse(fs.readFileSync(path.join(map, bestand), "utf8")))
        .map(item => ({
            ...item,
            bestand: item.bestand.startsWith("http") ? item.bestand : item.bestand.split("/").pop()
        }));
}

const instellingen = JSON.parse(fs.readFileSync("content/instellingen.json", "utf8"));
const schilderijen = leesMap("content/schilderijen");
const beelden = leesMap("content/beelden");

const inhoud = `/* Dit bestand wordt automatisch gegenereerd door build.js. Niet handmatig aanpassen — gebruik /admin */

const gegevens = ${JSON.stringify({ ...instellingen, schilderijen, beelden }, null, 4)};
`;

fs.writeFileSync("gegevens.js", inhoud);
console.log("gegevens.js gegenereerd.");

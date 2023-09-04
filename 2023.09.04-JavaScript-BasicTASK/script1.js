// Įveskite slaptažodį čia
var slaptažodis = "J111111111111111111111111111111111111111111#";

// Patikriname slaptažodžio ilgumą
if (slaptažodis.length < 16) {
    console.log("Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.");
} else {
    if (slaptažodis.length > 15 && slaptažodis.length <= 20) {
        console.log("Slaptažodis yra tinkamo ilgio. Tačiau rekomenduojama, jog jis būtų bent 21 simbolio ilgumo.");
    } else if (slaptažodis.length > 20) {
        console.log("Slaptažodis yra ilgesnis nei 20 simbolių. Slaptažodis tinkamas.");
    }

    // Patikriname, ar slaptažodyje yra grotažymių
    if (slaptažodis.indexOf("#") === -1) {
        console.log("Slaptažodis privalo turėti grotažymes.");
    }
}

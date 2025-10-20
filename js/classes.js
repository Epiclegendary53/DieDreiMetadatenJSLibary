"use strict";
class hörspiel {
    #nummer;
    #titel;
    #autor;
    #hörspielskriptautor;
    #gesamtbeschreibung;
    #beschreibung;
    #veröffentlichungsdatum;
    #gesamtdauer;
    #kapitel;
    #sprecherrollen;
    #links;
    #ids;
    #medien;
    constructor(nummer, titel, autor, hörspielskriptautor, gesamtbeschreibung, beschreibung, veröffentlichungsdatum, gesamtdauer, kapitel, sprecherrollen, links, ids, medien) {
        this.#nummer = nummer;
        this.#titel = titel;
        this.#autor = autor;
        this.#hörspielskriptautor = hörspielskriptautor;
        this.#gesamtbeschreibung = gesamtbeschreibung;
        this.#beschreibung = beschreibung;
        this.#veröffentlichungsdatum = veröffentlichungsdatum;
        this.#gesamtdauer = gesamtdauer;
        this.#kapitel = kapitel;
        this.#sprecherrollen = sprecherrollen;
        this.#links = links;
        this.#ids = ids;
        this.#medien = medien;
    }
    //Standart Getters
    get nummer() {
        return this.#nummer;
    }
    get titel() {
        return this.#titel;
    }
    get autor() {
        return this.#autor;
    }
    get hörspielskriptautor() {
        return this.#hörspielskriptautor;
    }
    get gesamtbeschreibung() {
        return this.#gesamtbeschreibung;
    }
    get beschreibung() {
        return this.#beschreibung;
    }
    get veröffentlichungsdatum() {
        return this.#veröffentlichungsdatum;
    }
    get gesamtdauer() {
        return this.#gesamtdauer;
    }
    get kapitel() {
        return this.#kapitel;
    }
    get sprecherrollen() {
        return this.#sprecherrollen;
    }
    get links() {
        return this.#links;
    }
    get ids() {
        return this.#ids;
    }
    get medien() {
        return this.#medien;
    }
}
class autor {
    #vorname;
    #nachname;
    constructor(vorname, nachname) {
        this.#vorname = vorname;
        this.#nachname = nachname;
    }
    get vorname() {
        return this.#vorname;
    }
    get nachname() {
        return this.#nachname;
    }
    get vollerName() {
        return `${this.#vorname} ${this.#nachname}`;
    }
}
class hörspielskriptautor {
    #vorname;
    #nachname;
    constructor(vorname, nachname) {
        this.#vorname = vorname;
        this.#nachname = nachname;
    }
    get vorname() {
        return this.#vorname;
    }
    get nachname() {
        return this.#nachname;
    }
    get vollerName() {
        return `${this.#vorname} ${this.#nachname}`;
    }
}
class kapitel {
    #titel;
    #start;
    #end;
    constructor(titel, start, end) {
        this.#titel = titel;
        this.#start = new startTime(start);
        this.#end = new endTime(end);
    }
    get titel() {
        return this.#titel;
    }
    get start() {
        return this.#start;
    }
    get end() {
        return this.#end;
    }
}
class sprecherrolle {
    #rolle;
    #sprecher;
    #pseudonym;
    get rolle() {
        return this.#rolle;
    }
    get sprecher() {
        return this.#sprecher;
    }
    get pseudonym() {
        return this.#pseudonym;
    }
    constructor(rolle, sprecher, pseudonym) {
        this.#rolle = rolle;
        this.#sprecher = new sprecherName(sprecher);
        this.#pseudonym = new pseudonymName(pseudonym);
    }
}
class links {
    #json;
    #ffmetadata;
    #cover;
    #cover2;
    #cover_itunes;
    #diedreifragezeichen;
    #appleMusic;
    #spotify;
    #bookbeat;
    #amazonMusic;
    #amazon;
    #youTubeMusic;
    #deezer;
    get json() {
        return this.#json;
    }
    get ffmetadata() {
        return this.#ffmetadata;
    }
    get cover() {
        return this.#cover;
    }
    get cover2() {
        return this.#cover2;
    }
    get cover_itunes() {
        return this.#cover_itunes;
    }
    get diedreifragezeichen() {
        return this.#diedreifragezeichen;
    }
    get appleMusic() {
        return this.#appleMusic;
    }
    get spotify() {
        return this.#spotify;
    }
    get bookbeat() {
        return this.#bookbeat;
    }
    get amazonMusic() {
        return this.#amazonMusic;
    }
    get amazon() {
        return this.#amazon;
    }
    get youTubeMusic() {
        return this.#youTubeMusic;
    }
    get deezer() {
        return this.#deezer;
    }
    get allAsArray() {
        return [
            this.#json,
            this.#ffmetadata,
            this.#cover,
            this.#cover2,
            this.#cover_itunes,
            this.#diedreifragezeichen,
            this.#appleMusic,
            this.#spotify,
            this.#bookbeat,
            this.#amazonMusic,
            this.#amazon,
            this.#youTubeMusic,
            this.#deezer,
        ];
    }
    constructor(json, ffmetadata, cover, cover2, cover_itunes, diedreifragezeichen, appleMusic, spotify, bookbeat, amazonMusic, amazon, youTubeMusic, deezer) {
        this.#json = json;
        this.#ffmetadata = ffmetadata;
        this.#cover = cover;
        this.#cover2 = cover2;
        this.#cover_itunes = cover_itunes;
        this.#diedreifragezeichen = diedreifragezeichen;
        this.#appleMusic = appleMusic;
        this.#spotify = spotify;
        this.#bookbeat = bookbeat;
        this.#amazonMusic = amazonMusic;
        this.#amazon = amazon;
        this.#youTubeMusic = youTubeMusic;
        this.#deezer = deezer;
    }
}
class ids {
    #dreimetadaten;
    #appleMusic;
    #spotify;
    #bookbeat;
    #amazonMusic;
    #amazon;
    #youTubeMusic;
    #deezer;
    get dreimetadaten() {
        return this.#dreimetadaten;
    }
    get appleMusic() {
        return this.#appleMusic;
    }
    get spotify() {
        return this.#spotify;
    }
    get bookbeat() {
        return this.#bookbeat;
    }
    get amazonMusic() {
        return this.#amazonMusic;
    }
    get amazon() {
        return this.#amazon;
    }
    get youTubeMusic() {
        return this.#youTubeMusic;
    }
    get deezer() {
        return this.#deezer;
    }
    get allAsArray() {
        return [
            this.#dreimetadaten,
            this.#appleMusic,
            this.#spotify,
            this.#bookbeat,
            this.#amazonMusic,
            this.#amazon,
            this.#youTubeMusic,
            this.#deezer,
        ];
    }
    constructor(dreimetadaten, appleMusic, spotify, bookbeat, amazonMusic, amazon, youTubeMusic, deezer) {
        this.#dreimetadaten = dreimetadaten;
        this.#appleMusic = appleMusic;
        this.#spotify = spotify;
        this.#bookbeat = bookbeat;
        this.#amazonMusic = amazonMusic;
        this.#amazon = amazon;
        this.#youTubeMusic = youTubeMusic;
        this.#deezer = deezer;
    }
}
class medium {
    #tracks;
    #ripLog;
    constructor(tracks, ripLog) {
        this.#tracks = tracks;
        this.#ripLog = ripLog;
    }
    get tracks() {
        return this.#tracks;
    }
    get ripLog() {
        return this.#ripLog;
    }
}
class veröffentlichungsdatum {
    #veröffentlichungsDatum;
    constructor(datum) {
        this.#veröffentlichungsDatum = datum;
    }
    get asString() {
        return this.#veröffentlichungsDatum.toLocaleDateString();
    }
    get asDate() {
        return this.#veröffentlichungsDatum;
    }
    get asUnixTimeStamp() {
        return this.#veröffentlichungsDatum.valueOf();
    }
    get daysSince() {
        return Math.floor((Date.now() - this.#veröffentlichungsDatum) / 1000 / 60 / 60 / 24);
    }
}
//Klasse für Interne Verwendung
class gesamtdauer {
    #gesamtdauer;
    constructor(gesamtdauer) {
        this.#gesamtdauer = gesamtdauer;
    }
    get inMilliseconds() {
        return this.#gesamtdauer;
    }
    //Rundet auf 3 Nachkommastellen
    get inSeconds() {
        return Number((this.#gesamtdauer / 1000).toFixed(3));
    }
    //Rundet auf 3 Nachkommastellen
    get inMinutes() {
        return Number((this.#gesamtdauer / 60000).toFixed(3));
    }
    //Rundet auf 3 Nachkommastellen
    get inHoures() {
        return Number((this.#gesamtdauer / 3600000).toFixed(3));
    }
    //Rundet auf 0 Nachkommastellen
    get inMinuteAndSecond() {
        const ZeitPunkAlsSekunden = this.#gesamtdauer / 1000;
        const minute = Math.floor(this.#gesamtdauer / 60000);
        const sekunden = Math.round(ZeitPunkAlsSekunden - (minute * 60));
        return `${minute}:${sekunden}`;
    }
    //Rundet auf 0 Nachkommastellen
    get inHoursAndMinuts() {
        const hours = Math.floor(this.inMinutes / 60);
        const minutes = Math.round(this.inMinutes % 60);
        return `${hours}:${minutes}`;
    }
}
//Klasse für Interne Verwendung
class startTime {
    #start;
    constructor(start) {
        this.#start = start;
    }
    //Rundet hier unnötig da keine Berechnung
    get inMillisecons() {
        return this.#start;
    }
    //Rundet noch Garnicht
    get inSecond() {
        return this.#start / 1000;
    }
    //Runden mit in die Doku aufnehmen
    //Rundet auf 0 Nachkommastellen
    get inMinute() {
        return Math.round(this.#start / 60000);
    }
    //Rundet auf 3 Nachkommastellen
    get inHour() {
        return Number((this.#start / 3600000).toFixed(3));
        //return Math.round((this.#start / 3600000) * 100) / 1000;
    }
    //Rundet auf 0 Nachkommastellen
    get inHourAndMinute() {
        const houres = Math.floor(this.#start / 3600000);
        const minutes = Math.round((this.#start / 60000) % 60);
        return `${houres}:${minutes}`;
    }
    //Rundet auf 0 Nachkommastellen
    get inMinuteAndSecond() {
        const ZeitPunkAlsSekunden = this.#start / 1000;
        const minute = Math.floor(this.#start / 60000);
        const sekunden = Math.round(ZeitPunkAlsSekunden - (minute * 60));
        return `${minute}:${sekunden}`;
    }
}
//Klasse für Interne Verwendung
class endTime {
    #end;
    constructor(end) {
        this.#end = end;
    }
    //Rundet hier unnötig da keine Berechnung
    get inMillisecons() {
        return this.#end;
    }
    //Rundet noch Garnicht
    get inSecond() {
        return this.#end / 1000;
    }
    //Runden mit in die Doku aufnehmen
    //Rundet auf 0 Nachkommastellen
    get inMinute() {
        return Math.round(this.#end / 60000);
    }
    //Rundet auf 3 Nachkommastellen
    get inHour() {
        return Number((this.#end / 3600000).toFixed(3));
        //return Math.round((this.#start / 3600000) * 100) / 1000;
    }
    //Rundet auf 0 Nachkommastellen
    get inHourAndMinute() {
        const houres = Math.floor(this.#end / 3600000);
        const minutes = Math.round((this.#end / 60000) % 60);
        return `${houres}:${minutes}`;
    }
    //Rundet auf 0 Nachkommastellen
    get inMinuteAndSecond() {
        const ZeitPunkAlsSekunden = this.#end / 1000;
        const minute = Math.floor(this.#end / 60000);
        const sekunden = Math.round(ZeitPunkAlsSekunden - (minute * 60));
        return `${minute}:${sekunden}`;
    }
}
//Klasse für Interne Verwendung
class sprecherName {
    #sprecher;
    constructor(sprecher) {
        this.#sprecher = sprecher;
    }
    get vorname() {
        return this.#sprecher.substring(0, this.#sprecher.lastIndexOf(' '));
    }
    get nachname() {
        return this.#sprecher.substring(this.#sprecher.lastIndexOf(' ') + 1, this.#sprecher.length);
    }
    get vollerName() {
        return this.#sprecher;
    }
}
class pseudonymName {
    #pseudonym;
    constructor(pseudonym) {
        this.#pseudonym = pseudonym;
        if (pseudonym == null || pseudonym == undefined) {
            this.#pseudonym = "Kein Pseudonym";
        }
    }
    get vorname() {
        return this.#pseudonym.substring(0, this.#pseudonym.lastIndexOf(' '));
    }
    get nachname() {
        return this.#pseudonym.substring(this.#pseudonym.lastIndexOf(' ') + 1, this.#pseudonym.length);
    }
    get vollerName() {
        return this.#pseudonym;
    }
}
//TODO: Maybe bestimmte Klassen nur Intern nutzbar machen?

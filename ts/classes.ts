class hörspiel {
    #nummer: number;
    #titel: string;
    #autor :autor;
    #hörspielskriptautor: hörspielskriptautor;
    #gesamtbeschreibung: string;
    #beschreibung: string;
    #veröffentlichungsdatum: veröffentlichungsdatum;
    #gesamtdauer: gesamtdauer;
    #kapitel: Array<kapitel>;
    #sprechrollen: Array<sprechrolle>;
    #links: links;
    #ids: ids;
    #medien: Array<medium>;

    constructor(nummer: number, titel: string, autor: autor, hörspielskriptautor: hörspielskriptautor, gesamtbeschreibung: string, beschreibung: string, veröffentlichungsdatum: veröffentlichungsdatum, gesamtdauer: gesamtdauer, kapitel: kapitel[], sprechrollen: sprechrolle[], links: links, ids: ids, medien: medium[]) {
        this.#nummer = nummer;
        this.#titel = titel;
        this.#autor = autor;
        this.#hörspielskriptautor = hörspielskriptautor;
        this.#gesamtbeschreibung = gesamtbeschreibung;
        this.#beschreibung = beschreibung;
        this.#veröffentlichungsdatum = veröffentlichungsdatum;
        this.#gesamtdauer = gesamtdauer;
        this.#kapitel = kapitel;
        this.#sprechrollen = sprechrollen;
        this.#links = links;
        this.#ids = ids;
        this.#medien = medien;
    }

    //Standart Getters
    get nummer():number{
        return this.#nummer;
    }

    get titel():string{
        return this.#titel;
    }

    get autor():autor{
        return this.#autor;
    }

    get hörspielskriptautor():hörspielskriptautor{
        return this.#hörspielskriptautor;
    }

    get gesamtbeschreibung():string{
        return this.#gesamtbeschreibung;
    }

    get beschreibung():string{
        return this.#beschreibung;
    }

    get veröffentlichungsdatum():veröffentlichungsdatum{
        return this.#veröffentlichungsdatum;
    }
    
    get gesamtdauer():gesamtdauer{
        return this.#gesamtdauer;
    }

    get kapitel():kapitel[]{
        return this.#kapitel;
    }

    get sprechrollen():sprechrolle[]{
        return this.#sprechrollen;
    }

    get links():links{
        return this.#links;
    }

    get ids():ids{
        return this.#ids;
    }

    get medien():medium[]{
        return this.#medien;
    }
}

class autor {
    #vorname: string;
    #nachname: string;

    constructor(vorname: string, nachname: string) {
        this.#vorname = vorname;
        this.#nachname = nachname;
    }

    get vorname():string{
        return this.#vorname;
    }

    get nachname():string{
        return this.#nachname;
    }

    get vollerName():string{
        return `${this.#vorname} ${this.#nachname}`;
    }
}

class hörspielskriptautor{
    #vorname: string;
    #nachname: string;

    constructor(vorname: string, nachname: string) {
        this.#vorname = vorname;
        this.#nachname = nachname;
    }

    get vorname():string{
        return this.#vorname;
    }

    get nachname():string{
        return this.#nachname;
    }

    get vollerName():string{
        return `${this.#vorname} ${this.#nachname}`
    }
}

class kapitel {
    #titel: string;
    #start: startTime;
    #end: endTime;

    constructor(titel: string, start: number, end: number) {
        this.#titel = titel;
        this.#start = new startTime(start);
        this.#end = new endTime(end);
    }

    get titel():string{
        return this.#titel;
    }

    get start():startTime{
        return this.#start;
    }

    get end():endTime{
        return this.#end;
    }
}

class sprechrolle{
    #rolle: string;
    #sprecher: sprecherName;
    #pseudonym:pseudonymName;


    get rolle():string {
        return this.#rolle;
    }

    get sprecher():sprecherName {
        return this.#sprecher;
    }

    get pseudonym():pseudonymName{
        return this.#pseudonym;
    }

    constructor(rolle: string, sprecher: string,pseudonym:string) {
        this.#rolle = rolle;
        this.#sprecher = new sprecherName(sprecher);
        this.#pseudonym = new pseudonymName(pseudonym);
    }
}

class links {
    #json: string;
    #ffmetadata: string;
    #cover: string;
    #cover2: string[];
    #cover_itunes: string;
    #diedreifragezeichen: string;
    #appleMusic: string;
    #spotify: string;
    #bookbeat: string;
    #amazonMusic: string;
    #amazon: string;
    #youTubeMusic: string;
    #deezer: string;

    get json():string{
        return this.#json;
    }

    get ffmetadata():string{
        return this.#ffmetadata;
    }

    get cover():string{
        return this.#cover;
    }

    get cover2():string[]{
        return this.#cover2;
    }

    get cover_itunes(){
        return this.#cover_itunes;
    }

    get diedreifragezeichen():string{
        return this.#diedreifragezeichen;
    }

    get appleMusic():string{
        return this.#appleMusic;
    }

    get spotify():string{
        return this.#spotify;
    }

    get bookbeat():string{
        return this.#bookbeat;
    }

    get amazonMusic():string{
        return this.#amazonMusic;
    }

    get amazon():string{
        return this.#amazon;
    }

    get youTubeMusic():string{
        return this.#youTubeMusic;
    }

    get deezer():string{
        return this.#deezer;
    }

    get allAsArray(){
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
        ]
    }

    constructor(json: string, ffmetadata: string, cover: string, cover2: string[], cover_itunes: string, diedreifragezeichen: string, appleMusic: string, spotify: string, bookbeat: string, amazonMusic: string, amazon: string, youTubeMusic: string, deezer: string) {
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

        //Mayne ändern?
        if(cover2 == null || cover2 == undefined){
            this.#cover2 = ["Keine Alternativen Cover vorhanden"];
        }
    }
}

class ids { 
    #dreimetadaten: number;
    #appleMusic: string;
    #spotify: string;
    #bookbeat: string;
    #amazonMusic: string;
    #amazon: string;
    #youTubeMusic: string;
    #deezer: string;

    get dreimetadaten():number{
        return this.#dreimetadaten;   
    }

    get appleMusic():string{
        return this.#appleMusic;
    }

    get spotify():string{
        return this.#spotify;
    }

    get bookbeat():string{
        return this.#bookbeat;
    }

    get amazonMusic():string{
        return this.#amazonMusic;
    }

    get amazon():string{
        return this.#amazon;
    }

    get youTubeMusic():string{
        return this.#youTubeMusic;
    }

    get deezer():string{
        return this.#deezer;
    }

    get allAsArray(){
        return [
            this.#dreimetadaten,
            this.#appleMusic,
            this.#spotify,
            this.#bookbeat,
            this.#amazonMusic,
            this.#amazon,
            this.#youTubeMusic,
            this.#deezer,
        ]
    }


    constructor(dreimetadaten: number, appleMusic: string, spotify: string, bookbeat: string, amazonMusic: string, amazon: string, youTubeMusic: string, deezer: string) {
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
    #tracks: kapitel[];
    #ripLog: string;

    constructor(tracks: kapitel[], ripLog: string) {
        this.#tracks = tracks;
        this.#ripLog = ripLog;
    }

    get tracks():kapitel[]{
        return this.#tracks;
    }

    get ripLog():string{
        return this.#ripLog;
    }
}

class veröffentlichungsdatum{
    #veröffentlichungsDatum:Date;

    constructor(datum:Date){
            this.#veröffentlichungsDatum = datum;
    }

    get asString():string{
        return this.#veröffentlichungsDatum.toLocaleDateString();
    }

    get asDate():Date{
        return this.#veröffentlichungsDatum;
    }

    get asUnixTimeStamp(){
        return this.#veröffentlichungsDatum.valueOf();
    }

    get daysSince():Number{
        return Math.floor((Date.now() - this.#veröffentlichungsDatum) / 1000 / 60 / 60 / 24);
    }
}

//Klasse für Interne Verwendung
class gesamtdauer{
    #gesamtdauer:number;

    constructor(gesamtdauer:number){
        this.#gesamtdauer = gesamtdauer;
    }

    get inMilliseconds():number{
        return this.#gesamtdauer;
    }

    //Rundet auf 3 Nachkommastellen
    get inSeconds():number{
        return Number((this.#gesamtdauer / 1000).toFixed(3))
    }

    //Rundet auf 3 Nachkommastellen
    get inMinutes():number{
        return Number((this.#gesamtdauer / 60000).toFixed(3))
    }

    //Rundet auf 3 Nachkommastellen
    get inHoures():number{
        return Number((this.#gesamtdauer /3600000).toFixed(3))
    }

    //Rundet auf 0 Nachkommastellen
    get inMinuteAndSecond():string{
        const ZeitPunkAlsSekunden = this.#gesamtdauer / 1000;
        const minute = Math.floor(this.#gesamtdauer / 60000);
        const sekunden = Math.round(ZeitPunkAlsSekunden - (minute * 60));
        return `${minute}:${sekunden}`;
    }

    //Rundet auf 0 Nachkommastellen
    get inHoursAndMinuts():string{
        const hours = Math.floor(this.inMinutes/60);
        const minutes = Math.round(this.inMinutes % 60);
        return `${hours}:${minutes}`;
    }
}

//Klasse für Interne Verwendung
class startTime{
    #start:number;

    constructor(start:number){
        this.#start = start;
    }

    //Rundet hier unnötig da keine Berechnung
    get inMillisecons():number{
        return this.#start;
    }

    //Rundet noch Garnicht
    get inSecond():number{
        return this.#start / 1000;
    }

    //Runden mit in die Doku aufnehmen
    //Rundet auf 0 Nachkommastellen
    get inMinute():number{
        return Math.round(this.#start / 60000);
    }

    //Rundet auf 3 Nachkommastellen
    get inHour():number{
        return Number((this.#start / 3600000).toFixed(3));
        //return Math.round((this.#start / 3600000) * 100) / 1000;
    }

    //Rundet auf 0 Nachkommastellen
    get inHourAndMinute():string{
        const houres = Math.floor(this.#start / 3600000);
        const minutes = Math.round((this.#start / 60000) % 60);
        return `${houres}:${minutes}`;
    }

    //Rundet auf 0 Nachkommastellen
    get inMinuteAndSecond():string{
        const ZeitPunkAlsSekunden = this.#start / 1000;
        const minute = Math.floor(this.#start / 60000);
        const sekunden = Math.round(ZeitPunkAlsSekunden - (minute * 60));
        return `${minute}:${sekunden}`;
    }
}

//Klasse für Interne Verwendung
class endTime{
    #end:number;

    constructor(end:number){
        this.#end = end;
    }


     //Rundet hier unnötig da keine Berechnung
    get inMillisecons():number{
        return this.#end;
    }

    //Rundet noch Garnicht
    get inSecond():number{
        return this.#end / 1000;
    }
    
    //Runden mit in die Doku aufnehmen
    //Rundet auf 0 Nachkommastellen
    get inMinute():number{
        return Math.round(this.#end / 60000);
    }

    //Rundet auf 3 Nachkommastellen
    get inHour():number{
        return Number((this.#end / 3600000).toFixed(3));
        //return Math.round((this.#start / 3600000) * 100) / 1000;
    }

    //Rundet auf 0 Nachkommastellen
    get inHourAndMinute():string{
        const houres = Math.floor(this.#end / 3600000);
        const minutes = Math.round((this.#end / 60000) % 60);
        return `${houres}:${minutes}`;
    }

    //Rundet auf 0 Nachkommastellen
    get inMinuteAndSecond():string{
        const ZeitPunkAlsSekunden = this.#end / 1000;
        const minute = Math.floor(this.#end / 60000);
        const sekunden = Math.round(ZeitPunkAlsSekunden - (minute * 60));
        return `${minute}:${sekunden}`;
    }
}

//Klasse für Interne Verwendung
class sprecherName{
    #sprecher:string;

    constructor(sprecher:string){
        this.#sprecher = sprecher;
    }

    get vorname():string{
        return this.#sprecher.substring(0,this.#sprecher.lastIndexOf(' '));
    }

    get nachname():string{
        return this.#sprecher.substring(this.#sprecher.lastIndexOf(' ') + 1,this.#sprecher.length);
    }

    get vollerName():string{
        return this.#sprecher;
    }
}

class pseudonymName {
    #pseudonym:string;

    constructor(pseudonym:string){
        this.#pseudonym = pseudonym;
        //Mayne ändern?
        if(pseudonym == null || pseudonym == undefined){
            this.#pseudonym = "Kein Pseudonym"
        }
    }

    get vorname():string{
        return this.#pseudonym.substring(0,this.#pseudonym.lastIndexOf(' '));
    }

    get nachname():string{
        return this.#pseudonym.substring(this.#pseudonym.lastIndexOf(' ') + 1,this.#pseudonym.length);
    }

    get vollerName():string{
        return this.#pseudonym;
    }
}

//TODO: Maybe bestimmte Klassen nur Intern nutzbar machen?
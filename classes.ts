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
    #sprecherrollen: Array<sprecherrolle>;
    #links: links;
    #ids: ids;
    #medien: Array<medium>;

    constructor(nummer: number, titel: string, autor: autor, hörspielskriptautor: hörspielskriptautor, gesamtbeschreibung: string, beschreibung: string, veröffentlichungsdatum: veröffentlichungsdatum, gesamtdauer: gesamtdauer, kapitel: kapitel[], sprecherrollen: sprecherrolle[], links: links, ids: ids, medien: medium[]) {
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

    get sprecherrollen():sprecherrolle[]{
        return this.#sprecherrollen;
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
    #end: number;

    constructor(titel: string, start: number, end: number) {
        this.#titel = titel;
        this.#start = new startTime(start);
        this.#end = end;
    }

    get titel():string{
        return this.#titel;
    }

    get start(){
        return this.#start;
    }

    get end():number{
        return this.#end;
    }
}

class sprecherrolle{
    #rolle: string;
    #sprecher: string;

    get rolle():string {
        return this.#rolle;
    }

    get sprecher():string {
        return this.#sprecher;
    }

    constructor(rolle: string, sprecher: string) {
        this.#rolle = rolle;
        this.#sprecher = sprecher;
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
}

class gesamtdauer{
    #gesamtdauer:number;

    constructor(gesamtdauer:number){
        this.#gesamtdauer = gesamtdauer;
    }

    get inMilliseconds():number{
        return this.#gesamtdauer;
    }
    //Vieleicht Ergebnisse Runden
    get inSeconds():number{
        return this.#gesamtdauer / 1000;
    }

    get inMinutes():number{
        return this.#gesamtdauer / 60000;
    }

    get inHoures():number{
        return this.#gesamtdauer / 3600000;
    }

    get inHoursAndMinuts():string{
        const hours = Math.floor(this.inMinutes/60);
        const minutes = Math.round(this.inMinutes % 60);
        return `${hours}:${minutes}`;
    }
}

class startTime{
    #start:number;

    get inMillisecons(){
        return this.#start;
    }

    constructor(start:number){
        this.#start = start;
    }

    //Runden mit in die Doku aufnehmen
    get inMinute(){
        return Math.round(this.#start / 60000);
    }

    get inSecond(){
        return this.#start / 1000;
    }

    

    get inHourAndMinute(){
        const houres = Math.floor(this.#start / 3600000);
        const minutes = Math.floor(this.#start / 60000);
        return `${houres}:${minutes}`;
    }

    get inMinuteAndSecond(){
        const ZeitPunkAlsSekunden = this.#start / 1000;
        const minute = Math.floor(this.#start / 60000);
        const sekunden = Math.round(ZeitPunkAlsSekunden - (minute * 60));
        return `${minute}:${sekunden}`;
    }

}

//TODO: Maybe bestimmte Klassen nur Intern nutzbar machen?
class hörspiel {
    #nummer: number;
    #titel: string;
    #autor :autor;
    #hörspielskriptautor: hörspielskriptautor;
    #gesamtbeschreibung: string;
    #beschreibung: string;
    #veröffentlichungdatum: Date;
    #gesamtdauer: number;
    #kapitel: kapitel[];
    #sprecherrollen: sprecherrolle[];
    #links: links[];
    #ids: ids[];
    #medien: medien[];

    constructor(nummer: number, titel: string, autor: autor, hörspielskriptautor: hörspielskriptautor, gesamtbeschreibung: string, beschreibung: string, veröffentlichungdatum: Date, gesamtdauer: number, kapitel: kapitel[], sprecherrollen: sprecherrolle[], links: links[], ids: ids[], medien: medien[]) {
        this.#nummer = nummer;
        this.#titel = titel;
        this.#autor = autor;
        this.#hörspielskriptautor = hörspielskriptautor;
        this.#gesamtbeschreibung = gesamtbeschreibung;
        this.#beschreibung = beschreibung;
        this.#veröffentlichungdatum = veröffentlichungdatum;
        this.#gesamtdauer = gesamtdauer;
        this.#kapitel = kapitel;
        this.#sprecherrollen = sprecherrollen;
        this.#links = links;
        this.#ids = ids;
        this.#medien = medien;
    }

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

    get veröffentlichungsdatum():Date{
        return this.#veröffentlichungdatum;
    }
    
    get gesamtdauer():Number{
        return this.#gesamtdauer;
    }

    get kapitel():kapitel[]{
        return this.#kapitel;
    }

    get sprecherrollen():sprecherrolle[]{
        return this.#sprecherrollen;
    }

    get links():links[]{
        return this.#links;
    }

    get ids():ids[]{
        return this.#ids;
    }

    get medien():medien[]{
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
}

class kapitel {
    #titel: string;
    #start: number;
    #end: number;

    constructor(titel: string, start: number, end: number) {
        this.#titel = titel;
        this.#start = start;
        this.#end = end;
    }

    get titel():string{
        return this.#titel;
    }

    get start():number{
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

class medien {
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
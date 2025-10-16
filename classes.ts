class hörspiel {
    nummer: number;
    titel: string;
    autor :autor;
    hörspielskriptautor: hörspielskriptautor;
    gesamtbeschreibung: string;
    beschreibung: string;
    veröffentlichungdatum: Date;
    gesamtdauer: number;
    kapitel: kapitel[];
    sprecherrollen: sprecherrolle[];
    links: links;
    ids: ids;
    medien: medien[];
}


class autor {
    vorname: string;
    nachname: string;

    constructor(vorname: string, nachname: string) {
        this.vorname = vorname;
        this.nachname = nachname;
    }
}

class hörspielskriptautor{
    vorname: string;
    nachname: string;

    constructor(vorname: string, nachname: string) {
        this.vorname = vorname;
        this.nachname = nachname;
    }
}

class kapitel {
    titel: string;
    start: number;
    end: number;

    constructor(titel: string, start: number, end: number) {
        this.titel = titel;
        this.start = start;
        this.end = end;
    }
}

class sprecherrolle{
    rolle: string;
    sprecher: string;

    constructor(rolle: string, sprecher: string) {
        this.rolle = rolle;
        this.sprecher = sprecher;
    }
}

class links {
    json: string;
    ffmetadata: string;
    cover: string;
    cover2: string[];
    cover_itunes: string;
    diedreifragezeichen: string;
    appleMusic: string;
    spotify: string;
    bookbeat: string;
    amazonMusic: string;
    amazon: string;
    youTubeMusic: string;
    deezer: string;

    constructor(json: string, ffmetadata: string, cover: string, cover2: string[], cover_itunes: string, diedreifragezeichen: string, appleMusic: string, spotify: string, bookbeat: string, amazonMusic: string, amazon: string, youTubeMusic: string, deezer: string) {
        this.json = json;
        this.ffmetadata = ffmetadata;
        this.cover = cover;
        this.cover2 = cover2;
        this.cover_itunes = cover_itunes;
        this.diedreifragezeichen = diedreifragezeichen;
        this.appleMusic = appleMusic;
        this.spotify = spotify;
        this.bookbeat = bookbeat;
        this.amazonMusic = amazonMusic;
        this.amazon = amazon;
        this.youTubeMusic = youTubeMusic;
        this.deezer = deezer;
    }
}

class ids {
    dreimetadaten: number;
    appleMusic: string;
    spotify: string;
    bookbeat: string;
    amazonMusic: string;
    amazon: string;
    youTubeMusic: string;
    deezer: string;

    constructor(dreimetadaten: number, appleMusic: string, spotify: string, bookbeat: string, amazonMusic: string, amazon: string, youTubeMusic: string, deezer: string) {
        this.dreimetadaten = dreimetadaten;
        this.appleMusic = appleMusic;
        this.spotify = spotify;
        this.bookbeat = bookbeat;
        this.amazonMusic = amazonMusic;
        this.amazon = amazon;
        this.youTubeMusic = youTubeMusic;
        this.deezer = deezer;
    }
}

class medien {
    tracks: kapitel[];
    ripLog: string;

    constructor(tracks: kapitel[], ripLog: string) {
        this.tracks = tracks;
        this.ripLog = ripLog;
    }
}
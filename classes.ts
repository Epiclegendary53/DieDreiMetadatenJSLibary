
//Umbedungt sachen "Umbauen" und Möglicherweise Propertys ändern da sie jetzt für Datenbanken ausgelegt wurden
class hörspiel {
    hörspielID: number;
    titel: string;
    kurzbeschreibung: string;
    beschreibung: string;
    metabeschreibung: string;
    veröffentlichungsdatum : Date;
    unvollständig: boolean;
    cover: number;
    urlCoverApple: string;
    urlCoverKosmos: string;
    urlCoverDreifragezeichen: string;
    idAppleMusic: string;
    idSpotify: string;
    idBookbeat: string;
    idAmazonMusic: string;
    idAmazon: string;
    idYouTubeMusic: string;
    idDeezer: string;
    tracks: track[];
    

    constructor(tracks:track[],hörspielID: number, titel: string, kurzbeschreibung: string, beschreibung: string, metabeschreibung: string, veröffentlichungsdatum : Date, unvollständig: boolean, cover: number, urlCoverApple: string, urlCoverKosmos: string, urlCoverDreifragezeichen: string, idAppleMusic: string, idSpotify: string, idBookbeat: string, idAmazonMusic: string, idAmazon: string, idYouTubeMusic: string, idDeezer: string) {
        this.hörspielID = hörspielID;
        this.titel = titel;
        this.kurzbeschreibung = kurzbeschreibung;
        this.beschreibung = beschreibung;
        this.metabeschreibung = metabeschreibung;
        this.veröffentlichungsdatum = veröffentlichungsdatum;
        this.unvollständig = unvollständig;
        this.cover = cover;
        this.urlCoverApple = urlCoverApple;
        this.urlCoverKosmos = urlCoverKosmos;
        this.urlCoverDreifragezeichen = urlCoverDreifragezeichen;
        this.idAppleMusic = idAppleMusic;
        this.idSpotify = idSpotify;
        this.idBookbeat = idBookbeat;
        this.idAmazonMusic = idAmazonMusic;
        this.idAmazon = idAmazon;
        this.idYouTubeMusic = idYouTubeMusic;
        this.idDeezer = idDeezer;
        this.tracks = tracks;
    }  
}

class medium {
    mediaumID: number;
    hörspielId: number;
    position: number;
    ripLog: boolean
    musicBrainzID: string;

    constructor(mediaumID: number, hörspielId: number, position: number, ripLog: boolean, musicBrainzID: string) {
        this.mediaumID = mediaumID;
        this.hörspielId = hörspielId;
        this.position = position;
        this.ripLog = ripLog;
        this.musicBrainzID = musicBrainzID;
    }
}

class track {
    trackID: number;
    mediumID: number;
    position: number;
    titel: string;
    dauer: string;

    constructor(trackID: number, mediumID: number, position: number, titel: string, dauer: string) {
        this.trackID = trackID;
        this.mediumID = mediumID;
        this.position = position;
        this.titel = titel;
        this.dauer = dauer;
    }
}

class kapitel {
    trackID: number;
    hörspielID: number;
    position: number;
    abweichenderTitel: string;

    constructor(trackID: number, hörspielID: number, position: number, abweichenderTitel: string) {
        this.trackID = trackID;
        this.hörspielID = hörspielID;
        this.position = position;
        this.abweichenderTitel = abweichenderTitel;
    }
}

class person {
    personId: number;
    name: string;

    constructor(personId: number, name: string) {
        this.personId = personId;
        this.name = name;
    }
}

class pseudonym {
    pseudonymId: number;
    name: string;

    constructor(pseudonymId: number, name: string) {
        this.pseudonymId = pseudonymId;
        this.name = name;
    }
}

class rolle {
    rolleId: number;
    name: string;

    constructor(rolleId: number, name: string) {
        this.rolleId = rolleId;
        this.name = name;
    }
}

class sprecherrole {
    sprecherRolleId: number;
    hörspielId: number;
    personId: number;
    rolleId: number;
    position: number;

    constructor(sprecherRolleId: number, hörspielId: number, personId: number, rolleId: number, position: number) {
        this.sprecherRolleId = sprecherRolleId;
        this.hörspielId = hörspielId;
        this.personId = personId;
        this.rolleId = rolleId;
        this.position = position;
    }
}

class sprecherrolleTeil {
    sprecherRolleId: number;
    hörspielId: number;
    position: number;

    constructor(sprecherRolleId: number, hörspielId: number, position: number) {
        this.sprecherRolleId = sprecherRolleId;
        this.hörspielId = hörspielId;
        this.position = position;
    }
}

class spricht {
    sprecherRolleId: number;
    personId: number
    pseudonymId: number;
    position: number;

    constructor(sprecherRolleId: number, personId: number, pseudonymId: number, position: number) {
        this.sprecherRolleId = sprecherRolleId;
        this.personId = personId;
        this.pseudonymId = pseudonymId;
        this.position = position;
    }
}

class hörspielAutor {
    hörspielId: number;
    personId: number;

    constructor(hörspielId: number, personId: number) {
        this.hörspielId = hörspielId;
        this.personId = personId;
    }
}

class hörspielSkriptAutor {
    hörspielId: number;
    personId: number;

    constructor(hörspielId: number, personId: number) {
        this.hörspielId = hörspielId;
        this.personId = personId;
    }
}
async function getDataViaName(name:string){
    const sql = "select+*+from+[alle]+where+titel+=+'Nacht+der+Tiger'"
    const result = await sendRequestToDatabase(sql).then(res => res[0]);
    const hörspielIDInDatabase = result[2];
    const nummer = result[1];
    const titel = result[3];
    const beschreibung = result[5];
    const veröffentlichungsdatumV = result[7];
    const coverApple = result[10];
    const coverkosmos = result[11];
    const diedreifragezeichen = result[12];
    const idAppleMusic = result[13];
    const idSpotyfi = result[14];
    const idBookbeats = result[15];
    const idAmazonMusic = result[16];
    const idAmazon = result[18];
    const idYoutubeMusic = result[18];
    const idDeezer = result[19];

    const autor = await getAutorViaHörspielId(hörspielIDInDatabase);
    const hörspielScritAutor = await getHörspielScriptAutoViaHörspielId(hörspielIDInDatabase)
    console.log(hörspielScritAutor);
    //console.log(hörspielIDInDatabase);
    //console.log(beschreibung);
    return result;
    //Felt noch
    //gesamtdauer
    //kapitel
    //sprechrollen
    //medien
}

async function sendRequestToDatabase(request:string){
    const response = await fetch(`https://api.dreimetadaten.de/db.json?sql=${request}`,{
        method: 'GET'
    })
    const json = await response.json();
    const rows = json.rows;
    return rows;
}

async function getAutorViaHörspielId(hörspielID:number) {
   const autorID = await sendRequestToDatabase(`select+personID+from+[hörspielBuchautor]+where+hörspielID+=+${hörspielID}`)
   const autorName = await getNameFromPersonViaPersonID(autorID);
   return autorName[0][0];
}

async function getHörspielScriptAutoViaHörspielId(hörspielID:number) {
    const hörspielskriptautorID = await sendRequestToDatabase(`select+personID+from+hörspielSkriptautor+where+hörspielID+=+${hörspielID}`);
    const hörspielSkriptautorName = await getNameFromPersonViaPersonID(hörspielskriptautorID);
    return hörspielSkriptautorName[0][0];
}

async function getNameFromPersonViaPersonID(personID:number) {
    return await sendRequestToDatabase(`select+name+from+[person]+where+personID+=+${personID}`)
}

async function getTracksFromHörspielViaHörspielID(hörspielID:number) {
    let tracks:Array<Number|string> = [];
    const mediumIDs = await getMediumIdsFromHörspielViaHörspeilID(hörspielID);
    for(let x = 0;x<mediumIDs.length;x++){
        const track = await getTracksViaMediumId(mediumIDs[x]);
        tracks = tracks.concat(track)
    }
    return tracks;
}

async function getTracksViaMediumId(mediumID:number) {
    const sql = `select+titel+,+dauer+from+track+where+mediumID+=+${mediumID}`;
    const tracksOnMedium = await sendRequestToDatabase(sql);
    return tracksOnMedium;
}

async function getMediumIdsFromHörspielViaHörspeilID(hörspielID:number) {
    let mediums:Array<number> = [];
    const sql = `select+mediumID+from+medium+where+hörspielID+=+${hörspielID}`;
    const mediumIDs = (await sendRequestToDatabase(sql));
    mediumIDs.forEach((e: Array<number>) => {
        mediums.push(e[0])
    });
    return mediums;
}
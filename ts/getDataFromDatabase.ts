async function getDataViaName(name:string){
    const sql = "select+*+from+[alle]+where+titel+=+'Nacht+der+Tiger'"
    const result = await sendRequestToDatabase(sql).then(res => res[0]);
    const nummer = result[1];
    const titel = result[3];
    const beschreibung = result[2];
    const veröffentlichungsdatumV = result[7];
    const coverApple = result[10];
    const coverkosmos = result[11];
    const diedreifragezeichen = result[12];
    const idAppleMusic = result[13];
    const idSpotyfi = result[14];
    const idBookbeats = result[15];
    const idAmazonMusic = result[16];f
    const idAmazon = result[18];
    const idYoutubeMusic = result[18];
    const idDeezer = result[19];

    const autor = await getAutorViaHörspielId(nummer);
    console.log(autor);
    return result;
    //Felt noch
    //hörspielskriptautor
    //gesamtdauer
    //kapitel
    //sprechrollen
    //medien
}f

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
   const autorName = await getNameFromPersonViaPersonID(hörspielID);
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
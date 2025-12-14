function calculateGesamtDauerOfHörspiel(tracks:Array<string|number>){
    const tracksAsObjects = generateTrackObject(tracks);
    let gesamtDauer = 0;
    tracksAsObjects.forEach(e => {
        gesamtDauer += e.dauer;
    });
    return gesamtDauer;
}

function generateTrackObject(tracks:Array<string|number>){
    let trackObjects: { titel: string; dauer: number; }[] = [];
        tracks.forEach((e:any) => {
        trackObjects.push(
            {
                titel: e[0],
                dauer: e[1]
            }
        )
    });
    return trackObjects;
}

async function getGesamtDauerFromHörspielViaHörspielID(hörspielID:number){
    const tracks = await getTracksFromHörspielViaHörspielID(hörspielID);
    return calculateGesamtDauerOfHörspiel(tracks)
}
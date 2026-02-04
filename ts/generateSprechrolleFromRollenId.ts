async function generateSprechrolleFromRollenId(rollenId:number) {
    const sprecherData = (await getSprecherFromDatabaseViaSprechrollenId(rollenId))[0];

    const sprecherRolleId = sprecherData[0];
    const personId = sprecherData[1];
    const pseudonymId = sprecherData[2];

    const rollenName = await getRolleFromDatabaseViaRollenId(rollenId);
    const sprecherName = await getPersonFromDatabaseViaPersonId(personId);
    let pseudonym = null;
    if(pseudonymId != null){
        pseudonym = await getPseudonymFromDatabaseViaPseudonymId(pseudonymId);
    }

    return new sprechrolle(rollenName,sprecherName,pseudonym);
}
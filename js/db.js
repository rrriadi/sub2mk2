var dbPromise = idb.open("mydatabase", 5 , function(upgradeDb)
{
	if(!upgradeDb.objectStoreNames.contains("match"))
	{
		upgradeDb.createObjectStore("match", {keyPath: 'id'})
		console.log("Database Match Dibuat")
	}
	else if(!upgradeDb.objectStoreNames.contains("standing"))
	{
		upgradeDb.createObjectStore("standing", {keyPath: 'id'})
		console.log("Database Standing Dibuat")
	} 
});

function response(response)
{
	if(response.status !=200)
	{
		console.log ("Error " + response.status)
		return
	}
	response.json()
	.then(function(data)
	{
		const matchlist = data.matches
		const standlist = data.standings
		let matchHTML = ""
		let standHTML = ""
		console.log(data.standings)

		dbPromise.then(function(db)
		{
			var tx = db.transaction('match', 'readonly')
			var store = tx.objectStore('match')
			return store.getAll()
		})
	})
}

function saveTeam(team){
	const data = team.getAttribute('data-team');
	console.log(data);
	// Lakukan simpan ke DB
	store.add(team)

	M.toast({'html':'Data berhasil disimpan'})
}

function saveStanding(standing){
	const data = standing.getAttribute('data-standing')
	console.log(data);
	store.add(standing)
}

function getFavMatches(){
	// Kode ambil data
}
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
	var tx = db.transaction('match', 'readonly')
	var store = tx.objectStore('match')
	return store.add(team)

	M.toast({'html':'Data berhasil disimpan'})
}

function saveStanding(standing){
	const data = standing.getAttribute('data-standing')
	console.log(data);
	var tx = db.transaction('standings', 'readonly')
	var store = tx.objectStore('standing')
	store.add(standing)
}

function saveToFav(el)
{
	dbPromise.then(function(db){
		let match = JSON.parse(el.getAttribute('data-match'));
		let tx = db.transaction('match', 'readwrite');
		let store = tx.objectStore('match');
		M.toast({html: "Favorited"})
		return store.put(match);
	}).catch(function(err){
		console.log(err)
	})
}

function removeFav(el)
{
	dbPromise.then(function(db){
		let match = JSON.parse(el.getAttribute('data-match'));
		let tx = db.transaction('match', 'readwrite');
		let store = tx.objectStore('match');
		M.toast({html: "Removed from Favorites"})
		return store.delete(match);
	}).catch(function(err)
	{
		console.log(err)
	})
}

function getFav()
{
	dbPromise.then(function(db){
		let match = JSON.parse(el.getAttribute('data-match'));
		let tx = db.transaction('match', 'readwrite');
		let store = tx.objectStore('match');
		M.toast({html: "Favorited"})
		return store.get(match);
	}).catch(function(err){
		console.log(err)
	})
}
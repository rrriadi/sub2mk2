var dbPromise = idb.open("mydatabase", 5 , function(upgradeDb)
{
	if(!upgradeDb.objectStoreNames.contains("match"))
	{
		upgradeDb.createObjectStore("match", {keyPath: 'id'});
	}
	else if(!upgradeDb.objectStoreNames.contains("standing"))
	{
		upgradeDb.createObjectStore("standing", {keyPath: 'id'})
	} 
});

function(response)
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
		
	})
}
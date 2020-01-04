const base_url = "https://api.football-data.org/"
const token = "c9c3c5e000b64bcbb7515e47b74e48cf"
let saved = []

const match_url = (base_url + "v2/matches?dateFrom=2019-12-24&dateTo=2019-12-31")
const stand_url = (base_url + "v2/competitions/BL1/standings")

// Bikin FetchApi dulu untuk semua requeat ke API
function fetchApi(url)
{
    return fetch(url, 
    {
        headers: 
        {
            'X-Auth-Token': token
        }
    })
    .then(status)
    .then(json)
}

// Bikin juga untuk cek status response
function status(response){
	 if (response.status !== 200) {
    console.log("Error : " + response.status);
    // Method reject() akan membuat blok catch terpanggil
    return Promise.reject(new Error(response.statusText));
  } else {
    // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
    return Promise.resolve(response);
  }
}

function json(response){
	return response.json()
}


function error(error) {
  console.log("Error : " + error);
}


function getMatches(){
	return fetchApi(match_url)
	.then(function(data){
		return data;
	});
}


function getStandings()
{
	return fetchApi(stand_url)
	.then(function(data){
		return data;
	});

}


const base_url = "https://api.football-data.org/"
let saved = []

const match_url = (base_url + "v2/matches")
const stand_url = (base_url + "v2/standings")

function fetchMatch(match_url)
{
    return fetch(match_url, 
    {
        headers: 
        {
            'X-Auth-Token': 'c9c3c5e000b64bcbb7515e47b74e48cf'
        },
        method: 'GET'
    })
    .then(response)
}

function fetchStand(stand_url)
{
	return fetch(stand_url, 
    {
        headers: 
        {
            'X-Auth-Token': 'c9c3c5e000b64bcbb7515e47b74e48cf'
        },
        method: 'GET'
    })
    .then(response)

}

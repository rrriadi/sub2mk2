function loadMatches(){   
        getMatches()
        .then(function(data){
        matchHTML = '';
        data.matches.forEach(function(match){
        let matchdate = new Date(match.utcDate);
         matchHTML += `
            <tr>
            <td>${matchdate.getFullYear()}-${matchdate.getMonth() +1}-${matchdate.getDate()}</td>
            <td>${matchdate.getUTCHours()}:${matchdate.getUTCMinutes()}</td>
            <td>${match.status}</td>
            <td>${match.season.startDate}&nbsp;s/d&nbsp;${match.season.endDate}</td>
            <td>${match.homeTeam.name}</td>
            <td>${match.awayTeam.name}</td>
            <td><a class="waves-effect waves-light btn red" id="fav" onclick= "saveToFav(this)" data-match='${JSON.stringify(match)}' >Favorite</a></td>
            </tr>

          `
          })
        document.getElementById("matchtab").innerHTML = matchHTML;
        console.log(data);
    })
	}

function loadStandings(){
	getStandings()
	.then(function(data)
	{
		console.log(data);
		standHTML = '';
        header = `Season: ${data.season.startDate} - ${data.season.endDate}`


        data.standings.forEach(function(standing){
            // Main Seasons
            standHTML += standing.type + '<br/>';
            console.log(standing.table)

            // Awal tabel <table> header dst, <row><th> dst`
            `<table>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Team Name</th>
                    </tr>
                </thead>`
            standing.table.forEach(function(data){
                // Disini <row><td> dst atau bisa tambahin tbody
                standHTML += `<tbody>
                                    <row>
                                        <td>${data.position} - ${data.team.name}</td>
                                    </row>
                            </tbody>
                            <br/>`;
            })
            // Akhir table </table>
            `</table>`

        });

		/*data.standings.forEach(function(standings)
		{
			standHTML+=`
			<tr>
			<td>${standings.season.startDate}&nbsp;s/d&nbsp;${standings.season.endDate}</td>
			<td>${standings.stage}</td>
			<td>${standings.table.position}</td>
			<td>${standings.table.team.name}</td>
			<td>${standings.table.won}/${standings.table.draw}/${standings.table.lost}</td>
			</tr>`

		})
        */
		document.getElementById("headerStandings").innerHTML = header;
        document.getElementById("mainStandings").innerHTML = standHTML;
	})
}

function loadFav()
{   
        getFav()
        .then(function(data){
        matchHTML = '';
        data.matches.forEach(function(match){
        let matchdate = new Date(match.utcDate);
         matchHTML += `
            <tr>
            <td>${matchdate.getFullYear()}-${matchdate.getMonth() +1}-${matchdate.getDate()}</td>
            <td>${matchdate.getUTCHours()}:${matchdate.getUTCMinutes()}</td>
            <td>${match.status}</td>
            <td>${match.season.startDate}&nbsp;s/d&nbsp;${match.season.endDate}</td>
            <td>${match.homeTeam.name}</td>
            <td>${match.awayTeam.name}</td>
            <td><a class="waves-effect waves-light btn red" id="fav" onclick= "removeFavFav(this)" data-match='${JSON.stringify(match)}' >Remove</a></td>
            </tr>

          `
          })
        document.getElementById("matchtab").innerHTML = matchHTML;
        console.log(data);
    })
    }


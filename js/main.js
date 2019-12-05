// function display(items)
// {
	/*
	console.log('All data', items)
	for(const item of items)
	{
		saved.push(item.id)
	}
	console.log("Saved Items: ", saved)

	for(const match of matchlist)  //MATCH
        {
          const matchdate = new Date(match.utcDate);

          let exist = false;
          let exstatus = "";
          for(let savedid of saved)
          {

            if (savedid === match.id)
            {
            console.log(`match! ${savedid} equals ${match.id}`)
              exstatus = "checked"

            }
          }


          matchHTML += `
            <tr>
            <td>${matchdate.getFullYear()}-${matchdate.getMonth() +1}-${matchdate.getDate()}</td>
            <td>${matchdate.getUTCHours()}:${matchdate.getUTCMinutes()}</td>
            <td>${match.status}</td>
            <td>${match.season.startDate}&nbsp;s/d&nbsp;${match.season.endDate}</td>
            <td>${match.homeTeam.name}</td>
            <td>${match.awayTeam.name}</td>
            <td><div class="switch">
                <label>
                  <input type="checkbox" onClick="sendToDb('${encodeURI(JSON.stringify(match))}', this)" ${exstatus}>
                  <span class="lever"></span>
                </label>
              </div>
            </td>


            </tr>

          `

        }
        */
function loadMatches(){   
	// Karena getFavMatches nya blm retrun promise. kita matiin dulu
	// getFavMatches().then(function(favMatch){
        getMatches()
        .then(function(data){
        matchHTML = '';
        data.matches.forEach(function(match){
        	btnState = true//(favMatch.id  == match.id) ? 'checked' : ''; // nanti gitu//(favMatch.id == match.id)  //jika favMatch.id == match.id, state nya true  
        let matchdate = new Date(match.utcDate);
         matchHTML += `
            <tr>
            <td>${matchdate.getFullYear()}-${matchdate.getMonth() +1}-${matchdate.getDate()}</td>
            <td>${matchdate.getUTCHours()}:${matchdate.getUTCMinutes()}</td>
            <td>${match.status}</td>
            <td>${match.season.startDate}&nbsp;s/d&nbsp;${match.season.endDate}</td>
            <td>${match.homeTeam.name}</td>
            <td>${match.awayTeam.name}</td>
            <td><div class="switch">
                <label>
                  <input type="checkbox" onClick="saveTeam(this);" data-team='${JSON.stringify(match)}' ${btnState}>
                  <span class="lever"></span>
                </label>
              </div>
            </td>
            </tr>

          `
          })
        document.getElementById("matchtab").innerHTML = matchHTML;
        console.log(data);
    })
    // })
    }
// }

function loadStandings(){
	// Kodenya hampir sama
	getStandings()
	.then(function(data)
	{
		standHTML = '';
		data.standings.forEach(function(standings)
		{
			standHTML+=`
			<tr>
			<td>${standings.id}</td?>
			</tr>`

		})
		document.getElementById("standtab").innerHTML = standHTML;
        console.log(data);
	})
}
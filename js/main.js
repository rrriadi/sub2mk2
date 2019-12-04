function display(items)
{
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
        document.getElementById("matchtab").innerHTML = matchHTML;
        console.log(data);
}
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementsByTagName('button')
    console.log(btn)
    console.log('button:')
    for (let i of btn) {
        console.log('Klick')
        i.addEventListener('click', async (event) => {
            const target = event.target
            const name = target.closest("tr").getAttribute("data-name")
            console.log('click///////////', name)
            const response = await fetch('crm/' + name);

            const respBody = await response.json();

            //          console.log('respons', respBody);
            const statRow = document.getElementById('tabTest')
            const statTr = statRow.getElementsByTagName('tr')


            if (statTr.length > 0) {
                const td = statTr.getElementsByTagName('td')
                    (async function () {


                        await statTr.removeChild(td)
                    })
            }






            //  const statTd = statTr.getElementsByTagName('td')
            // for(let i of statRow){
            // }

            for (let i of respBody) {
                const newRow = document.createElement('tr');
                newRow.id = i._id
                tabTest.appendChild(newRow)

                const idRow = i._id
                //     console.log('didididididididididiid', idRow)

                for (let j = 0; j < 1; j++) {
                    //        console.log(j)
                    const newCol = document.createElement('td')
                    const row = document.getElementById(idRow)

                    row.insertCell().innerHTML = i.userName
                    row.insertCell().innerHTML = i.date
                    row.insertCell().innerHTML = i.totalProtein
                    row.insertCell().innerHTML = i.totalBilirubin
                }
            }

        })
    }
})

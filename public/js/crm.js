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
            const response = await fetch('crm/' + name, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            });
            const respBody = await response.json({});


            const newRow = document.createElement('tr');
            newRow['data-name'] = respBody.userName;
            newRow.innerHTML = `
                <td> ${respBody.userName}</td>
                <td>r</td>
                <td>t</td>
            `
            document.getElementsByTagName('table')[1].appendChild(newRow);
            //console.log('RRRRRRRRRRRR',respBody)


        })
    }
})
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('subBut')
   
    btn.addEventListener('click', async () => {
        console.log('button:')

        const response = await fetch('/rolls', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'sides': sides.value })
        });
        console.log(response)
        const respBody = await response.json();
        console.log('||||||||===respose:', respBody)
        // for(let i of respBody){
        //     console.log(i)
        // }
        die.innerText = respBody
    })

})

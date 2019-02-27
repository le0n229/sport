document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('subBut')

    console.log('button:')
    for (let i of btn) {
        btn.addEventListener('click', async (event) => {
            const target = event.target
       //     const id = target.closest("tr").getAttribute("data-id")
            const response = await fetch('/crm', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'sides': sides.value })
            });
            const respBody = await response.json();


        })
    }
})
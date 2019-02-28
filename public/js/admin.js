document.addEventListener('DOMContentLoaded', () => {
    const devileryDate = document.querySelector('.devileryDate');

    devileryDate.addEventListener('change', async (e) => {
        console.log(e);

        const response = await fetch('/admins', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'devileryDate': devileryDate.value })
        });

        console.log(response);
    })
})
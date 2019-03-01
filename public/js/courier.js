document.addEventListener('DOMContentLoaded', () => {
    console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    const articles = document.querySelectorAll('.orderRow');
    articles.forEach((item) => {
        const btn = item.querySelector('.fa');
        const point = item.querySelector('.point');
        const btnDel = item.querySelector('.delete');

        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            const response = await fetch(`/courier/${item._id}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },body
            });
            const text = await response.text();
            point.innerText = text;    
        });

        btnDel.addEventListener('click', async (e) => {
            e.preventDefault();

            await fetch(`/courier/${item.id}`, {
                method: 'POST'
            });

            if (btnDel.dataset.id === item.id) {
                item.remove();
            }
        })
    })
})
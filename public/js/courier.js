document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('article');

    articles.forEach((item) => {
        const btn = item.querySelector('.fa');
        const point = item.querySelector('.point');
        const btnDel = item.querySelector('.delete');

        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            const response = await fetch(`/posts/${item.id}/vote`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const text = await response.text();
            point.innerText = text;
            btn.style.color = 'red';
        });

        btnDel.addEventListener('click', async (e) => {
            e.preventDefault();

            await fetch(`/${item.id}`, {
                method: 'delete'
            });

            if (btnDel.dataset.id === item.id) {
                item.remove();
            }
        })
    })
})
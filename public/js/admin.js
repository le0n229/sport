document.addEventListener('DOMContentLoaded', () => {
    const orders = document.querySelectorAll('.order');

    orders.forEach((order) => {
        const orderNumber = order.querySelector('.orderNumber');
        const deliveryDate = order.querySelector('.deliveryDate');
        const deliveryTime = order.querySelector('.deliveryTime');
        const status = order.querySelector('.status');

        deliveryDate.addEventListener('change', async (e) => {
            await fetch('/admins', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'deliveryDate': deliveryDate.value, 'orderNumber': orderNumber.innerText,
                    'deliveryTime': deliveryTime.value,
                    'status': status.value
                })
            });
        })

        deliveryTime.addEventListener('change', async () => {
            await fetch('/admins', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'deliveryDate': deliveryDate.value, 'orderNumber': orderNumber.innerText,
                    'deliveryTime': deliveryTime.value,
                    'status': status.value
                })
            });
        })

        status.addEventListener('change', async (e) => {
            await fetch('/admins', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'deliveryDate': deliveryDate.value, 'orderNumber': orderNumber.innerText,
                    'deliveryTime': deliveryTime.value,
                    'status': status.value
                })
            });
        })
    });
})
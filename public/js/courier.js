document.addEventListener('DOMContentLoaded', () => {
    const orders = document.querySelectorAll('.order');
    orders.forEach((item) => {
        const orderNumber = item.querySelector('.orderNumber');
        const deliveryButton = item.querySelector('.delivery');
        const deleteButton = item.querySelector('.deleteButton');
        const status = item.querySelector('.status');
        deliveryButton.addEventListener('click', async (e) => {
            console.log(orderNumber.innerText)
            await fetch('/courier', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    deliveryStatus: deliveryButton.value,
                    orderNumber: orderNumber.innerText
                })
            });
            status.innerText = deliveryButton.value
        })

        deleteButton.addEventListener('click', async (e) => {
            console.log(orderNumber.innerText)
            await fetch('/courier', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    deliveryStatus: deleteButton.value,
                    orderNumber: orderNumber.innerText
                })
            });
            status.innerText = deleteButton.value
        })
    });
})
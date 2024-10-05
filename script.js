document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productName = productElement.querySelector('h2').innerText;
        const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('R$ ', '').replace('/kg', ''));
        const quantity = parseFloat(productElement.querySelector('.quantity').value);
        
        if (quantity > 0) {
            const total = productPrice * quantity;
            addToCart(productName, quantity, total);
            updateTotalPrice();
        } else {
            alert('Por favor, insira uma quantidade válida.');
        }
    });
});

const cartItems = [];
const totalPriceElement = document.getElementById('total-price');

function addToCart(name, quantity, total) {
    cartItems.push({ name, quantity, total });
    renderCart();
}

function renderCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = ''; // Limpa o carrinho
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.quantity} kg de ${item.name} - R$ ${item.total.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });
}

function updateTotalPrice() {
    const total = cartItems.reduce((sum, item) => sum + item.total, 0);
    totalPriceElement.innerText = total.toFixed(2);
}

// Lógica del Modo Oscuro
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Cambiar ícono luna/sol
    if(body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Lógica del Carrito de Compras
let totalCookies = 0;
const cartCountElement = document.getElementById('cart-count');

function addToCart(qty) {
    let finalQty = qty;
    
    // Lógica de la promoción: pagas 12, llevas 14
    if (qty === 12) {
        finalQty = 14;
        alert("¡Felicidades! Se ha aplicado la oferta: Agregaste 12 y te regalamos 2 más. (Total: 14)");
    } else {
        alert(`Has agregado un lote de ${qty} galletas al carrito.`);
    }

    totalCookies += finalQty;
    updateCartUI();
}

function updateCartUI() {
    cartCountElement.innerText = totalCookies;
}

// Simulación de Pasarela de Pago
function iniciarPago() {
    if (totalCookies === 0) {
        alert("Tu carrito está vacío. ¡Agrega unas deliciosas galletas primero!");
        return;
    }
    
    // Aquí es donde en el futuro conectaremos la API REST del backend
    alert(`Redirigiendo a pasarela de pago segura (Transbank / MercadoPago) para pagar por ${totalCookies} galletas... \n\n(Nota del Dev: Aquí conectaremos el endpoint del servidor).`);
}
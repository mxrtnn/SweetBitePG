document.addEventListener("DOMContentLoaded", () => {
    
    // ================= MODO OSCURO CON LOCALSTORAGE =================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggleBtn.querySelector('i');

    // Revisar si el usuario ya tenía el modo oscuro activado antes
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    // Evento del botón de cambio de tema
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if(body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark'); // Guardar preferencia
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light'); // Guardar preferencia
        }
    });

    // ================= LÓGICA SELECTOR DE CANTIDAD (Página Tienda) =================
    const btnMinus = document.getElementById('btn-minus');
    const btnPlus = document.getElementById('btn-plus');
    const qtyInput = document.getElementById('qty-input');

    // Solo ejecutar esto si estamos en la página que tiene el input de cantidad
    if (btnMinus && btnPlus && qtyInput) {
        let qty = parseInt(qtyInput.value);

        btnPlus.addEventListener('click', () => {
            if (qty < 12) { // Límite de 12 por orden según tu diseño
                qty++;
                qtyInput.value = qty;
            }
        });

        btnMinus.addEventListener('click', () => {
            if (qty > 1) { // No puede pedir menos de 1
                qty--;
                qtyInput.value = qty;
            }
        });
    }
});

// ================= LÓGICA DEL CARRUSEL (Página Inicio) =================
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    if (slides.length > 0) {
        setInterval(() => {
            // Quitar clase active a la actual
            slides[currentSlide].classList.remove('active');
            
            // Pasar a la siguiente (y volver a 0 si llega al final)
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Agregar clase active a la nueva
            slides[currentSlide].classList.add('active');
        }, 5000); // 5000 milisegundos = 5 segundos
    }
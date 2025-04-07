// Esperar a que todo el contenido se cargue
document.addEventListener('DOMContentLoaded', function() {
    // Ocultar el loader cuando la página termine de cargar
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(function() {
            loader.style.display = 'none';
        }, 1000);
    }

    // Variables para los modales
    const modalDetalles = document.getElementById('modal-detalles');
    const modalCompra = document.getElementById('modal-compra');
    const cerrarModales = document.querySelectorAll('.cerrar-modal');
    
    // Producto actual seleccionado
    let productoActual = {
        nombre: 'Smart TV 4K UHD Premium 55"',
        precio: 'S/2,999.00'
    };

    // Mostrar modal de detalles de producto
    const botonesVerDetalles = document.querySelectorAll('.ver-detalles');
    botonesVerDetalles.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault();
            // Aquí se podría cargar información específica basada en data-producto
            // const productoId = this.getAttribute('data-producto');
            
            // Por ahora, simplemente mostrar el modal
            modalDetalles.style.display = 'block';
        });
    });

    // Mostrar modal de compra
    const botonesComprar = document.querySelectorAll('.comprar');
    botonesComprar.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault();
            // const productoId = this.getAttribute('data-producto');
            
            // Actualizar información del producto en el modal
            document.getElementById('producto-titulo').textContent = productoActual.nombre;
            document.getElementById('producto-precio').textContent = productoActual.precio;
            
            // Mostrar modal de compra
            modalCompra.style.display = 'block';
        });
    });

    // Cerrar modales
    cerrarModales.forEach(boton => {
        boton.addEventListener('click', function() {
            modalDetalles.style.display = 'none';
            modalCompra.style.display = 'none';
        });
    });

    // Cerrar modales al hacer clic fuera de ellos
    window.addEventListener('click', function(e) {
        if (e.target === modalDetalles) {
            modalDetalles.style.display = 'none';
        }
        if (e.target === modalCompra) {
            modalCompra.style.display = 'none';
        }
    });

    // Cambiar entre formularios de pago
    const radioWhatsapp = document.getElementById('whatsapp');
    const radioTarjeta = document.getElementById('tarjeta');
    const formWhatsapp = document.getElementById('form-whatsapp');
    const formTarjeta = document.getElementById('form-tarjeta');

    radioWhatsapp.addEventListener('change', function() {
        if (this.checked) {
            formWhatsapp.classList.add('active');
            formTarjeta.classList.remove('active');
        }
    });

    radioTarjeta.addEventListener('change', function() {
        if (this.checked) {
            formTarjeta.classList.add('active');
            formWhatsapp.classList.remove('active');
        }
    });

    // Procesar formulario de WhatsApp
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    btnWhatsapp.addEventListener('click', function() {
        const nombre = document.getElementById('nombre-whatsapp').value;
        const telefono = document.getElementById('telefono-whatsapp').value;
        
        if (!nombre || !telefono) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        // Formatear mensaje para WhatsApp
        const mensaje = `Hola, soy ${nombre}. Estoy interesado en comprar el ${productoActual.nombre} por ${productoActual.precio}. Por favor contáctenme para coordinar el pago.`;
        const mensajeEncoded = encodeURIComponent(mensaje);
        
        // Abrir WhatsApp Web con mensaje predefinido
        window.open(`https://wa.me/+51907023588?text=${mensajeEncoded}`, '_blank');
        
        // Cerrar modal después de procesar
        modalCompra.style.display = 'none';
    });

    // Procesar formulario de tarjeta
    const btnTarjeta = document.getElementById('btn-tarjeta');
    btnTarjeta.addEventListener('click', function() {
        const numeroTarjeta = document.getElementById('numero-tarjeta').value;
        const fechaVencimiento = document.getElementById('fecha-vencimiento').value;
        const cvv = document.getElementById('cvv').value;
        const nombreTarjeta = document.getElementById('nombre-tarjeta').value;
        
        if (!numeroTarjeta || !fechaVencimiento || !cvv || !nombreTarjeta) {
            alert('Por favor, completa todos los campos de la tarjeta.');
            return;
        }
        
        // Aquí se podría implementar la integración con una pasarela de pagos
        // Por ahora, solo mostraremos un mensaje de éxito
        alert('¡Pago procesado con éxito! Recibirás un correo con los detalles de tu compra.');
        
        // Cerrar modal después de procesar
        modalCompra.style.display = 'none';
    });

    // Navegación suave al hacer clic en los enlaces del menú
    const menuLinks = document.querySelectorAll('nav a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación para mostrar elementos cuando son visibles
    const observarElementos = function() {
        const elementos = document.querySelectorAll('.beneficio-card, .categoria-card, .testimonio-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Dejar de observar una vez que aparece
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        
        elementos.forEach(elemento => {
            observer.observe(elemento);
        });
    };
    
    // Iniciar observación de elementos para animaciones
    observarElementos();

    // Validación simple para el formulario de contacto
    const formularioContacto = document.querySelector('.contacto-form');
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function(e) {
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            if (!nombre || !email || !mensaje) {
                e.preventDefault();
                alert('Por favor, completa todos los campos del formulario.');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Animación del loader
    setTimeout(function() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(function() {
                loader.style.display = "none";
            }, 500);
        }
    }, 1500); // El loader desaparece después de 1.5 segundos

    // Animación del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animación para elementos cuando entran en viewport
    const animateElements = document.querySelectorAll('.fade-in');
    const sectionTitles = document.querySelectorAll('.section-title');
    
    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;

        // Animación para .fade-in elements
        animateElements.forEach(function(element) {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;

            if (
                (elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)
            ) {
                element.classList.add('visible');
            }
        });

        // Animación para los títulos de secciones
        sectionTitles.forEach(function(title) {
            const titleTopPosition = title.offsetTop;

            if (titleTopPosition <= windowBottomPosition - 100) {
                title.classList.add('visible');
            }
        });
    }

    // Verificar posición inicial de los elementos
    window.addEventListener('load', checkIfInView);
    
    // Verificar al hacer scroll
    window.addEventListener('scroll', checkIfInView);
    
    // Añadir clase fade-in a elementos que queremos animar
    document.querySelectorAll('.beneficio-card, .categoria-card, .testimonio-card, .contacto-info').forEach(function(el) {
        el.classList.add('fade-in');
    });
    
    // Animaciones para modal
    const modales = document.querySelectorAll('.modal');
    const cerrarModales = document.querySelectorAll('.cerrar-modal');
    
    cerrarModales.forEach(function(cerrar) {
        cerrar.addEventListener('click', function() {
            modales.forEach(function(modal) {
                modal.style.display = 'none';
            });
        });
    });
});
// Función para manejar la interacción con las preguntas frecuentes
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todas las preguntas
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Añade event listener a cada pregunta
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Selecciona el elemento padre (faq-item)
            const parentItem = this.parentElement;
            
            // Verifica si el elemento está activo
            const isActive = parentItem.classList.contains('active');
            
            // Cierra todas las respuestas abiertas
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Si el elemento no estaba activo, lo activa
            if (!isActive) {
                parentItem.classList.add('active');
            }
        });
    });
});


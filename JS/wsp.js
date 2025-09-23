// JavaScript para funcionalidades adicionales
        document.addEventListener('DOMContentLoaded', function() {
            const whatsappBtn = document.querySelector('.whatsapp-float');
            
            // Mensaje personalizado según la página
            const currentPage = window.location.pathname;
            let message = "Hola, me interesan sus servicios";
            
            if (currentPage.includes('reparacion')) {
                message = "Hola, necesito información sobre reparaciones";
            } else if (currentPage.includes('tienda')) {
                message = "Hola, me interesa un producto de su tienda";
            } else if (currentPage.includes('software')) {
                message = "Hola, necesito información sobre desarrollo de software";
            }
            
            // Actualizar el enlace con el mensaje personalizado
            whatsappBtn.href = `https://wa.me/5353599142?text=${encodeURIComponent(message)}`;
            
            // Efecto de click
            whatsappBtn.addEventListener('click', function(e) {
                // Opcional: agregar tracking aquí
                console.log('Clic en WhatsApp button');
            });
            
            // Ocultar/mostrar botón al hacer scroll (opcional)
            let lastScrollTop = 0;
            window.addEventListener('scroll', function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > lastScrollTop) {
                    // Scrolling down - ocultar ligeramente
                    whatsappBtn.style.transform = 'translateY(70px)';
                } else {
                    // Scrolling up - mostrar
                    whatsappBtn.style.transform = 'translateY(0)';
                }
                lastScrollTop = scrollTop;
            });
        });
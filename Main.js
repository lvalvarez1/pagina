
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // WhatsApp Phone Number (replace with your actual number)
        const WHATSAPP_PHONE_NUMBER = '5491112345678';

        // Product Data (simulated database) - All products now in this single object
        const productsData = {
            "sabanas": {
                name: "Juego de Sábanas Premium",
                price: "$45.000",
                description: "Nuestro juego de sábanas premium ofrece una suavidad inigualable y una durabilidad excepcional. Perfecto para transformar tu cama en un oasis de confort. Disponible en varios colores y tamaños para adaptarse a cualquier estilo de dormitorio.",
                images: [
                    "img/sabana.jpg",
                    "https://placehold.co/800x600/D1D5DB/1F2937?text=Sabana+Detalle+2",
                    "https://placehold.co/800x600/B8B8B8/333333?text=Sabana+Ambiente+3"
                ]
            },
            "toallas": {
                name: "Set de Toallas",
                price: "$18.000",
                description: "Experimenta la máxima absorción y suavidad con nuestro set de toallas de algodón egipcio. Ideales para el uso diario, estas toallas conservan su esponjosidad lavado tras lavado, garantizando una experiencia de lujo en cada uso. Incluye toalla de mano, de cara y de baño.",
                images: [
                    "img/toallas.jpg",
                    "https://placehold.co/800x600/C8F8F0/1ABC9C?text=Toalla+Plegada+2",
                    "https://placehold.co/800x600/B3E0DD/008080?text=Toalla+Textura+3"
                ]
            },
            "edredon": {
                name: "Edredon de 2 1/2 - Premium",
                price: "$75.000",
                description: "Este edredon Queen size te ofrece calidez y versatilidad con su diseño reversible, permitiéndote cambiar el estilo de tu habitación al instante. Perfecto para darle un nuevo aire a tu espacio, combinando confort y un estilo moderno y práctico. Relleno hipoalergénico y fácil de cuidar.",
                images: [
                    "img/edredon.jpg",
                    "https://placehold.co/800x600/B0C4DE/4682B4?text=Acolchado+Reverso+2",
                    "https://placehold.co/800x600/87CEEB/6A5ACD?text=Acolchado+Cama+3"
                ]
            },
            "blackout": {
                name: "Cortina Blackout",
                price: "$28.000",
                description: "Envuelve tu hogar en calidez y estilo con nuestra manta de lana tejida artesanalmente. Su textura suave y diseño acogedor la hacen ideal para el sofá o como complemento decorativo en tu cama. Confeccionada con materiales de alta calidad, garantizando colores naturales y duraderos.",
                images: [
                    "https://placehold.co/800x600/FFECB3/FFA000?text=Manta+de+lana+1",
                    "https://placehold.co/800x600/FFD54F/FF8F00?text=Manta+Textura+2",
                    "https://placehold.co/800x600/FFE082/FFC107?text=Manta+en+Sillon+3"
                ]
            },
            "cortina-baño": {
                name: "Cortina de baño - Razo",
                price: "$8.000",
                description: "Añade un toque de color y sofisticación a tu dormitorio con nuestras fundas de almohada decorativas. Confeccionadas con tejidos suaves y duraderos, son el complemento perfecto para cualquier estilo de decoración, brindando confort y elegancia a tu espacio.",
                images: [
                    "https://placehold.co/800x600/C8E6C9/4CAF50?text=Funda+almohada+1",
                    "https://placehold.co/800x600/A5D6A7/388E3C?text=Funda+Detalle+2",
                    "https://placehold.co/800x600/81C784/2E7D32?text=Funda+Combinada+3"
                ]
            },
            "set-repasadores": {
                name: "Set de Repasadores de Algodón (3 unidades)",
                price: "$12.000",
                description: "Nuestro set de repasadores de algodón es ideal para mantener tu cocina impecable. Con alta capacidad de absorción y resistencia, vienen en diseños variados que añaden alegría a tus tareas diarias. Son lavables a máquina y conservan su color y forma.",
                images: [
                    "https://placehold.co/800x600/FFCDD2/EF5350?text=Set+de+cocina+1",
                    "https://placehold.co/800x600/EF9A9A/D32F2F?text=Repasador+Individual+2",
                    "https://placehold.co/800x600/FFEBEE/C62828?text=Repasadores+Colores+3"
                ]
            },
            "sabanas-infantiles": {
                name: "Juego de Sabanas Infantiles",
                price: "$35.000",
                description: "Nuestras cortinas opacas ofrecen privacidad total y un control excepcional de la luz. Ideales para dormitorios o salas de estar, ayudan a mantener la temperatura ambiente y a reducir el ruido exterior. Su instalación es sencilla y su caída elegante complementa cualquier espacio.",
                images: [
                    "https://placehold.co/800x600/FFF8E1/FFB300?text=Cortina+dormitorio+1",
                    "https://placehold.co/800x600/FFD180/FF6F00?text=Cortina+Cerrada+2",
                    "https://placehold.co/800x600/FFECB3/FF8F00?text=Cortina+Abierta+3"
                ]
            },
            "Mantas": {
                name: "Mantas Plush / corderito",
                price: "$55.000",
                description: "Renueva tu habitación con nuestro cubrecama estampado, disponible en una variedad de diseños modernos y vibrantes. Ligero y fácil de mantener, es perfecto para añadir un toque de personalidad a tu cama sin sacrificar la comodidad ni la calidad del descanso.",
                images: [
                    "https://placehold.co/800x600/CFD8DC/607D8B?text=Cubrecama+estampado+1",
                    "https://placehold.co/800x600/B0BEC5/455A64?text=Cubrecama+Vista+2",
                    "https://placehold.co/800x600/90A4AE/263238?text=Cubrecama+Textura+3"
                ]
            }
        };

        // Get the modal element
        const productDetailModal = document.getElementById('productDetailModal');

        // Listen for when the modal is about to be shown
        productDetailModal.addEventListener('show.bs.modal', (event) => {
            // Button that triggered the modal
            const button = event.relatedTarget; 
            // Extract info from data-product-id attributes
            const productId = button.getAttribute('data-product-id');
            const product = productsData[productId];

            if (product) {
                // Update modal content
                document.getElementById('productDetailModalLabel').textContent = product.name;
                document.getElementById('modalMainProductImage').src = product.images[0];
                document.getElementById('modalProductPrice').textContent = product.price;
                document.getElementById('modalProductDescription').textContent = product.description;

                // Update WhatsApp button link
                const whatsappConsultButton = document.getElementById('modalWhatsappConsultButton');
                whatsappConsultButton.href = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=Hola!%20Quiero%20consultar%20sobre%20el%20producto:%20${encodeURIComponent(product.name)}`;

                // Update thumbnails
                const thumbnailsContainer = document.getElementById('modalThumbnailsContainer');
                thumbnailsContainer.innerHTML = ''; // Clear previous thumbnails

                product.images.forEach((imgSrc, index) => {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.alt = `Vista ${index + 1} del producto`;
                    img.classList.add('img-fluid', 'rounded-custom', 'modal-thumbnail-image');
                    if (index === 0) {
                        img.classList.add('active'); // Set first thumbnail as active
                    }
                    img.addEventListener('click', () => {
                        document.getElementById('modalMainProductImage').src = imgSrc;
                        // Remove active class from all, add to clicked
                        thumbnailsContainer.querySelectorAll('.modal-thumbnail-image').forEach(thumb => {
                            thumb.classList.remove('active');
                        });
                        img.classList.add('active');
                    });
                    thumbnailsContainer.appendChild(img);
                });
            } else {
                // Handle case where product data is not found (e.g., show an error or default message)
                document.getElementById('productDetailModalLabel').textContent = 'Producto No Encontrado';
                document.getElementById('modalMainProductImage').src = 'https://placehold.co/800x600/FF0000/FFFFFF?text=Producto+No+Encontrado';
                document.getElementById('modalProductPrice').textContent = '';
                document.getElementById('modalProductDescription').textContent = 'Lo sentimos, la información de este producto no está disponible.';
                document.getElementById('modalWhatsappConsultButton').style.display = 'none'; // Hide button
                document.getElementById('modalThumbnailsContainer').innerHTML = ''; // Clear thumbnails
            }
        });

        // WhatsApp Floating Button Toggle Logic (for the persistent button at the bottom right)
        const whatsappMainButton = document.getElementById('whatsappMainButton');
        const whatsappDropdown = document.getElementById('whatsappDropdown');

        if (whatsappMainButton && whatsappDropdown) { // Check if elements exist
            whatsappMainButton.addEventListener('click', () => {
                whatsappDropdown.classList.toggle('show');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (event) => {
                if (!whatsappMainButton.contains(event.target) && !whatsappDropdown.contains(event.target)) {
                    whatsappDropdown.classList.remove('show');
                }
            });

            // Close dropdown when an item is clicked
            whatsappDropdown.querySelectorAll('.whatsapp-dropdown-item').forEach(item => {
                item.addEventListener('click', () => {
                    whatsappDropdown.classList.remove('show');
                });
            });
        }
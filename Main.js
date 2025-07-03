
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
                price: "$50.000",
                description: "Nuestro juego de sábanas premium ofrece una suavidad inigualable y una durabilidad excepcional. Perfecto para transformar tu cama en un oasis de confort. Disponible en varios colores y tamaños para adaptarse a cualquier estilo de dormitorio.",
                images: [
                    "img/sabana.jpg",
                    "img/sabana-2.jpg",
                    "img/sabana-3.jpeg",
                ]
            },
            "toallas": {
                name: "Set de Toallas",
                price: "$18.000",
                description: "Experimenta la máxima absorción y suavidad con nuestro set de toallas de 420g. Ideales para el uso diario, estas toallas conservan su esponjosidad lavado tras lavado, garantizando una experiencia de lujo en cada uso. Incluye toalla de mano y de cara.",
                images: [
                    "img/toallas-2.jpg",
                    "img/toallas-3.jpg",
                    "img/toallas-4.jpg"
                ]
            },
            "edredon": {
                name: "Edredon de 2 1/2 - Premium",
                price: "$80.000",
                description: "Este edredon Queen size te ofrece calidez y versatilidad con su diseño reversible, permitiéndote cambiar el estilo de tu habitación al instante. Perfecto para darle un nuevo aire a tu espacio, combinando confort y un estilo moderno y práctico. Relleno hipoalergénico y fácil de cuidar.",
                images: [
                    "img/edredon.jpg",
                    "img/edredon-2.jpg",
                    "img/edredon-3.jpg"
                 ]
            },
            "blackout": {
                name: "Cortina Blackout",
                price: "$80.000",
                description: "Transformá tu hogar con nuestras cortinas blackout combinadas! Ofrecen doble funcionalidad: oscuridad total cuando la necesitás y luz filtrada para el día, protegiendo tu privacidad. Además de su estilo versátil, brindan aislamiento térmico y acústico, mejorando el confort de tus ambientes. Son de alta calidad y duraderas, perfectas para cualquier espacio.",
                images: [
                    "img/blackout.jpg",
                    "img/blackout-2.jpeg",
                    "img/blackout-3.jpeg"
                ]
            },
            "cortina-baño": {
                name: "Cortina de baño - Raso",
                price: "$15.000",
                description: "Descubrí la elegancia y funcionalidad para tu baño con nuestras cortinas de baño de raso. Fabricadas con un tejido suave y resistente, ofrecen un diseño variado que se adapta a tu estilo: desde motivos marinos y estrellas de mar en tonos vibrantes, hasta sutiles estampados de lunares. Son repelentes al agua, fáciles de limpiar y vienen listas para instalar con sus respectivos ganchos. Dale un toque de frescura y sofisticación a tu baño.",
                images: [
                    "img/cortina-1.jpeg",
                    "img/cortina-2.jpg",
                    "img/cortina-3.jpg"
                ]
            },
            "set-repasadores": {
                name: "Set de Repasadores de Algodón (2 unidades)",
                price: "$7.000",
                description: "Nuestro set de repasadores de algodón es ideal para mantener tu cocina impecable. Con alta capacidad de absorción y resistencia, vienen en diseños variados que añaden alegría a tus tareas diarias. Son lavables a máquina y conservan su color y forma.",
                images: [
                    "img/repasador.jpg",
                    "img/repasador-2.jpg",
                    "img/repasador-3.jpg"
                ]
            },
            "sabanas-infantiles": {
                name: "Juego de Sabanas Infantiles",
                price: "$40.000",
                description: "¡Alegrá el cuarto de los chicos con nuestras sábanas infantiles de personajes! Disponibles con Minnie, Mickey y Stitch y más. Estos sets de 3 piezas incluyen sábana superior, ajustable y funda de almohada. Fabricadas con materiales suaves para un descanso cómodo y placentero, transforman su cama en un espacio lleno de diversión. Son el regalo ideal para inspirar sueños mágicos cada noche. ¡Llevá la magia a su habitación!",
                images: [
                    "img/infantil-1.jpg",
                    "img/infantil-2.jpg",
                    "img/infantil-3.jpg"
                ]
            },
            "Mantas": {
                name: "Mantas Plush / corderito",
                price: "$55.000",
                description: "Renueva tu habitación con nuestro cubrecama estampado, disponible en una variedad de diseños modernos y vibrantes. Ligero y fácil de mantener, es perfecto para añadir un toque de personalidad a tu cama sin sacrificar la comodidad ni la calidad del descanso.",
                images: [
                    "img/manta-1.jpg",
                    "img/manta-2.jpg",
                    "img/manta-3.jpg"
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
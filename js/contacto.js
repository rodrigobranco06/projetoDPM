document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.querySelector('.menu-toggle');
            const navbar = document.querySelector('.navbar');

            // Toggle menu on button click
            menuToggle.addEventListener('click', () => {
                const isOpen = navbar.classList.toggle('open');
                menuToggle.classList.toggle('open', isOpen);
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                const isClickInsideNavbar = navbar.contains(e.target);
                const isClickOnToggle = menuToggle.contains(e.target);

                if (!isClickInsideNavbar && !isClickOnToggle && navbar.classList.contains('open')) {
                    navbar.classList.remove('open');
                    menuToggle.classList.remove('open');
                }
            });

            // Close menu when clicking a menu link
            navbar.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navbar.classList.remove('open');
                    menuToggle.classList.remove('open');
                });
            });
        });
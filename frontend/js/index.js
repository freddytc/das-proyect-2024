document.addEventListener('DOMContentLoaded', function () {
    const loadContent = (url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('main-content').innerHTML = data;

                // Check if it is the products.html page for loading events
                if (url.includes('products.html')) {
                    attachAddProductModalEvent();
                    attachEditProductModalEvent();
                } else if (url.includes('orders.html')) {
                    attachAddOrderModalEvent();
                    attachEditOrderModalEvent();
                } else if (url.includes('sales.html')) {
                    attachAddSaleModalEvent();
                    attachViewSaleDetailsModalEvent();
                }
            })
            .catch(error => {
                console.error('Error loading content:', error);
                document.getElementById('main-content').innerHTML = '<p>Error loading content. Please try again later.</p>';
            });
    };

    // Toggle the visibility of the drop-down menu when clicking on the user icon
    const userIcon = document.getElementById('user-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    userIcon.addEventListener('click', function () {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close the drop-down menu if clicked outside the menu
    document.addEventListener('click', function (event) {
        if (!userIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Function for opening the add product modal
    const attachAddProductModalEvent = () => {
        const addProductButton = document.getElementById('addProductButton');
        if (addProductButton) {
            addProductButton.addEventListener('click', function () {
                // Load the modal from an external file
                fetch('/addproduct.html')
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById('modalContainer').innerHTML = html;

                        // Show modal
                        var modal = new bootstrap.Modal(document.getElementById('addProductModal'));
                        modal.show();
                    });
            });
        }
    };

    // Function to open the product edit mode
    const attachEditProductModalEvent = () => {
        const addProductButton = document.getElementById('editProductButton');
        if (addProductButton) {
            addProductButton.addEventListener('click', function () {
                // Load modal from external file
                fetch('/editproduct.html')
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById('modalContainer').innerHTML = html;

                        // Show modal
                        var modal = new bootstrap.Modal(document.getElementById('editProductModal'));
                        modal.show();
                    });
            });
        }
    };

    // Function to open the add command modal
    const attachAddOrderModalEvent = () => {
        const addOrderButton = document.getElementById('addOrderButton');
        if (addOrderButton) {
            addOrderButton.addEventListener('click', function () {
                // Load the modal from an external file
                fetch('/addorder.html')
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById('modalContainer').innerHTML = html;

                        // Show modal
                        var modal = new bootstrap.Modal(document.getElementById('addOrderModal'));
                        modal.show();
                    });
            });
        }
    };

    // Function to open the edit order modal
    const attachEditOrderModalEvent = () => {
        const addOrderButton = document.getElementById('editOrderButton');
        if (addOrderButton) {
            addOrderButton.addEventListener('click', function () {
                // Load modal from external file
                fetch('/editorder.html')
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById('modalContainer').innerHTML = html;

                        // Show modal
                        var modal = new bootstrap.Modal(document.getElementById('editOrderModal'));
                        modal.show();
                    });
            });
        }
    };
    
    // Manage clicks on sidebar links
    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Update the active link
            document.querySelectorAll('.sidebar .nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');

            // Load the corresponding content
            const url = this.getAttribute('href');
            loadContent(url);
        });
    });
});

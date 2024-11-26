document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartItems = document.getElementById('cart-items');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');

    let cart = []; // Array สำหรับเก็บสินค้าในตะกร้า

    // ฟังก์ชันเปิด/ปิดแถบตะกร้า
    cartBtn.addEventListener('click', () => {
        cartDrawer.classList.toggle('visible');
    });

    // ฟังก์ชันเพิ่มสินค้าในตะกร้า
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.product');
            const productName = product.getAttribute('data-product');
            const productPrice = product.getAttribute('data-price');

            // เพิ่มสินค้าในตะกร้า
            cart.push({ name: productName, price: productPrice });

            // อัปเดตตะกร้า
            updateCart();
        });
    });

    // ฟังก์ชันอัปเดตตะกร้า
    function updateCart() {
        // ลบข้อความ "ไม่มีสินค้า" หากมีสินค้าในตะกร้า
        if (cart.length > 0) {
            cartItems.innerHTML = '';
        } else {
            cartItems.innerHTML = '<li class="empty-cart">ไม่มีสินค้า</li>';
        }

        // เพิ่มรายการสินค้าในตะกร้า
        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${item.name}</span>
                <span>${item.price} บาท</span>
                <button class="remove-item" data-index="${index}">ลบ</button>
            `;
            cartItems.appendChild(listItem);
        });

        // อัปเดตจำนวนสินค้าในปุ่มตะกร้า
        cartCount.textContent = cart.length;

        // เพิ่มฟังก์ชันลบสินค้า
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                cart.splice(index, 1); // ลบสินค้าจาก array
                updateCart(); // อัปเดตตะกร้าใหม่
            });
        });
    }
});

    // ฟังก์ชันคัดกรองสินค้า
    document.addEventListener('DOMContentLoaded', () => {
        const filterBtns = document.querySelectorAll('.filter-btn'); // ปุ่มกรองสินค้า
        const products = document.querySelectorAll('.product'); // รายการสินค้า
    
        filterBtns.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                
                products.forEach(product => {
                    if (category === 'all' || product.getAttribute('data-product') === category) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
            products.forEach(product => {
                product.addEventListener('mouseenter', () => {
                    // ขยายสินค้าและเลื่อนแถบสรรพคุณ
                    product.style.zIndex = 2;
                    product.style.transform = 'scale(1.1)';
                });
        
                product.addEventListener('mouseleave', () => {
                    // ยกเลิกการขยายสินค้า
                    product.style.zIndex = 1;
                    product.style.transform = 'scale(1)';
                });
            });
        });

    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const menuDrawer = document.getElementById('menu-drawer');

    if (menuBtn && closeMenuBtn && menuDrawer) {
        console.log('Menu elements found'); // ตรวจสอบว่าเจอเมนูและปุ่ม

        // เปิดเมนู
        menuBtn.addEventListener('click', () => {
            console.log('Menu button clicked'); // ตรวจสอบการคลิกปุ่ม
            menuDrawer.classList.add('open');
        });

        // ปิดเมนู
        closeMenuBtn.addEventListener('click', () => {
            console.log('Close button clicked'); // ตรวจสอบการคลิกปุ่มปิด
            menuDrawer.classList.remove('open');
        });
    } else {
        console.error('Menu elements not found');
    }
});
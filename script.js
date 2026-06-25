    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.featuredswiper-button-next',
            prevEl: '.featuredswiper-button-prev',
        },

        // --- RESPONSIVE BREAKPOINTS ---
        slidesPerView: 2,       /* Default for Mobile (< 576px) */
        spaceBetween: 10,

        breakpoints: {
            576: {              /* Mobile Landscape / Small Tablets */
                slidesPerView: 4,
                spaceBetween: 15,
            },
            768: {              /* Tablets */
                slidesPerView: 6,
                spaceBetween: 20,
            },
            1024: {             /* Laptops / Small Desktops */
                slidesPerView: 8,
                spaceBetween: 20,
            },
            1400: {             /* Large Desktops */
                slidesPerView: 10,
                spaceBetween: 20,
            }
        }
    });


    const heroswiper = new Swiper('.hero-swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: ".hswiper-pagination",
            clickable: true,
        },
         navigation: {
            nextEl: '.hero-swiper-button-next',
            prevEl: '.hero-swiper-button-prev',
        },
        slidesPerView: 1,       /* Always 1 slide across all screens */

        // --- RESPONSIVE BREAKPOINTS ---
        spaceBetween: 10,       /* Tight spacing on mobile */

        breakpoints: {
            768: {              /* Desktop/Tablet spacing adjustments */
                spaceBetween: 20,
            }
        },
    });


    const bestSellswiper = new Swiper('.best-sell-swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.best-seller-next',
            prevEl: '.best-seller-prev',
        },

        // --- RESPONSIVE BREAKPOINTS ---
        slidesPerView: 2,       /* Default for Mobile (< 576px) */
        spaceBetween: 15,

        breakpoints: {
            576: {              /* Mobile Landscape */
                slidesPerView: 3,
                spaceBetween: 15,
            },
            768: {              /* Tablets */
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {             /* Desktops */
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });

    const shopByCategoryswiper = new Swiper('.shop-by-category-swiper', {
        direction: 'horizontal',
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.shop-by-category-swiper-next',
            prevEl: '.shop-by-category-swiper-prev',
        },

        // --- RESPONSIVE BREAKPOINTS ---
        slidesPerView: 2,       /* Default for Mobile (< 576px) */
        spaceBetween: 15,

        breakpoints: {
            576: {              /* Mobile Landscape */
                slidesPerView: 3,
                spaceBetween: 15,
            },
            768: {              /* Tablets */
                slidesPerView: 4,
                spaceBetween: 20,
            }

        }
    });
const hamburgerBtn = document.querySelector('.hamburger');
const sidebarMenu = document.querySelector('.sidebar-menu');
const closeSidemenu = document.querySelectorAll('.close-sidebar-control')

hamburgerBtn.addEventListener('click', () => {
    sidebarMenu.classList.add('sidebar-menu-active')
})
closeSidemenu.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        sidebarMenu.classList.remove('sidebar-menu-active')
    })
})

const popularCardTabs = document.querySelectorAll('.popular-cards-wrapper');
const tabBtns = document.querySelectorAll('.tab-btns');
// popular-cards-wrapper
// tab-btns

tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn.getAttribute("data-tab"))
        const targetTab = btn.getAttribute("data-tab");
        popularCardTabs.forEach((tab) => {
            const targetContent = tab.getAttribute('data-tab');
            if (targetTab === targetContent) {
                tab.classList.add('popular-cards-wrapper-active')
            }
            else {
                tab.classList.remove('popular-cards-wrapper-active')
            }
        })
    })
})
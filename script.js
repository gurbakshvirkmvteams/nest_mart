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
    slidesPerView: 2,
    spaceBetween: 10,

    breakpoints: {
        576: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 20,
        },
        1400: {
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
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        768: {
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

    slidesPerView: 1,
    spaceBetween: 15,

    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
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
    slidesPerView: 2,
    spaceBetween: 15,

    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        768: {
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
const removeActiveClass = () => {
    tabBtns.forEach((btn) => {
        btn.classList.remove('btn-active')
    })
}
tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        removeActiveClass()
        // console.log(btn.getAttribute("data-tab"))

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
        btn.classList.add('btn-active')
    })
})
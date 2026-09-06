// ======================================
// Navigation
// ======================================

const navbar = document.querySelector(".navbar");

if (navbar) {

    const isHome = window.location.pathname.includes("index");

    // --------------------------------------
    // Navbar scroll effect
    // --------------------------------------

    if (!isHome) {

        navbar.classList.add("scrolled");

    } else {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        });

    }


    // --------------------------------------
    // Precise navigation scrolling
    // --------------------------------------

    const navLinks = document.querySelectorAll(".nav-links a");


    function scrollToSection(target) {

        if (!target) return;


        // Get the actual navbar height
        const navbarHeight = navbar.offsetHeight;


        // Home should always go to the very top
        if (target.id === "home") {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            return;

        }


        // Calculate the exact position of the section
        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;


        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    }


    // --------------------------------------
    // Navigation click handler
    // --------------------------------------

    navLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const href = this.getAttribute("href");

            if (!href) return;


            // Only handle same-page hash links
            if (href.startsWith("#")) {

                const targetId = href.substring(1);

                const target = document.getElementById(targetId);


                if (target) {

                    event.preventDefault();


                    scrollToSection(target);


                    // Update URL hash without triggering
                    // the browser's default jump
                    history.pushState(
                        null,
                        "",
                        "#" + targetId
                    );

                }

            }

        });

    });


    // --------------------------------------
    // Handle page load with hash
    // --------------------------------------

    function handleInitialHash() {

        const hash = window.location.hash;

        if (!hash) return;


        const targetId = hash.substring(1);

        const target = document.getElementById(targetId);


        if (!target) return;


        // Wait until the page layout is ready
        requestAnimationFrame(() => {

            scrollToSection(target);

        });

    }


    // Run after page has loaded
    window.addEventListener("load", handleInitialHash);

}

// ======================================
// Mobile Navigation
// ======================================

const mobileMenuBtn =
    document.querySelector(".mobile-menu-btn");

const mobileNavLinks =
    document.querySelector(".nav-links");


if (mobileMenuBtn && mobileNavLinks) {

    mobileMenuBtn.addEventListener("click", () => {

        const isOpen =
            mobileNavLinks.classList.toggle("active");

        mobileMenuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Close menu after clicking a navigation link

    mobileNavLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobileNavLinks.classList.remove("active");

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// ======================================
// Homepage Gallery
// ======================================

const galleryImage = document.getElementById("gallery-image");

if (galleryImage) {

    const gallery = [

        "images/index/1.jpeg",
        "images/index/2.jpeg",
        "images/index/3.jpeg",
        "images/index/4.jpeg"

    ];

    const dots = document.querySelectorAll(".gallery-dots span");

    const left = document.querySelector(
        ".gallery-slider .left"
    );

    const right = document.querySelector(
        ".gallery-slider .right"
    );

    let current = 0;


    function updateGallery() {

        galleryImage.src = gallery[current];


        dots.forEach(dot => {

            dot.classList.remove("active");

        });


        if (dots[current]) {

            dots[current].classList.add("active");

        }

    }


    updateGallery();


    // --------------------------------------
    // Right Arrow
    // --------------------------------------

    if (right) {

        right.addEventListener("click", () => {

            current++;


            if (current >= gallery.length) {

                current = 0;

            }


            updateGallery();

        });

    }


    // --------------------------------------
    // Left Arrow
    // --------------------------------------

    if (left) {

        left.addEventListener("click", () => {

            current--;


            if (current < 0) {

                current = gallery.length - 1;

            }


            updateGallery();

        });

    }


    // --------------------------------------
    // Dots
    // --------------------------------------

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            current = index;

            updateGallery();

        });

    });

}


// ======================================
// Products Slider
// ======================================

document.querySelectorAll(".product-image").forEach(card => {

    const folder = card.dataset.folder;

    const total = Number(card.dataset.count);

    const img = card.querySelector("img");

    const leftBtn =
        card.querySelector(".product-arrow.left");

    const rightBtn =
        card.querySelector(".product-arrow.right");

    let current = 1;


    // --------------------------------------
    // Right Arrow
    // --------------------------------------

    if (rightBtn) {

        rightBtn.addEventListener("click", () => {

            current++;


            if (current > total) {

                current = 1;

            }


            img.src =
                `images/${folder}/${current}.jpeg`;

        });

    }


    // --------------------------------------
    // Left Arrow
    // --------------------------------------

    if (leftBtn) {

        leftBtn.addEventListener("click", () => {

            current--;


            if (current < 1) {

                current = total;

            }


            img.src =
                `images/${folder}/${current}.jpeg`;

        });

    }

});
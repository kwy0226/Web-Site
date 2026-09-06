// ======================================
// Navigation
// ======================================

const navbar = document.querySelector(".navbar");

if (navbar) {

    const isHome = window.location.pathname.includes("index");

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

}


// ======================================
// Homepage Gallery
// ======================================

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

    const left = document.querySelector(".gallery-slider .left");
    const right = document.querySelector(".gallery-slider .right");

    let current = 0;

    function updateGallery() {

        galleryImage.src = gallery[current];

        dots.forEach(dot => dot.classList.remove("active"));

        dots[current].classList.add("active");

    }

    updateGallery();

    // Right Arrow
    if (right) {

        right.addEventListener("click", () => {

            current++;

            if (current >= gallery.length) {

                current = 0;

            }

            updateGallery();

        });

    }

    // Left Arrow
    if (left) {

        left.addEventListener("click", () => {

            current--;

            if (current < 0) {

                current = gallery.length - 1;

            }

            updateGallery();

        });

    }

    // Dots
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

    const leftBtn = card.querySelector(".product-arrow.left");
    const rightBtn = card.querySelector(".product-arrow.right");

    let current = 1;

    if (rightBtn) {

        rightBtn.addEventListener("click", () => {

            current++;

            if (current > total) {

                current = 1;

            }

            img.src = `images/${folder}/${current}.jpeg`;

        });

    }

    if (leftBtn) {

        leftBtn.addEventListener("click", () => {

            current--;

            if (current < 1) {

                current = total;

            }

            img.src = `images/${folder}/${current}.jpeg`;

        });

    }

});
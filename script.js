document.addEventListener("DOMContentLoaded", () => {
    const portfolioImages = document.querySelectorAll(".portfolio-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close");

    portfolioImages.forEach(img => {
        img.addEventListener("click", () => {
            const src = img.getAttribute("src");
            lightboxImg.src = src;
            lightbox.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightboxImg.src = "";
    });
});

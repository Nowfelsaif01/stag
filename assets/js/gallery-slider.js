let galleryLoops = gsap.utils.toArray('.gallery-slider').map((line, i) => {
    const galleryItems = line.querySelectorAll(".gallery-slider .gallery-item-inner"),
        galleryTl = horizontalLoop(galleryItems, {
            repeat: -1,
            speed: 1 + i * 0.5,
            draggable: true,
            reversed: false,
            paddingRight: parseFloat(gsap.getProperty(galleryItems[0], "marginRight", "px"))
        });

    galleryItems.forEach(item => {
        item.addEventListener("mouseenter", () => gsap.to(galleryTl, { timeScale: 0, overwrite: true }));
        item.addEventListener("mouseleave", () => gsap.to(galleryTl, { timeScale: i ? -1 : 1, overwrite: true }));
    });

    return galleryTl;
});

let galleryCurrentScroll = 0;
let galleryScrollDirection = 1;

window.addEventListener("scroll", () => {
    let direction = (window.pageYOffset > galleryCurrentScroll) ? 1 : -1;
    if (direction !== galleryScrollDirection) {
        galleryLoops.forEach(tl => gsap.to(tl, { timeScale: direction, overwrite: true }));
        galleryScrollDirection = direction;
    }
    galleryCurrentScroll = window.pageYOffset;
});
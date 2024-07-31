document.addEventListener("DOMContentLoaded", function () {
    const containerRef = document.getElementById("container");

    const section = gsap.utils.toArray(".panel");

    gsap.to(section, {
        xPercent: -100 * (section.length -1),
        ease: "none",
        scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 1,
            snap: 1 / (section.length -1),
            end: () => "+=" + containerRef.offsetWidth,
        }
    })
})
const openCloseNav = () => {
    let e = document.getElementById("links");
    let n = document.getElementById("nav-menu");
    let io = document.getElementById("icon-open");
    let ic = document.getElementById("icon-close");
    let l = document.getElementById("logo");

    if (e.style.display === "inline-block") {
        e.style.display = "none";
        n.style.backgroundColor = "transparent";
        io.style.display = "inline-block";
        ic.style.display = "none";
        l.style.display = "inline-block";
    } else {
        e.style.display = "inline-block";
        n.style.backgroundColor = "white";
        io.style.display = "none";
        ic.style.display = "inline-block";
        l.style.display = "none";
    }
}

let slideIndex = 1;

const setSlides = (n) => {
    showSlides(slideIndex += n);
}

const showSlides = (n) => {
    let mobileURL1 = "./images/mobile-image-hero-1.jpg";
    let mobileURL2 = "./images/mobile-image-hero-2.jpg";
    let mobileURL3 = "./images/mobile-image-hero-3.jpg";
    let desktopURL1 = "./images/desktop-image-hero-1.jpg";
    let desktopURL2 = "./images/desktop-image-hero-2.jpg";
    let desktopURL3 = "./images/desktop-image-hero-3.jpg";
    let div = document.getElementById("hero");
    let h = document.getElementById("heading-text-main");
    let p = document.getElementById("body-text-main");
    let vpw = window.innerWidth;

    if (vpw <= 899) {
        switch (n) {
            case 1:
                div.style.backgroundImage = `url(${mobileURL1})`;
                h.innerHTML = "Discover innovative ways to decorate";
                p.innerHTML =
                    `
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                    `;
                break;
            case 2:
                div.style.backgroundImage = `url(${mobileURL2})`;
                h.innerHTML = "We are available all accross the globe";
                p.innerHTML =
                    `
                With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                store locator. Any questions? Don't hesitate to contact us today.
                `;
                break;
            case 3:
                div.style.backgroundImage = `url(${mobileURL3})`;
                h.innerHTML = "Manufactured with the best materials";
                p.innerHTML =
                    `
                Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                experience in this industry, we understand what customers want for their home and office.
                `;
                break;
            default:
                div.style.backgroundImage = `url(${mobileURL1})`;
                h.innerHTML = "Discover innovative ways to decorate";
                p.innerHTML =
                    `
                Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.
                `;
                slideIndex = 1;
                break;
        }
    } else {
        switch (n) {
            case 1:
                div.style.backgroundImage = `url(${desktopURL1})`;
                h.innerHTML = "Discover innovative ways to decorate";
                p.innerHTML =
                    `
                    We provide unmatched quality, comfort, and style for property owners across the country. 
                    Our experts combine form and function in bringing your vision to life. Create a room in your 
                    own style with our collection and make your property a reflection of you and what you love.
                    `;
                break;
            case 2:
                div.style.backgroundImage = `url(${desktopURL2})`;
                h.innerHTML = "We are available all accross the globe";
                p.innerHTML =
                    `
                With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                store locator. Any questions? Don't hesitate to contact us today.
                `;
                break;
            case 3:
                div.style.backgroundImage = `url(${desktopURL3})`;
                h.innerHTML = "Manufactured with the best materials";
                p.innerHTML =
                    `
                Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                experience in this industry, we understand what customers want for their home and office.
                `;
                break;
            default:
                div.style.backgroundImage = `url(${desktopURL1})`;
                h.innerHTML = "Discover innovative ways to decorate";
                p.innerHTML =
                    `
                We provide unmatched quality, comfort, and style for property owners across the country. 
                Our experts combine form and function in bringing your vision to life. Create a room in your 
                own style with our collection and make your property a reflection of you and what you love.
                `;
                slideIndex = 1;
                break;
        }
    }
}
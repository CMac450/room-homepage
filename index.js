const openCloseNav = () => {
    console.log('HIT');
    let e = document.getElementById("links");
    let n = document.getElementById("nav-menu");
    let io = document.getElementById("icon-open");
    let ic = document.getElementById("icon-close");
    let l = document.getElementById("logo");

    if (e.style.display === "inline-block") {
        e.style.display = "none";
        // n.style.opacity = "0";
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
//showSlides(slideIndex);

const setSlides = (n) => {
    //console.log('hit setSlides');
    showSlides(slideIndex += n);
}

const showSlides = (n) => {
    let numSlides = 3;
    let url1 = "./images/mobile-image-hero-1.jpg";
    let url2 = "./images/mobile-image-hero-2.jpg";
    let url3 = "./images/mobile-image-hero-3.jpg";
    let div = document.getElementById("hero");
    let h = document.getElementById("heading-text-main");
    let p = document.getElementById("body-text-main");

    //console.log(`value of n is: ${n}`);

    switch (n) {
        case 1:
            div.style.backgroundImage = `url(${url1})`;
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
            div.style.backgroundImage = `url(${url2})`;
            h.innerHTML = "We are available all accross the globe";
            p.innerHTML =                 
            `
            With stores all over the world, it's easy for you to find furniture for your home or place of business. 
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
            store locator. Any questions? Don't hesitate to contact us today.
            `;
            break;
        case 3:
            div.style.backgroundImage = `url(${url3})`;
            h.innerHTML = "Manufactured with the best materials";
            p.innerHTML = 
            `
            Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
            to ensure that every product is made as perfect and as consistent as possible. With three decades of 
            experience in this industry, we understand what customers want for their home and office.
            `;
            break;
        default:
            div.style.backgroundImage = `url(${url1})`;
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
}
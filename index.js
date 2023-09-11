const openCloseNav = () => {
    console.log('HIT');
    let e = document.getElementById("links");
    let n = document.getElementById("nav-menu");
    let io = document.getElementById("icon-open");
    let ic= document.getElementById("icon-close");
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

    console.log(`value of n is: ${n}`);

    switch (n) {
        case 1: 
            div.style.backgroundImage = `url(${url1})`;
        break;
        case 2:
            div.style.backgroundImage = `url(${url2})`;
        break;
        case 3: 
        div.style.backgroundImage = `url(${url3})`;
        break;
        default:
            div.style.backgroundImage = `url(${url1})`;
            n = 1;
        break;
    }
}
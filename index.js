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
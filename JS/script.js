const navMenu = document.getElementById("nav-menu");
const toggleBtn = document.getElementById("toggle-btn");
const closeBtn = document.getElementById("nav-close");

// Show menu

if(toggleBtn){
    toggleBtn.addEventListener("click", () =>{
        navMenu.classList.add("show-menu")
    })
}

// Menu hidden
if(closeBtn){
    closeBtn.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu")
    })
}

// Remove menu mobile 

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu")

    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))


// Animation

const sr = ScrollReveal({
    origin:'top',
    distance:'30px',
    duration: 1800,
    reset: true //animation repeat
});

sr.reveal(`.home-content`, {origin:'left'})
sr.reveal(`.home-image`, {origin:'right'})
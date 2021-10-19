let theme = document.querySelector(".theme");
let darkButton = document.querySelector(".dark-button");
let lightButton = document.querySelector(".light-button");
let root = document.querySelector(".root");

theme.addEventListener("click", () => {
    let x = root.classList[1];
    root.classList.remove(x);
    if (x == "dark") {
        root.classList.add("light");
        darkButton.classList.add("show");
        lightButton.classList.remove("show");
    } else {
        root.classList.add("dark");
        darkButton.classList.remove("show");
        lightButton.classList.add("show");
    }
})

let navListItems = document.querySelectorAll(".nav .nav-list-item");
let sectionItems = document.querySelectorAll(".section");

i = 0;

sectionItems.forEach((section) => {
    navListItems[i].addEventListener('click', function () {
        scrollToTargetAdjusted(section);
        closeNav();
    });

    i++;
});

function scrollToTargetAdjusted( element ) {
    var headerOffset = 120;
    // if(window.matchMedia("max-width: 1600px")) {
    //     headerOffset = navHeader.offsetHeight * 1.5;
    // }
    var elementPosition = element.offsetTop;
    console.log(headerOffset);
    var offsetPosition = elementPosition - headerOffset;

    root.scrollTo({
        top: offsetPosition
    });
}

root.addEventListener("scroll", () => {

    var scrolled = root.scrollTop;
    var offset = 120;
    if(window.matchMedia("max-width: 1600px")) {
        offset = 120;
    }

    navUpdate(scrolled, offset);
});

function navUpdate(scrolled, offset) {
    for (var i = 0; i < navListItems.length; i++) {
        if (scrolled > sectionItems[i].offsetTop - offset && (i == navListItems.length - 1  || scrolled < sectionItems[i + 1].offsetTop - offset)) {
            navListItems[i].classList.add('active');
        } else {
            navListItems[i].classList.remove('active');
        }
    }
}

let projects = document.querySelectorAll(".project-header");

projects.forEach((project) => {
    project.addEventListener("click", () => {
        project.parentNode.classList.toggle("open");
    })
})

let nav = document.querySelector(".nav");
let navHeader = document.querySelector(".nav-header");
let backdrop = document.querySelector(".backdrop");

navHeader.addEventListener("click", () => {
    navHeader.parentNode.classList.toggle("open-nav");
    backdrop.classList.toggle("show-backdrop");
})

function closeNav() {
    navHeader.parentNode.classList.remove("open-nav");
    backdrop.classList.remove("show-backdrop");
}
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

let a = document.querySelectorAll("a");

a.forEach((a) => {
    a.addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
            e.stopImmediatePropagation();
            a.clicked();
        }
    })
})

let navListItems = document.querySelectorAll(".nav .nav-list-item");
let sectionItems = document.querySelectorAll(".section");

i = 0;

sectionItems.forEach((section) => {
    navListItems[i].addEventListener('click', (e) => {
        scrollToTargetAdjusted(section);
        e.target.blur();
        previousFocus = false;
        section.focus({
            preventScroll: true
        });
    });

    navListItems[i].addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
            e.target.click();
        }
    })

    i++;
});

function scrollToTargetAdjusted(element) {
    var headerOffset = 100;
    var elementPosition = element.offsetTop;
    var offsetPosition = elementPosition - headerOffset;

    root.scrollTo({
        top: offsetPosition
    });
}

root.addEventListener("scroll", () => {

    var scrolled = root.scrollTop;
    var offset = 120;
    if (window.matchMedia("max-width: 1600px")) {
        offset = 120;
    }

    navUpdate(scrolled, offset);
});

function navUpdate(scrolled, offset) {
    for (var i = 0; i < navListItems.length; i++) {
        if (scrolled > sectionItems[i].offsetTop - offset && (i == navListItems.length - 1 || scrolled < sectionItems[i + 1].offsetTop - offset)) {
            navListItems[i].classList.add('active');
        } else {
            navListItems[i].classList.remove('active');
        }
    }
}

let projectsHeader = document.querySelectorAll(".project-header");
let projects = document.querySelectorAll(".project");

projectsHeader.forEach((projectHeader) => {
    projectHeader.addEventListener("click", () => {
        projectHeader.parentNode.classList.toggle("open-project");
    })
})

projects.forEach((project) => {
    project.addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
            project.classList.toggle("open-project");
        }
    })
})

let nav = document.querySelector(".nav");
let navHeader = document.querySelector(".nav-header");
let navList = document.querySelector(".nav-list");
let backdrop = document.querySelector(".backdrop");
let previousFocus = false;

navHeader.addEventListener("focusout", () => {
    previousFocus = false;
})

navHeader.addEventListener("click", (e) => {
    console.log(previousFocus)
    if (previousFocus) {
        e.target.blur();
        previousFocus = false;
    } else {
        previousFocus = true;
    }
})

navHeader.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        navHeader.click();
    }
})

let arrowIndex = 0;

navHeader.addEventListener("focusin", () => {
    arrowIndex = navHeader.getAttribute("aria-arrow-index");
})

navListItems.forEach((listItem) => {
    listItem.addEventListener("focusin", () => {
        arrowIndex = listItem.getAttribute("aria-arrow-index");
    })
})

navHeader.addEventListener("keydown", (e) => { moveArrow(e) });
navList.addEventListener("keydown", (e) => { moveArrow(e) });

function moveArrow(e) {
    if (e.keyCode == 38) {
        e.preventDefault();
        if (updateIndex(arrowIndex, '-') == 0) {
            navHeader.focus();
        } else {
            navListItems[updateIndex(arrowIndex, '-') - 1].focus();
        }
    }
    if (e.keyCode == 40) {
        e.preventDefault();
        if (updateIndex(arrowIndex, '+') == 0) {
            navHeader.focus();
        } else {
            navListItems[updateIndex(arrowIndex, '+') - 1].focus();
        }
    }
}

function updateIndex(x, op) {
    let top = navListItems.length + 1;

    if (op === '-') {
        if ((x = --x % top) < 0) {
            x = navListItems.length;
        }
    } else {
        x = ++x % top;
    }
    return x;
}

document.addEventListener("keypress", (e) => {
    e.preventDefault();
    if (e.key === '/' && previousFocus) {
        navHeader.blur();
        previousFocus = false;
    } else if (e.key === '/') {
        navHeader.focus();
        previousFocus = true;
    }
})
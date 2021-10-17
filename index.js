let theme = document.querySelector("#theme")
let root = document.querySelector(".root")

theme.addEventListener("click", () => {
    let x = root.classList[1];
    root.classList.remove(x);
    if (x == "dark") {
        root.classList.add("light");
    } else {
        root.classList.add("dark");
    }
})

let navListItems = document.querySelectorAll(".nav-list-item");
let sectionItems = document.querySelectorAll(".section");

i = 0;

sectionItems.forEach((element) => {
    navListItems[i].addEventListener('click', function () {
        scrollToTargetAdjusted(element);
    });

    i++;
});

function scrollToTargetAdjusted( element ) {
    var headerOffset = 100;
    var elementPosition = element.offsetTop;
    console.log(elementPosition);
    var offsetPosition = elementPosition - headerOffset;

    root.scrollTo({
        top: offsetPosition
    });
}

root.addEventListener("scroll", () => {

    var scrolled = root.scrollTop;
    var offset = 120;

    for (var i = 0; i < navListItems.length; i++) {
        if (scrolled > sectionItems[i].offsetTop - offset && (i == navListItems.length - 1  || scrolled < sectionItems[i + 1].offsetTop - offset)) {
            navListItems[i].classList.add('active');
        } else {
            navListItems[i].classList.remove('active');
        }
    }
});

let projects = document.querySelectorAll(".project-header");

projects.forEach((project) => {
    project.addEventListener("click", () => {
        project.parentNode.classList.toggle("open");
    })
})
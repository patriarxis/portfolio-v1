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
        element.scrollIntoView();
    });

    i++;
});


root.addEventListener("scroll", () => {

    var scrolled = root.scrollTop;

    console.log(scrolled);

    for (var i = 0; i < 6; i++) {
        if (scrolled > sectionItems[i].offsetTop - 60 && (i == 5 || scrolled < sectionItems[i + 1].offsetTop - 60)) {
            navListItems[i].classList.add('active');
        } else {
            navListItems[i].classList.remove('active');
        }
    }
});
let theme = document.querySelector("#theme")
let root = document.querySelector(".root")

theme.addEventListener("click", () => {
    let x = root.classList[1];
    root.classList.remove(x);
    if (x=="dark") {
        root.classList.add("light");
    } else {
        root.classList.add("dark");
    }
})
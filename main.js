const arr = document.querySelector(".arr_container");
const clc = document.querySelector(".cancel");
const left = document.querySelector(".left_container");

arr.addEventListener('click', () => {
    if (left.classList.contains("off")) {
        left.classList.remove("off");
        left.classList.add("active");
    }
});

clc.addEventListener('click', () => {
    if (left.classList.contains("active")) {
        left.classList.remove("active");
        left.classList.add("off");
    }
});
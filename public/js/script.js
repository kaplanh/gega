const sunIcon = document.querySelector("#sun");
const moonIcon = document.querySelector("#moon");
const html = document.querySelector("html");

sunIcon.addEventListener("click", () => {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
    html.classList.remove("dark");
});

moonIcon.addEventListener("click", () => {
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
    html.classList.add("dark");
});

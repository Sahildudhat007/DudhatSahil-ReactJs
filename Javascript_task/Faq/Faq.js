
let answers = document.querySelectorAll(".accordion");
answers.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.classList.contains("active")) {
            e.classList.remove("active");
        } else {
            e.classList.add("active");
        }
    });
});
document.addEventListener("DOMContentLoaded",()=> {
document.querySelectorAll("a")
.forEach((el) => {
    if(el.getAttribute("href") == "") {
        el.addEventListener("click", (e) => e.preventDefault())
    }
})
})
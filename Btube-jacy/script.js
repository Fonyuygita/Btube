alert("hello")

const btn = document.querySelector("img.user");
const sidebar = document.querySelector(".sidebar")

btn.addEventListener("click", function () {
    sidebar.classList.toggle("onMobile")
    console.log("hello, clicked");
})
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen");

sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.classList.add(savedTheme);
}

function toggleTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    localStorage.setItem("theme", element.classList.contains("dark-mode") ? "dark-mode" : "");
}
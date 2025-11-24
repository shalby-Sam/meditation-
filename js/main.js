const menuBtn = document.querySelector(".menu");
const mobileNavItems = document.querySelector(".mobile-nav-items");

menuBtn.addEventListener("click", () => {
    // alert("clicked")
    mobileNavItems.classList.toggle("show");
    if(mobileNavItems.classList.contains("show")){
        menuBtn.src = "./icons/cross.svg";
    }else{
        menuBtn.src = "./icons/menu.svg";
    }
});
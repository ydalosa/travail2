let menuBtn = document.getElementById("menuBtn")
let sideNav = document.getElementById("sideNav")
let menu = document.getElementById("menu")

menuBtn.onclick = function(){
    if (sideNav.style.right == "-250px") {
        sideNav.style.right ="0";
        menu.src = "close3.png";
    }
    else{
        sideNav.style.right ="-250px";
        menu.src = "menu4.jpg";
    }
}
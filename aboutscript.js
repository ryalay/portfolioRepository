document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "#loader").style.visibility = "visible";
        window.scrollTo({top:0, behavior: "instant"})
        document.querySelector(
            "html").style.visibility = "hidden";
        document.querySelector(
            "body").style.visibility = "hidden";

            
    } else {
        window.scrollTo({top:0, behavior: "instant"})
        
        
        document.querySelector(
            "html").style.visibility = "visible";
        document.querySelector(
            "body").style.visibility = "visible";

        document.querySelector(
            "#loader").style.display = "none";    }
};

const menu = document.querySelector(".mobilemenuopen");
const menuItems = document.querySelectorAll(".menuItem");
const mobilemenu= document.querySelector(".mobilemenu");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

mobilemenu.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )

const windowHeight = window.innerHeight;
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.getElementById("body").style.background = "black";
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
            "#loader").style.display = "none";
        document.getElementById("body").style.background = "white";
    }
};

var toTopButton = document.getElementById("totop");

let opacity = 0;
function fade() {
   opacity += 0.01;
   element.style.opacity = opacity;
   requestAnimationFrame(fade);
}
requestAnimationFrame(fade);

var toTopButtonScroll = function () 
{
var y = window.scrollY;
if (y > windowHeight + 200) {
  document.getElementById("totop").style.display = "initial";
  toTopButton.fadeIn(1000);
}
else {
  document.getElementById("totop").style.display = "none";
}
};

window.addEventListener("scroll", toTopButtonScroll);
function scrollToTop(){
  window.scrollTo({top:0, behavior: "smooth"})
}
toTopButton.addEventListener("click", scrollToTop);


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

window.addEventListener('scroll', (e) => {
    const delta = e.wheelDelta;
    const currentTime = new Date().getTime();

    if (currentTime - lastTime < animationDuration){
        e.preventDefault();
        return;
    }

    if (delta < 0 && window.scrollY < windowHeight) {
        
        window.scrollTo({top:windowHeight, behavior: "smooth"})

    }
    else(delta > 0 && window.scrollY - 50 < windowHeight)
    {
        window.scrollTo({top:0, behavior: "smooth"})
    }

    
    lastTime = currentTime;
})




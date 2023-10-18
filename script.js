const animationDuration = 500;
let lastTime = 0;

const windowHeight = window.innerHeight;

const mediaQueryMobile = window.matchMedia('(max-width: 500px)');


window.scrollTo({top:0, behavior: "instant"})

if (window.scrollY === 0){
    document.getElementById("body").style.overflow = "hidden";
}


document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "#loader").style.visibility = "visible";
            document.getElementById("body").style.overflow = "hidden";
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

    }
};

if (mediaQueryMobile.matches){
}


let vid = document.getElementById("backgroundvid");
vid.playbackRate = 0.8;




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



function jump(){
    window.scrollTo({top:windowHeight, behavior: "smooth"})
}

if (window.scrollY === 0){
    document.getElementById("body").style.overflow = "hidden";
}

function showScroll(){
    document.getElementById("body").style.overflow = "visible";
}
window.addEventListener('wheel', (e) => {
    const delta = e.wheelDelta;
    const currentTime = new Date().getTime();

    if (currentTime - lastTime < animationDuration){
        e.preventDefault();
        return;
    }

    if (delta < 0 && window.scrollY < windowHeight) {
        
        document.getElementById("body").style.overflow = "hidden";
        window.scrollTo({top:windowHeight, behavior: "smooth"})
        document.getElementById("body").style.overflow = "visible";

    }
    else if (delta > 0 && window.scrollY - 50 < windowHeight)
    {
        document.getElementById("body").style.overflow = "hidden";
        window.scrollTo({top:0, behavior: "smooth"})
    }
    else if (delta > 0 && window.scrollY + 50 > windowHeight)
    {
        document.getElementById("body").style.overflow = "visible";
    }
    else if (delta < 0 && window.scrollY >= windowHeight)
    {
        document.getElementById("body").style.overflow = "visible";

    }
    
    lastTime = currentTime;
})


while (window.scrollY === windowHeight &&  document.getElementById("body").style.overflow === "hidden") {
    document.getElementById("body").style.overflow = "visible";
}

while (window.scrollY < windowHeight && document.getElementById("body").style.overflow === "visible" && delta > 0)
{
    document.getElementById("body").style.overflow = "hidden";
    window.scrollTo({top:windowHeight, behavior: "smooth"})
}

document.getElementById("body").onscroll = function myFunction() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("work");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor - 200;
    target.style.backgroundPosition = xvalue + " -" + yvalue + "px";
  }


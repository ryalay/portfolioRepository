const animationDuration = 500;
let lastTime = 0;
window.scrollTo({left: 0, top:window.scrollY, behavior: 'instant' });
const windowHeight = window.innerHeight;

const mediaQueryMobile = window.matchMedia('(max-width: 850px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 850px)');

var toworkbutton = document.getElementById("workarrow");

/*
function scrollToWork(){
    window.scrollTo({top:windowHeight, behavior: "smooth"})
  }

toworkbutton.addEventListener("click", scrollToWork)

window.scrollTo({top:0, behavior: "instant"})
*/



if (window.scrollY === 0){
    document.getElementById("body").style.overflow = "hidden";      
}


document.onreadystatechange = function () {
    window.scrollTo(0, window.scrollY);
    if (document.readyState !== "complete") {
        /*
        window.scrollTo({top:0, behavior: "instant"})
        */
        document.querySelector(
            "html").style.visibility = "hidden";
        document.querySelector(
            "body").style.visibility = "hidden";
 

            
    } else {
        
        document.querySelector(
            "html").style.visibility = "visible";
        document.querySelector(
            "body").style.visibility = "visible";
        document.querySelector(
            "#loader").style.display = "none";
        window.scrollTo(0, window.scrollY);
    }
};



let vid = document.getElementById("backgroundvid");
vid.setAttribute("playsinline", "");
vid.setAttribute("muted", "");
vid.play();
vid.playbackRate = 0.8;


while (mediaQueryMobile.matches && document.getElementById("body").style.overflow === "hidden"){
    document.getElementById("body").style.overflowY = "visible";
    document.getElementById("html").style.overflowY = "visible";
}


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
    document.getElementById("body").style.overflowY = "visible";
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
        document.getElementById("body").style.overflowY = "visible";

    }
    else if (delta > 0 && window.scrollY - 50 < windowHeight)
    {
        document.getElementById("body").style.overflow = "hidden";
        window.scrollTo({top:0, behavior: "smooth"})
    }
    else if (delta > 0 && window.scrollY + 50 > windowHeight)
    {
        document.getElementById("body").style.overflowY = "visible";
    }
    else if (delta < 0 && window.scrollY >= windowHeight)
    {
        document.getElementById("body").style.overflowY = "visible";

    }
    
    lastTime = currentTime;
})



window.addEventListener("touchstart", handleStart);

function handleStart(){
    document.getElementById("body").style.overflowY = "visible";
}



while (window.scrollY === windowHeight &&  document.getElementById("body").style.overflow === "hidden") {
    document.getElementById("body").style.overflowY = "visible";
}


while (window.scrollY < windowHeight && document.getElementById("body").style.overflow === "visible" && delta > 0)
{
    document.getElementById("body").style.overflow = "hidden";
    window.scrollTo({top:windowHeight, behavior: "smooth"})
}


while (mediaQueryMobile.matches && document.getElementById("body").style.overflow === "hidden"){
    document.getElementById("body").style.overflowY = "visible";
    document.getElementById("html").style.overflowY = "visible";
}

var factor = 0;

function mobileWorkScroll(){
    window.scrollTo({top:(windowHeight + 50), behavior: "smooth"})
}

var chevron = document.getElementById('chevron');

chevron.addEventListener("touchstart", mobileWorkScroll);


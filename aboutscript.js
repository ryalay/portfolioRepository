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


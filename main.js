var fi = document.getElementById("fi");
var se = document.getElementById("se");
fi.addEventListener("click", picLink);
se.addEventListener("click", picLink);
function picLink(){
    var allImage = document.querySelectorAll("img");
    for(var i = 0; i < allImage.length; i++)
    {
        allImage[i].className = "hide";
    }
    var picId = this.attributes["date-img"].value;
    var pic = document.getElementById(picId);
    if(pic.className === "hide"){
        pic.className = "";
    }else{
        pic.className = "hide";
    }
}
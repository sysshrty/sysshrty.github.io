/* show and hide funtions nava */
const showHideNav = () => {
    //console.log("in show hide");
    document.getElementById("nav-items").classList.toggle("hide-small");
}
const changeP = () => {
    e.preventDefault();// don;t go to another page
    document.getElementById("display").textContent = "Hello Sherry";
}
const showMood = () => {
    //console.log("in show mood");
    //get the text from the text box
    const color = document.getElementById("txt-mood").value.toLowerCase().trim();
    const moodP = document.getElementById("moood");
    //appear below
    moodP.innerHTML = color;
    //basics on moood , dont have a value red > with if statements. helper : ir 1 do this. 
    let mood ="feeling blue?";
    if (color == "red") {
        mood = "HUngery";
    } else if (color == "blue") {
        mood = "sad gurl";
    } else if (color == "yellow") {
        mood = "yellow";
    }
    //mood.innerHtml = "you are in a "+mood+ "mood!";
    //backkick
    moodP.innerHTML = `you are in a ${mood}`;

    ///console.log(color);
}
const evalForm = (e) => {
    e.preventDefault();
    console.log("we did it");
}
/* now call */
document.getElementById("hamburger").onclick = showHideNav; //null
document.getElementById("link-click").onclick = changeP;
document.getElementById("txt-mood").onkeyup = showMood;
document.getElementById("form").onsubmit = evalForm;
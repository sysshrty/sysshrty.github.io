//console.log("HEllO")
let pos = 0;

const colorSquare = () => {
    document.getElementById("sqaure").classList.add("rainbow");
};



const moveDown = () => {
    //console.log("down");
    const root = document.querySelector("root");
    //change the access in root, seting square top to these settings
    root.style.setProperty("--sqaure-top",pos +"px"); 
};
const addCircle = () => {
    //hmk
    const color = document.getElementById("txt-color").value;
    const root = document.querySelector(":root");

    root.style.setProperty("--ball-color", color); // or ball.style.background = color; (all balls)
    //console.log("adding a circle");
    const playground = document.getElementById("circle-playground");
    //playground.innerHTML = "test";
    //playground.innerHTML += "<section class='circle'></section>";
    //making a new section
    const ball = document.createElement("section");
    ball.classList.add("circle");//floating element 
    //last 
    //ball.style.background = color; (change 1 ball)
    playground.append(ball); //put inside, end of index. (empty playground for her example)

};

document.getElementById("btn-color").onclick = colorSquare;
document.getElementById("btn-move-down").onclick = moveDown;
document.getElementById("btn-add-circle").onclick = addCircle;
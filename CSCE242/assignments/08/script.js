const toggleCommand = () => {
    const yoga = document.getElementById("yoga-content-id");
    const command = document.getElementById("enter-command");
    if (!yoga.classList.contains("hide")) {
        yoga.classList.toggle("hide");
    }
    if (command.classList.contains("hide")) {
        command.classList.toggle("hide");
    }
};

const runCommand = () => {
    const command = document.getElementById("command-box").value.toLowerCase().trim().slice(-1);
    const image = document.getElementById("command-img");
    if (command =='b') {
        image.src = "images/read.jpg";
    } else if (command == 'c') {
        image.src = "images/clown.jpg";
    } else if (command == 'p') {
        image.src = "images/birthday.jpg";
    } else if (command == 'r') {
        image.src = "images/rain.jpg";
    } else if (command == 's') {
        image.src = "images/shovel.jpg";
    } else if (command == 'w') {
        image.src = "images/work.jpg";
    }
};

const toggleYoga = () => {
    const yoga = document.getElementById("yoga-content-id");
    const command = document.getElementById("enter-command");
    if (!command.classList.contains("hide")) {
        command.classList.toggle("hide");
    }
    if (yoga.classList.contains("hide")) {
        yoga.classList.toggle("hide");
    }
};

const changeYogaPose = () => {
    const pose = document.getElementById("yoga-slider").value;
    const image = document.getElementById("yoga-img");
    if (pose == 1) {
        image.src = "images/yoga1.jpg";
    } else if (pose == 2) {
        image.src = "images/yoga2.jpg";
    } else if (pose == 3) {
        image.src = "images/yoga3.jpg";
    } else if (pose == 4) {
        image.src = "images/yoga4.jpg";
    } else if (pose == 5) {
        image.src = "images/yoga5.jpg";
    } else if (pose == 6) {
        image.src = "images/yoga6.jpg";
    } else if (pose == 7) {
        image.src = "images/yoga7.jpg";
    } else if (pose == 8) {
        image.src = "images/yoga8.jpg";
    }
};

document.getElementById("command-button").onclick = toggleCommand;
document.getElementById("command-box").onkeyup = runCommand;
document.getElementById("yoga-button").onclick = toggleYoga;
document.getElementById("yoga-slider").oninput = changeYogaPose;



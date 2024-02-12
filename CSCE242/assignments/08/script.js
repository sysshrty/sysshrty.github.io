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

const ExOneCommand = () => {
    const command = document.getElementById("command-container").value.toLowerCase().trim().slice(-1);
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

const changeYoga = () => {
    const poses = document.getElementById("yoga-slider").value;
    const image = document.getElementById("yoga-img");
    if (poses == 1) {
        image.src = "images/yoga1.jpg";
    } else if (poses == 2) {
        image.src = "images/yoga2.jpg";
    } else if (poses == 3) {
        image.src = "images/yoga3.jpg";
    } else if (poses == 4) {
        image.src = "images/yoga4.jpg";
    } else if (poses == 5) {
        image.src = "images/yoga5.jpg";
    } else if (poses == 6) {
        image.src = "images/yoga6.jpg";
    } else if (poses == 7) {
        image.src = "images/yoga7.jpg";
    } else if (poses == 8) {
        image.src = "images/yoga8.jpg";
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

document.getElementById("command-btn").onclick = toggleCommand;
document.getElementById("command-container").onkeyup = ExOneCommand;
document.getElementById("yoga-btn").onclick = toggleYoga;
document.getElementById("yoga-slider").oninput = changeYoga;



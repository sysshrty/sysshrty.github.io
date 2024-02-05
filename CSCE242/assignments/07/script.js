let pos = 0;

const changeImage = (image) => {
    // const image = document.getElementById("image");
    // Change to a different image URL
    image.src = "images/road.png";
};

const rotateImage = () => {
    const slider = document.getElementById("slider");
    const image = document.querySelector(".column2 img");
    const rotationValue = slider.value;
    image.style.transform = `rotate(${rotationValue}deg)`;
};


function addStar(event) {
    var star = document.createElement('span');
    star.className = 'star';
    star.style.left = event.clientX + 'px';
    star.style.top = event.clientY + 'px';
    document.querySelector('.column').appendChild(star);
}

document.getElementById("image").onclick = changeImage;
document.getElementById("slider").addEventListener("input", rotateImage);
document.querySelector(".stars").onclick = addStar;





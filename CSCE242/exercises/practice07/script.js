const slider = document.getElementById('slider');
const image = document.getElementById('image');
const image2 = document.getElementById('image2');

const changeImage = () => {
    // Change to a different image URL for the first column
    image.src = "images/road.png";
    // Change to a different image URL for the second column
    image2.src = "images/road.png";
};

const rotateImage = () => {
    const rotationValue = slider.value;
    image.style.transform = `rotate(${rotationValue}deg)`;
    image2.style.transform = `rotate(${rotationValue}deg)`;
};

function addStar(event) {
    var star = document.createElement('span');
    star.className = 'star';
    star.style.left = event.clientX + 'px';
    star.style.top = event.clientY + 'px';
    document.querySelector('.stars').appendChild(star);
}

document.getElementById("image").onclick = changeImage;
document.getElementById("slider").addEventListener("input", rotateImage);
document.querySelector(".stars").onclick = addStar;

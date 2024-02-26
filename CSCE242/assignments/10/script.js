const adList = [
    "Experience the finest quality meats from American Packers!",
    "Get your favorite cuts of meat delivered straight to your doorstep!",
    "Savor the flavor with American Packers meats!",
    "Discover a world of delicious possibilities with American Packers!",
    "Quality, freshness, and taste - all in one place with American Packers!",
    "Join the meat lovers community and enjoy exclusive deals with American Packers!"
];

let index = 0;

const showAd = () => {
    const textContent = document.getElementById("text");
    textContent.innerHTML = adList[index];
    index = (index +1) % adList.length;
};

showAd();

setInterval(showAd, 2000);
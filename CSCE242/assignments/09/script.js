const menu = () => {
  const button = document.getElementById("button-text");
  if (button.innerHTML == "▼") {
      button.innerHTML = "&#9650";
  } else {
      button.innerHTML = "&#9660";
  }
  document.getElementById("nav-list").classList.toggle("hide");
}

const displayBallArea = () => {
    const yoga = document.getElementById("yoga");
    const ballBounce = document.getElementById("ball-bounce");
    yoga.classList.toggle("hide");
    ballBounce.classList.toggle("hide");
  };
  
  let direction = true;
  let ballPosition = 0;
  let startBall;
  
  const upDown = (e) => {
    e.preventDefault();
    const root = document.querySelector(":root");
    if (e.target.innerHTML === "start") {
      e.target.innerHTML = "stop";
      startBall = setInterval(() => {
        direction = ballPosition === 725 ? false : ballPosition === 0 ? true : direction;
        ballPosition += direction ? 1 : -1;
        root.style.setProperty("--ball-position", `${ballPosition}px`);
      }, 1);
    } else {
      e.target.innerHTML = "start";
      clearInterval(startBall);
    }
  };
  

const displayYoga = () => {
  const yoga = document.getElementById("yoga");
  const ballBounce = document.getElementById("ball-bounce");
  if (!ballBounce.classList.contains("hide")) {
      ballBounce.classList.toggle("hide");
  }
  if (yoga.classList.contains("hide")) {
      yoga.classList.toggle("hide");
  }
};

const showDetail = (e) => {
    const descriptionDiv = document.getElementById("description");
    descriptionDiv.innerHTML = `<p>${e.target.getAttribute("rel")}</p>`;
  };
  
  document.querySelectorAll("#image-list li").forEach((li) => {
    li.onclick = showDetail;
  });
  
document.getElementById("menu-btn").onclick = menu;
document.getElementById("ball-button").onclick = displayBallArea;
document.getElementById("start-stop").onclick = upDown ;
document.getElementById("yoga-button").onclick = displayYoga;






const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
  };
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
  };


const evalForm = (e) => {
  e.percentDefault();
  console.log("here");
}
document.getElementById("my-form").onsubmit = evalForm;
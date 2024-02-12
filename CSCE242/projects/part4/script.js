// Toggles the nav items to show/hide when the hamburger menu is clicked

const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
  };
  
  // Calls the toggleHamburger function when the hamburger menu is clicked
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
  };

/*
const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};
document.getElementById("hamburger").onclick = showHideNav;
*/

const evalForm = (e) => {
  e.percentDefault();
  console.log("here");
}
document.getElementById("my-form").onsubmit = evalForm;
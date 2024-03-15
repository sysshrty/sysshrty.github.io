const showHideNav = () => {
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
  document.getElementById("hamburger").onclick = showHideNav;
  
  const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
  };
  
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
  };


  const getShoes = async() => {
    const url = "https://sysshrty.github.io/json/menu.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

  
  const showCocktails = async () => {
    const cocktails = await getCocktails();
    const cocktailMenuDiv = document.getElementById("cocktail-menu");
  
    cocktails.forEach(cocktail => {
        cocktailMenuDiv.append(getCocktailSection(cocktail));
    });
  };
  
  const getCocktailSection = (cocktail) => {
    const section = document.createElement("section");
    section.classList.add("cocktail-item");
  
    const name = document.createElement("h2");
    name.textContent = cocktail.name;
  
    const img = document.createElement("img");
    img.src = "images/" + cocktail.img_name;
    img.alt = cocktail.name;
  
    const description = document.createElement("p");
    description.textContent = cocktail.description;
  
    const price = document.createElement("p");
    price.textContent = "Price: " + cocktail.price;
  
    section.appendChild(name);
    section.appendChild(img);
    section.appendChild(description);
    section.appendChild(price);
  
    return section;
  };
  
  window.onload = () => showCocktails();
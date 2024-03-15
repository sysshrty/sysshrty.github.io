const fetchCocktails = async () => {
    const url = "http//sysshrty.github.io/CSCE242/json/menu.json";
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error(error);
        // Handle error
    }
};

const displayCocktails = async () => {
    const cocktailList = await fetchCocktails();
    const cocktailMenu = document.getElementById("cocktail-menu");
    cocktailList.forEach((cocktail) => {
        cocktailMenu.append(createCocktailElement(cocktail));
    });
};

const createCocktailElement = (cocktail) => {
    const cocktailItem = document.createElement("div");
    cocktailItem.classList.add("cocktail-item");

    const name = document.createElement("h2");
    name.textContent = cocktail.name;
    cocktailItem.appendChild(name);

    const img = document.createElement("img");
    img.src = cocktail.img_name;
    img.alt = cocktail.name;
    cocktailItem.appendChild(img);

    const description = document.createElement("p");
    description.textContent = cocktail.description;
    cocktailItem.appendChild(description);

    const price = document.createElement("p");
    price.textContent = "Price: " + cocktail.price;
    cocktailItem.appendChild(price);

    return cocktailItem;
};

window.onload = () => displayCocktails();


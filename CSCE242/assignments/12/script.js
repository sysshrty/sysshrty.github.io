const fetchHouses = async () => {
    const url = "https://portiaportia.github.io/json/house-plans.json";
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error(error);
        // Handle error
    }
};

const displayHouses = async () => {
    const houseList = await fetchHouses();
    const layout = document.getElementById("layout");
    houseList.forEach((house) => {
        layout.append(createHouseElement(house));
    });
};

const createHouseElement = (house) => {
    const houseSection = createHTMLElement("section", "house");

    const h2 = createHTMLElement("h2", null, house.name);
    houseSection.appendChild(h2);

    const mainInfoDiv = createHTMLElement("div", "info");

    const houseImage = createHTMLElement("img", "main-image");
    houseImage.src = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;
    mainInfoDiv.appendChild(houseImage);
    //organized by looking at json file
    const infoSection = createHTMLElement("section", "info-text");
    const roomSize = createParagraphElement(`<strong>Size</strong>: ${house.size}`);
    const bedroomNum = createParagraphElement(`<strong>Bedrooms</strong>: ${house.bedrooms}`);
    const bathroomNum = createParagraphElement(`<strong>Bathrooms</strong>: ${house.bathrooms}`);
    const featuresOfHomes = createFeaturesElement(house.features);

    infoSection.append(roomSize, bedroomNum, bathroomNum, featuresOfHomes);
    mainInfoDiv.appendChild(infoSection);
    houseSection.appendChild(mainInfoDiv);

    const levelDiv = createHTMLElement("div", "levels");
    house.floor_plans.forEach((level) => {
        levelDiv.appendChild(createLevelElement(level));
    });
    houseSection.appendChild(levelDiv);

    return houseSection;
};

const createHTMLElement = (tagName, className = null, textContent = null) => {
    const element = document.createElement(tagName);
    if (className) {
        element.classList.add(className);
    }
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
};

const createParagraphElement = (innerHTML) => {
    const paragraph = createHTMLElement("p");
    paragraph.innerHTML = innerHTML;
    return paragraph;
};

const createFeaturesElement = (features) => {
    const featuresParagraph = createHTMLElement("p");
    featuresParagraph.innerHTML = `<strong>Features</strong>: ${features.map(feature => `* ${feature}`).join(' ')}`;
    return featuresParagraph;
};

const createLevelElement = (level) => {
    const levelSection = createHTMLElement("section", "level");

    const h3 = createHTMLElement("h3", null, level.name);
    levelSection.appendChild(h3);

    const levelImage = createHTMLElement("img", "level-image");
    levelImage.src = `https://portiaportia.github.io/json/images/house-plans/${level.image}`;
    levelSection.appendChild(levelImage);

    return levelSection;
};

window.onload = () => displayHouses();


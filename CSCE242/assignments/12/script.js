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
    const houseSection = document.createElement("section");
    houseSection.classList.add("house");

    const nameH2 = document.createElement("h2");
    nameH2.textContent = house.name;
    houseSection.append(nameH2);

    const mainInfoDiv = document.createElement("div");
    mainInfoDiv.classList.add("info");

    const houseImage = document.createElement("img");
    houseImage.src = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;
    houseImage.classList.add("main-image");
    mainInfoDiv.append(houseImage);

    const infoSection = document.createElement("section");
    infoSection.classList.add("info-text");

    const sizeP = document.createElement("p");
    sizeP.innerHTML = `<strong>Size</strong>: ${house.size}`;
    infoSection.append(sizeP);

    const bedroomsP = document.createElement("p");
    bedroomsP.innerHTML = `<strong>Bedrooms</strong>: ${house.bedrooms}`;
    infoSection.append(bedroomsP);

    const bathroomsP = document.createElement("p");
    bathroomsP.innerHTML = `<strong>Bathrooms</strong>: ${house.bathrooms}`;
    infoSection.append(bathroomsP);

    const featuresP = document.createElement("p");
    house.features.forEach((feature) => {
        featuresP.innerHTML += `* ${feature} `;
    });
    infoSection.append(featuresP);

    mainInfoDiv.append(infoSection);
    houseSection.append(mainInfoDiv);

    const levelDiv = document.createElement("div");
    levelDiv.classList.add("levels");

    house.floor_plans.forEach((level) => {
        levelDiv.append(createLevelElement(level));
    });

    houseSection.append(levelDiv);
    return houseSection;
};

const createLevelElement = (level) => {
    const levelSection = document.createElement("section");
    levelSection.classList.add("level");

    const nameH3 = document.createElement("h3");
    nameH3.textContent = level.name;
    levelSection.append(nameH3);

    const levelImage = document.createElement("img");
    levelImage.src = `https://portiaportia.github.io/json/images/house-plans/${level.image}`;
    levelImage.classList.add("level-image");
    levelSection.append(levelImage);

    return levelSection;
};

window.onload = () => displayHouses();


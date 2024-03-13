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

    const h2 = document.createElement("h2");
    h2.textContent = house.name;
    houseSection.append(h2);

    const mainInfoDiv = document.createElement("div");
    mainInfoDiv.classList.add("info");
	//connected to instructor's json for images
    const houseImage = document.createElement("img");
    houseImage.src = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;
    houseImage.classList.add("main-image");
    mainInfoDiv.append(houseImage);

    const infoSection = document.createElement("section");
    infoSection.classList.add("info-text");

    const roomSize = document.createElement("p");
    roomSize.innerHTML = `<strong>Size</strong>: ${house.size}`;
    infoSection.append(roomSize);

    const bedroomNum = document.createElement("p");
    bedroomNum.innerHTML = `<strong>Bedrooms</strong>: ${house.bedrooms}`;
    infoSection.append(bedroomNum);

    const bathroomNum = document.createElement("p");
    bathroomNum.innerHTML = `<strong>Bathrooms</strong>: ${house.bathrooms}`;
    infoSection.append(bathroomNum);

    const featuresOfHomes = document.createElement("p");
    house.features.forEach((feature) => {
        featuresOfHomes.innerHTML += `* ${feature} `;
    });
    infoSection.append(featuresOfHomes);

    mainInfoDiv.append(infoSection);
    houseSection.append(mainInfoDiv);

    const levelDiv = document.createElement("div");
    levelDiv.classList.add("levels");
	//for loop inside floor_plan 
    house.floor_plans.forEach((level) => {
        levelDiv.append(createLevelElement(level));
    });

    houseSection.append(levelDiv);
    return houseSection;
};

const createLevelElement = (level) => {
    const levelSection = document.createElement("section");
    levelSection.classList.add("level");
	//third house
    const h3 = document.createElement("h3");
    h3.textContent = level.name;
    levelSection.append(h3);

    const levelImage = document.createElement("img");
    levelImage.src = `https://portiaportia.github.io/json/images/house-plans/${level.image}`;
    levelImage.classList.add("level-image");
    levelSection.append(levelImage);

    return levelSection;
};

window.onload = () => displayHouses();


//asychronous - wait to get something 
const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";
    //what if we get an error so try and catch
    try {
        const response = await fetch(url); //waiting for response
        return response.json(); //what it in a json format
    } catch (error) {
        console.log(error);
    }
};
//access the getShoes to show them, waiting too
const showShoes = async() => {
    const shoes = await getShoes();
    const shoeList = document.getElementById("shoes-section");
    //loop thru shoes
    shoes.forEach(shoe => {
        //console.log(shoe.name);
        //access them
        //document.getElementById("shoe-section").append(getShoeSection(shoe));
        shoeList.append(getShoeSection(shoe));
    });
}
//make a shoe then ill make a section to display the shoe
const getShoeSection = (shoe) => {
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    section.append(h3);
    h3.innerHTML = shoe.name; //accessing by their key on json file

    const brandP = document.createElement("p");
    section.append(brandP);
    brandP.innerHTML = shoe.brand;

    const ul = document.createElement("ul");
    section.append(ul);

    /*
    shoe.reviews.forEach((review) => {
        const li = document.createElement("li");
        li.innerHTML = review;
        ul.append(li);
    });
    */
    for (let i in shoe.reviews) {
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = shoe.reviews[i];
    }

    return section;
}

window.onload = () => showShoes();
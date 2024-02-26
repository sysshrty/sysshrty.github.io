const imageList = [];
imageList["snow.jpg"] = ["https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4", "Image by wirestock"];
imageList["mountain-lake.jpg"] = ["https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7", "Image by vecstock"];
imageList["small-house.jpg"] = ["https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4", "Image by wirestock"];
imageList["garden.jpg"] = ["https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4", "Image by wirestock"];
imageList["golden.jpg"] = ["https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4", "Image by wirestock"];


const displayImages = () => {
    const imagesDiv = document.getElementById("images");
    for (let imageName in imageList) {
        const img = document.createElement("img");
        img.src = `images/${imageName}`;
        img.classList.add("image");
        const attrP = document.createElement("p");
        const attrA = document.createElement("a");
        attrA.href = imageList[imageName][0];
        attrA.textContent = imageList[imageName][1];
        //set child append
        attrP.appendChild(attrA);
        attrP.insertAdjacentText("beforeend", " on Freepik");
        imagesDiv.appendChild(img);
        imagesDiv.appendChild(attrP);
    }
};

displayImages();
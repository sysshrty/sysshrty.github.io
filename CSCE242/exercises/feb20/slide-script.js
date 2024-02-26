const slide = () => {
    //console.log("sliding");
    // find the child of the slide show , find item that is not class hidden
    const currentImage = document.querySelector("#slideshow :not(.hidden)");
    //next image, getting siblings
    let nextImage = currentImage.nextElementSibling;

    //if current image is last image
    if(nextImage == null) {
        //first element 
        nextImage = document.querySelector("#slideshow :first-child");
    } 

    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");

};

setInterval(slide, 1000);
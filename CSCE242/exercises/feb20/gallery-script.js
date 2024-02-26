/*let count = 1;
//stop invteval , so give it a variable 
let setInterval = setInterval90(() => {
    const allSections = document.querySelectorAll(".items section");
    allSections.forEach((section) => {
        section.classList.remove("highlighted");
    });
    /*
    //console.log("hi");
    //do logic then count , hightlight one item at the time
    document.querySelectorAll(".items section").forEach((section)=> { //belongs to the div in the sections
        section.classList.remove("highlighted"); //clear out 
    }); */
/*
    if(count > allSections.lenght) {
        count = 1;
        //clearInterval(inteval);
        //return;
    }
    //current item - one item use queryselector
    // ` using variable , currently give the first one 
    document.querySelector(`.items section:nth-child(${count})`).classList.add("highlighted"); //write it out , select the 3rd child


    count++;
}, 500); */



//solution 2

const interval = setInterval(() => {
    const currentSection = document.querySelector(".items section.highlighted");
    let nextSection = currentSection.nextElementSibling;

    if(nextSection == null) {
        nextSection = document.querySelector(".items section");
    }

    currentSection.classList.remove("highlighted");
    nextSection.classList.add("highlighted");
}, 500);



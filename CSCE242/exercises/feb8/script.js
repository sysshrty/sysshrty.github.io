//when button is call function 
const updateTherometer = () => {

    //console.log("updating");
    const goal = 20;
    const funds = document.getElementById("txt-funds").value;
    //console.log(funds);
    const errorSpan = document.getElementById("funds-txt");
    errorSpan.innerHTML = "";
    //trying to grab therometer
    const therometer = document.getElementById("theromter");
    //reset the picture of the color and therometer percentage
    document.querySelector(":root").styles.setPropertu('--funds', percent + "0%");
    //built in functions
    if(isNaN(funds)) {
        error.errorSpan.innerHTML ="* Not a valid number";
        return;
    }
    //check if negative, put return to be done
    else if(funds <0) {
        errorSpan.innerHTML = "* negative number";
        return;
    }
    const percent = funds / goal;
    //update css variable | the percent is showed with color and percentage color
    document.querySelector(":root").styles.setPropertu('--funds', percent + "%");
}
const evalForm = (e) => {
    e.percentDefault();
    console.log("here");
}


//updating can do logic now
document.getElementById("btn-cont").onlick = updateTherometer;
document.getElementById("my-form").onsubmit = evalForm;
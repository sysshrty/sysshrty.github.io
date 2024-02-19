const numLoop = () => {
    const numList = document.getElementById("num-list");
    //clear out 
    numList.innerHTML = "";
    const errorP = document.getElementById("error-nums");
    errorP.innerHTML = "";

    //get starting and ending numbers
    let startNum = document.getElementById("txt-start.num").value;
    let endNum = document.getElementById("txt-end-num").value;

    console.log(`looping from ${startNum} to ${endNum}`);


    if(NaN(startNum) || NaN(endNum) || startNum.trim() ==  ""|| endNum.trim() == "")  {
        errorP.innerHTML = "You must enter correctly";
        return;
    }   
    startNum = parseInt(startNum);
    endNum = parseInt(endNum);

    if(startNum >= endNum) {
        errorP.innerHTML = "Ending number must be larger thans starting number";
        return;
    }

    /* I continuee to change using let*/
    /*crear an li for each number*/
    /*and append it to the list*/
    for(let i= startNum; i< endNum;i++) {
        /*console.log(i);*/
        const li = document.createElement("li");
        li.innerHTML = i;
        //li.innerHTML = `My Number: ${i+1}`; /*will evaluate enter variables*/
        numList.append(li);
    }
}

document.getElementById("btn-loop-nums").onclick = numLoop;
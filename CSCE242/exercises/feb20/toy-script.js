//adding to it
let toys = ["drum", "ball", "jump rope", "ballon", "pole"];
let toyPrices = [];
toyPrices["barbie"] = 7.54;
toyPrices["mere-man"] = 13.14;
toyPrices["tops"] = 4.99;
toyPrices["matchbox car"] = 3.99;
toyPrices["cookie bake"] = 49.00;

const showToys = () => {
    //console.log("Showing"); //testing 
    //access result to have there 
    const resultDiv = document.getElementById("result");
    //clear previous result 
    resultDiv.innerHTML = "";
    //loop thru , actually index
    /*
    for(let i in toys) { //i is 1,2,3,4 -don't do this one
        console.log(toys[i]);
    }
    */
   //iterate each toys, what function are you going to perform
   //for every toys this will be executed
   toys.forEach((toy)=>{
     //console.log(toy);
     const p = document.createElement("p");
     p.innerHTML = toy;
     //append
     resultDiv.append(p);
   });
};
const addToy = () => {
    const toy = document.getElementById("txt-toy").value;
    //add end of the array list
    toys.push(toy);
    //already made that function
    showToys();
}
const showToysTable = () => {
    const toyTable = document.getElementById("toy-table");
    //loop thru each of these
    for(let toy in toyPrices) {
        //row for tr
        const tr = document.createElement("tr");
        //td will have the toy in it 
        const td = document.createElement("td");
        td.innerHTML = toy;
        tr.append(td);
        //attach the tr to the table
        toyTable.append(tr);
        
        tr.onclick = () => {                   ( 1 )
            //console.log("wow, clicked");
            //attched eventlistener
            //console.log(`you clicked ${toyPrices[toy]}.`);
            const descP = document.getElementById("toy-description");
            //showing on the other columns 
            descP.innerHTML =   `${toy} costs ${toyPrices[toy]}.`;
        };
       /*
       tr.onclick = showPrice.bind(null, toy); // ( 2 )
       */
    }
}
//another way ^ tr.onclick = () => {}       (2)
const showPrice = (toy) => {
    console.log(toy);
}

showToys();
document.getElementById("button-add-toy").onclick = addToy;
showToysTable();
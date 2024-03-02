class Child {
    constructor(firstName, lastName, picture, grade) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.picture = picture;
      this.grade = grade;
    }
  
    get tableRow() {
      const tr = document.createElement("tr");
      tr.append(this.tableColumn(this.firstName)); //pass in data
      tr.append(this.tableColumn(this.lastName));
      tr.append(this.tableColumn(this.grade));
      //for onclick
  
      tr.onclick = this.displayDetails.bind(this);//pass the child use BIND, the this inside display. no access
      /* same as displlayDetails()
      tr.onclick = () => {
        console.log(this.firstName);
      }*/
  
      return tr;
    }
    //helper
    tableColumn(data) {
        const td = document.createElement("td");
        td.innerHTML = data;
        return td;
      }
    displayDetails() {
        const section = document.getElementById("child-details");
        section.innerHTML = ""; //zero out 
        const img = document.createElement("img");
        img.src = "images/" + this.picture;
        section.append(img);
      }
    }

    const children = [];
    children.push(new Child("Alfred", "Smith", "amy.jpg", 2));
    children.push(new Child("Bobby", "White", "bobby.png", 3));
    children.push(new Child("Collin", "Carrelson", "carl.png", 1));
    children.push(new Child("Dave", "Marks", "dave.jpg", 1));
    children.push(new Child("Erin", "Young", "erin.jpg", 1));
    
    //for loop each child
    //for every child table append 
    children.forEach((child) => {
      document.getElementById("children-table").append(child.tableRow);
      //fill out each row, now for every guy

});
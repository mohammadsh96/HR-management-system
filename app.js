`use strict`;
let secEl = document.getElementById("secEl");
let fname = document.getElementById("fname");
let eventEl = document.getElementById ("formID");
let image =document.getElementById("img");
allEmployees =[];

 eventEl.addEventListener("submit" , handelsubmit ) ;
 function handelsubmit(event){
event.preventDefault();

console.log(event.target.fname.value)
console.log(event.target.Department.value)
console.log(event.target.level.value)
console.log(event.target.img.value)
let newE = new Employee(this.employeeId, this.FullName, this.department, this.level, this.image, this.salary);

  newE.render();
 }
 function Employee(id, name, department, level, image, salary) {
    this.employeeId = id;
    this.fullName = name;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = salary;
    allEmployees.push(this);
  }
  let ghazi = new Employee (1000 ,	"Ghazi Samer" ,	 "Administration",	"senior" ,   "../assests/Ghazi.jpg"   );
  console.table(ghazi) ;
  
  let lana = new Employee  (1001,	   "Lana ali" ,     	"Finance",	"senior" ,   "../assests/Lana.jpg"   );
  console.table(lana) ; 
  
  let tamara = new Employee (1002 ,	"Tamara Ayoub" ,	 "Marketing", 	"senior" ,     "../assests/Tamara.jpg"  );
  console.table(tamara) ; 
 
  let safi = new Employee (1003 ,	"Safi Walid" ,	"Administration",	"mid-senior" , "../assests/Safi.jpg"   );
  console.table(safi) ;
 
  let omar = new Employee (1004 ,	"Omar Zaid" ,  	"Development",  	"senior" , "../assests/Omar.jpg"   );
  console.table(omar) ; 
 
  let rana = new Employee (1005 ,	"Rana Saleh" ,	    "Development",	   "jonior" , "../assests/Tamara.jpg"  );
  console.table(rana) ;
 
  let hadi = new Employee (1006 ,	"Hadi Ahmad" ,	      "Finance",	"mid-senior" , "../assests/Omar.jpg" );
  console.table(hadi) ;

  function getRndIntger(min, max) {
    return Math.floor(Math.random() *(max - min +1 )) + min;
  };
  Employee.prototype.netsalary= function (){
 
    if (this.salary === "senior") {
      this.salary = getRndIntger(1500 , 2000) ;
      this.salary = this.salary * (0.925 ) ;
      document.write ( `<p> employee name : ${this.fullName} & net salary = ${this.salary} </p>`);
      
      }
     
 
       if (this.Level === "mid-senior"){
     this.salary = getRndIntger(1000 , 1500) ;
     this.salary = this.salary *(0.925) ;
     document.write (`<p> employee name  ${this.fullName} & net salary = ${this.salary} </p>`);
      }
      if (this.Level === "jonior"){
     this.salary = getRndIntger(500 , 1000) ;
     this.salary = this.salary *(0.925) ; 
     document.write (`<p> employee name  ${this.fullName} & net salary = ${this.salary} </p>`);
     }
   }
   ghazi.netsalary();
lana.netsalary();
tamara.netsalary();
safi.netsalary();
omar.netsalary();
rana.netsalary();
hadi.netsalary();
 
  Employee.prototype.render = function () {
  let card = document.createElement('div');
  secEl.appendChild(card);
  
  let image = document.createElement('img');
  image.src = this.image;
  card.appendChild(image);
  let name = document.createElement('h5');
  name.textContent = this.FullName;
  card.appendChild(name);
  let par = document.createElement('p');
  par.textContent = `ID: ${this.employeeId} \n - Department: ${this.department} \n - Level: ${this.level} \n - salary: ${this.salary} JD`;
  card.appendChild(par);
}


ghazi.render();
lana.render(); 
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();

const jsonArr = JSON.stringify(allEmployees);

// save to localStorage
localStorage.setItem("array", jsonArr);

// get the string
// from localStorage
const str = localStorage.getItem("array");

// convert string to valid object
const parsedArr = JSON.parse(str);

console.log(parsedArr);


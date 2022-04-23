`use strict`;
let secEL = document.getElementById("secEl");


function Employee (EmployeeID ,FullName ,Department,Level , imgurl , salary ){

    this.EmployeeID =EmployeeID ;
    this.FullName =FullName ;
    this.Department = Department ;
    this.Level = Level ; 
    this.imgurl =imgurl;
     this.salary = 0 ;
    }
    function getRndIntger(min, max) {
      return Math.floor(Math.random() *(max - min + 1)) + min;
    }
    Employee.prototype.salary= function (){
     
       if (this.Level === "senior") {
         this.salary = getRndIntger(1500 , 2000) ;
         this.salary = this.salary * 0.925 ;
         }
    
    
          if (this.Level === "mid-senior"){
        this.salary = getRndIntger(1000 , 1500) ;
        this.salary = this.salary *(0.925) ;
        
         }
         if (this.Level === "jonior"){
        this.salary = getRndIntger(500 , 1000) ;
        this.salary = this.salary *(0.925) ;  
        }
        
    
    
     
     
     let ghazi = new Employee (1000 ,	"Ghazi Samer" ,	 "Administration",	"Senior" ,   "imgurl"  );
     console.table(ghazi) ;
     
     let lana = new Employee  (1001,	   "Lana ali" ,     	"Finance",	"Senior" ,   "imgurl"  );
     console.table(lana) ; 
    
     let tamara = new Employee (1002 ,	"Tamara Ayoub" ,	 "Marketing", 	"Senior" ,     "imgurl"  );
     console.table(tamara) ; 
    
     let safi = new Employee (1003 ,	"Safi Walid" ,	"Administration",	"mid-senior" , "imgurl"   );
     console.table(safi) ; 
    
     let omar = new Employee (1004 ,	"Omar Zaid" ,  	"Development",  	"Senior" , "imgurl"   );
     console.table(omar) ; 
    
     let rana = new Employee (1005 ,	"Rana Saleh" ,	    "Development",	   "jonior" , "imgurl"  );
     console.table(rana) ; 
    
     let hadi = new Employee (1006 ,	"Hadi Ahmad" ,	      "Finance",	"mid-senior" , "imgurl"  );
     console.table(hadi) ; 
    

  
    }

    

//     const val = Math.floor(1000 + Math.random() * 9000);
// console.log(val);
// let eventEl = document.getElementById ("formID");
//  eventEl.addEventListener("submit" , handelsubmit ) ;
//  function handelsubmit(event){
// event.preventDefault();

// console.log(event);
// console.log(event.target.fname.value)
// console.log(event.target.Department.value)
// console.log(event.target.level.value)
// console.log(event.target.img.value)
//  }
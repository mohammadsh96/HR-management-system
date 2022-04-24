`use strict`;

let arrayData =[ ];

function Employee (EmployeeID ,FullName ,Department,Level , imgurl   ){

    this.EmployeeID =EmployeeID ;
    this.FullName =FullName ;
    this.Department = Department ;
    this.Level = Level ; 
     this.salary = 0 ;
     arrayData.push(this);
     
    }

    let ghazi = new Employee (1000 ,	"Ghazi Samer" ,	 "Administration",	"senior" ,   "imgurl"   );
    console.table(ghazi) ;
    
    let lana = new Employee  (1001,	   "Lana ali" ,     	"Finance",	"senior" ,   "imgurl"   );
    console.table(lana) ; 
    
    let tamara = new Employee (1002 ,	"Tamara Ayoub" ,	 "Marketing", 	"senior" ,     "imgurl"  );
    console.table(tamara) ; 
   
    let safi = new Employee (1003 ,	"Safi Walid" ,	"Administration",	"mid-senior" , "imgurl"   );
    console.table(safi) ;
   
    let omar = new Employee (1004 ,	"Omar Zaid" ,  	"Development",  	"senior" , "imgurl"   );
    console.table(omar) ; 
   
    let rana = new Employee (1005 ,	"Rana Saleh" ,	    "Development",	   "jonior" , "imgurl"  );
    console.table(rana) ;
   
    let hadi = new Employee (1006 ,	"Hadi Ahmad" ,	      "Finance",	"mid-senior" , "imgurl" );
    console.table(hadi) ; 




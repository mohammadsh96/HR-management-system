'use strict';
let allEmployees = [];
let tableEl = document.getElementById('tableId')
function Employee(id, name, department, level, image, salary) {
  this.employeeId = id;
  this.fullName = name;
  this.department = department;
  this.level = level;
  this.image = image;
  this.salary = salary;
  allEmployees.push(this);
  createTableData(department, Number.parseFloat(salary));
}
const tableData = {};
function createTableData(department, salary) {
  if (!tableData[department]) {
    tableData[department] = { employeeCount: 1, salaryTotal: salary, salaryAvg: salary };
  } else {
    let employeeCount = tableData[department].employeeCount;
    let salaryTotal = tableData[department].salaryTotal;
    tableData[department].employeeCount = employeeCount + 1;
    tableData[department].salaryTotal = salaryTotal + salary;
    tableData[department].salaryAvg = tableData[department].salaryTotal / (employeeCount + 1);

  }
}



Employee.prototype.tableRender = function () {
  let allEmployeesCounts = 0;
  let allEmployeesSalary = 0;
  for (const [department, values] of Object.entries(tableData)) {
    let trTd = document.createElement('tr');
    tableEl.appendChild(trTd);

    let depName = document.createElement('td');
    depName.textContent = department;
    trTd.appendChild(depName);

    let numberOfEmplouees = document.createElement('td');
    numberOfEmplouees.textContent = values.employeeCount;
    trTd.appendChild(numberOfEmplouees);

    let salaryAvg = document.createElement('td');
    salaryAvg.textContent = values.salaryTotal;
    trTd.appendChild(salaryAvg);

    let salaryTotal = document.createElement('td');
    salaryTotal.textContent = values.salaryAvg;
    trTd.appendChild(salaryTotal);

    allEmployeesCounts += values.employeeCount;
    allEmployeesSalary += values.salaryTotal;

  }

  let total = document.createElement('td');
  total.textContent = 'Total';
  total.classList = 'total';
  tableEl.appendChild(total);

  let salaryAllEmployees = document.createElement('td');
  salaryAllEmployees.textContent = allEmployeesCounts;
  salaryAllEmployees.classList = 'total';
  tableEl.appendChild(salaryAllEmployees);

  let salaryAllTotal = document.createElement('td');
  salaryAllTotal.textContent = allEmployeesSalary;
  salaryAllTotal.classList = 'total';
  tableEl.appendChild(salaryAllTotal);

  let salaryAllAvg = document.createElement('td');
  salaryAllAvg.textContent = allEmployeesSalary / allEmployeesCounts;
  salaryAllAvg.classList = 'total';
  tableEl.appendChild(salaryAllAvg);
};

let employee_1 = new Employee('1000', 'Ghazi Samer', 'Administration', 'Senior', "../assets/Ghazi.jpg", '1700');
let employee_2 = new Employee('1001', 'Lana Ali', 'Finance', 'Senior', '../assets/Lana.jpg', '1500');
let employee_3 = new Employee('1002', 'Tamara Ayoub', 'Marketing', 'Senior', '../assets/Tamara.jpg', '1900');
let employee_4 = new Employee('1003', 'Safi Walid', 'Administration', 'Mid-Senior', '../assets/Safi.jpg', '1300');
let employee_5 = new Employee('1004', 'Omar Zaid', 'Development', 'Senior', `../assets/Omar.jpg`, '2000');
let employee_6 = new Employee('1005', 'Rana Saleh', 'Development', 'Junior', '../assets/Rana.jpg', '700');
let employee_7 = new Employee('1006', 'Hadi Ahmad', 'Finance', 'Mid-Senior', '../assets/Hadi.jpg', '1400');


allEmployees[0].tableRender();

function getData() {
  let retrievedData = localStorage.getItem('employeeItem');
  let arrayData = JSON.parse(retrievedData);
  if (arrayData != null) {
    for (let i = 0; i < arrayData.length; i++) {
      new Employee(arrayData[i].id, arrayData[i].fullName, arrayData[i].department, arrayData[i].level, arrayData[i].image, arrayData[i].salary);
    }
  }
  allEmployees[0].tableRender();
}
getData();
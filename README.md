# HR-management-system


## local storage 
1. saving employee array of an object to local storage
 function savedata(data){

```javascript
     let stringFiyData = JSON.stringFiy(data);
localStorage.setItem("employee", stringFiyData);
 } 
```
2. getting the data from local storage 
```javascript
function getData (){

let arrayData =localStorage.getItem("employee")
let arrayData = JSON.parse(retrievedData);

}
```
3. rendering this data from local storage so ti is not lost when refresh 
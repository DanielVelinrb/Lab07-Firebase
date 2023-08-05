const axios = require("axios");

axios.get("URL")
.then(function (response){
    console.log(response);
})
.catch(function (error){
    console.log(error);
})
.finally(function (){});

document.addEventListener("DOMContentLoaded", readAllStudents);

function readAllStudents(){
    let tabla = document.getElementById("studentList");

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let newRow = tabla.insertRow();
        let id = newRow.insertCell();   
        let name = newRow.insertCell(); 
        let age = newRow.insertCell(); 
        let grade = newRow.insertCell();
        
        id="1";
        name="pan";
        age="123";
        grade="a";

    }
}

"use strict"


var input = document.querySelector('#day');
console.log("pppppp="+input);

var btn = document.querySelector('#btn');

var display_output = document.querySelector('#display');

var year = document.querySelector('#years');
var month = document.querySelector('#months');
var days = document.querySelector('#days');

display_output.style.display = 'none'

// var slice = input_value.split('-')  
// var input_year = slice[0]; 
// var input_month = slice[1];
// var input_day = slice[2];





btn.addEventListener('click',()=>{
    display_output.style.display = 'block';





    var input_value = input.value; 
    // console.log("inputbox="+input_value);
       
    var slice = input_value.split('-')  
    var input_year = slice[0]; 
    var input_month = slice[1];
    var input_day = slice[2];


    console.log("inputbox="+input_value);
    console.log("input_year="+input_year);

    console.log("input_month="+input_month);
    console.log("input_day="+input_day)





 var current_date = new Date();
console.log("current date="+current_date);

var current_year = new Date().getFullYear();
var current_month = new Date().getMonth()+1;
var current_day = new Date().getDate();


console.log("current_year="+current_year);
console.log("current_month="+current_month);
console.log("current_day="+current_day);

var calculate_year = current_year - input_year;

console.log("calculate-year="+calculate_year);

console.log("oooooooo");
if(current_month >= input_month){
    console.log("oooooooooooooooooooooooooooyyyyyyyyy");

    var calculate_month = current_month-input_month; 
}else{
    calculate_year--;
    calculate_month = 12+current_month-input_month;
}

console.log("calculate_month="+calculate_month);

if(current_day >= input_day){
    var calculate_days = current_day-input_day;
}else{
    calculate_month--;
    calculate_days=new Date(input_year,input_month,0).getDate()+current_day-input_day;
}


if(calculate_month<0){
   calculate_month=11;
   calculate_year--;
}
    year.innerHTML = calculate_year;
    month.innerHTML = calculate_month;
    days.innerHTML = calculate_days;
    
})



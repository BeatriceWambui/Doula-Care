
$(document).ready(function(){
//back end
var firstName ;
var lastName;
var age;
//create a person constructor
function Person(first,last,age){
  this.firstName=first,
  this.lastName=last,
  this.age=age,
}

//create a fullName prototype
Person.prototype.fullName=function (){
  this.firstName + this.lastName;
}

//form validation
});
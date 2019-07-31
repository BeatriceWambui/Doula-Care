
$(document).ready(function(){

//back end
var firstName ;
var lastName;
var age;
//create a person constructor
function Person(first,last,age){
  this.firstName=first,
  this.lastName=last,
  this.age=age;
}

//create a fullName prototype
Person.prototype.fullName=function (){
   return this.firstName +" "+ this.lastName;
}
//create a month of pregnancy constructor
function MonthOfP(currentM, inputtedM){
  this.currentMonth=currentM,
  this.inputtedMonth=inputtedM;
}
//month of pregnancy prototype
MonthOfP.prototype.getMonthOfPregnancy=function(){
  return this.currentMonth - this.inputtedMonth;
}




 
// form validation
$("form#form1").submit(function(event){
    var inputtedFirstName = $("input#firstName").val();
    var inputtedLastName =$("input#lastName").val();
    var inputtedEmail =$("input#email").val();
    var inputtedDate=$("input#date").val();
    var inputtedAge = $("input#age").val();
    function validate(){
        if((inputtedFirstName || inputtedLastName) ===""){
            alert("please enter correct data on first and last name");
        }else if(inputtedAge <13){
            alert("Your age is below minimum [13]")
        }else if (inputtedAge >55) {
            alert("your age is above maximim [55]")
        }else if (inputtedEmail ===""){
            alert("please input your email")
        }else{
         return false;
        }
       
    }
    validate();
//create an object for the user and get user,s full name
var newUser=new Person(inputtedFirstName,inputtedLastName,inputtedAge);
var userFullName=newUser.fullName();
console.log(userFullName);


    
    event.preventDefault(); 
});

});
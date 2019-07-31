
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
   return this.firstName + this.lastName;
}
//create a month of pregnancy constructor
function MonthOfP(currentM, inputtedM){
  this.currentMonth=currentM,
  this.inputtedMonth=inputtedM;
}

// backend
 
// form validation
var inputtedFirstName;
var inputtedLastName;
var inputtedEmail;
var inputtedDate;
var inputtedAge;
$("form#form1").submit(function(event){
     inputtedFirstName = $("input#firstName").val();
     inputtedLastName =$("input#lastName").val();
     inputtedEmail =$("input#email").val();
     inputtedDate=$("input#date").val();
     inputtedAge = $("input#age").val();
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
    
    event.preventDefault(); 
});

  var inputtedWeight;
  var inputtedHeight;
  
    $("form#form2").submit(function(event){
        inputtedWeight = parseInt($("input#weight").val());
        inputtedHeight = parseFloat($("input#height").val());
             function calculateBmi(){
                return(inputtedWeight/(inputtedHeight*inputtedHeight));                 
             }
            // alert(calculateBmi());
              function results(){
                if(calculateBmi() <19){
                    $("ul#userDsetails2").append("<li> " + "Your bmi is " + calculateBmi() +". " + "we need to work on your weight you are below minimum [58kgs]<li>")
                }else if(calculateBmi() >26){
                    $("ul#userDsetails2").append("<li>" + "Your bmi is " + calculateBmi() +". " + "We need to work on your weight. You are above maximum [90kgs] <li>")
                }else{
                    $("ul#userDsetails2").append("<li>" + "Your bmi is " + calculateBmi() +". " + "your have a well balanced weight<li>");
                }
                    
                }
                    results();
                    event.preventDefault();

});
});

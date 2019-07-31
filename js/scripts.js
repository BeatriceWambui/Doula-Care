
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
var inputtedFirstName;
var inputtedLastName;
var inputtedEmail;
var inputtedDate;
var inputtedAge;
$("form#form1").submit(function(event){
    var inputtedFirstName = $("input#firstName").val();
    var inputtedLastName =$("input#lastName").val();
    var inputtedEmail =$("input#email").val();
    var inputtedDate=new Date($("input#date").val());
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


var inputtedMonth= inputtedDate.getMonth()+1;
 var currentDate= new Date();
 var currentMonth= currentDate.getMonth()+1;
  var newMonthOfP= new MonthOfP(currentMonth,inputtedMonth);
  var pregnancyPeriod=newMonthOfP.getMonthOfPregnancy();
//  console.log(currentMonth);
 console.log( "Congratulations "+ userFullName + "You are  " + pregnancyPeriod + " months pregnant");
 function getSemester(){
  $("ul#userDetails").append("<li><span class='userInfo'>" + " Congratulations "+ userFullName + "You are  " + pregnancyPeriod + " months pregnant" + " </span></li>");
  if(pregnancyPeriod<4){
    $("ul#userDetails").append("<li><span class='userInfo'>" +"You are on the  first Trimester " + " </span></li>");
    $(".firstTriCol").show();
  }else if(pregnancyPeriod<6 && pregnancyPeriod >4){
    $("ul#userDetails").append("<li><span class='userInfo'>" +"You are on the  second Trimester " + " </span></li>");
    $(".secondTriCol").show();
  }else if(pregnancyPeriod >6 && pregnancyPeriod <9){
    $("ul#userDetails").append("<li><span class='userInfo'>" +"You are on the  third= Trimester " + " </span></li>");
    $(".thirdTriCol").show();
  } else {
    $("ul#userDetails").append("<li><span class='userInfo'>" +"If you've recoverd after delivary, you are good to go " + " </span></li>");
  }
 } 
    getSemester();

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
              calculateBmi();
              function results(){
                if(calculateBmi() <19){

                    alert("Your BMI is " + calculateBmi() +". " + "We need to work on your weight you are below minimum [58kgs]")
                }else if(calculateBmi() >26){
                    alert("Your BMI is " + calculateBmi() +". " + "We need to work on your weight. You are above maximum [90kgs]")
                }else{
                    alert("Your BMI is " + calculateBmi() +". " + "Your have a well balanced weight");
                };
                    //userDetails
                };
                    results();
                    event.preventDefault();

});
// first trimester
            $("#first").click(function(){
                $("#first").hide();
                $(".firsTri").show();
            });
            $(".firsTri").click(function(){
                $("#first").show(); 
                $(".firsTri").hide();
               
            });
//second trimester
            $("#second").click(function(){
                $("#second").hide();
                $(". secondTri").show();
            });
            $(".secondRow").click(function(){
                $("#second").show();
                $(".secondRow").hide();
                
            });
//third trimester
            $("#third").click(function(){
                $("#third").hide();
                $(".thirdTri").show();
            });
            $(".thirdTri").click(function(){
                $("#third").show();
                $(".thirdTri").hide();
                
            });
// fourth trimester
            $("#fourth").click(function(){
                $("#fourth").hide();
                $(".fourthTri").show();
            });
            $(".fourthTri").click(function(){
                $(".fourthTri").hide();
                $("#fourth").show();
            });
        
});


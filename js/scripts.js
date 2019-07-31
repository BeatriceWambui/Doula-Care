
$(document).ready(function(){
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
  
    $("form#form2").submit(function(){
        inputtedWeight = $("input#weight");
        inputtedHeight = $("input#height");
             function calculateBmi(){
                return(inputtedWeight/(inputtedWeight*inputtedHeight));
                 
             }
             calculateBmi();
              function results(){
                if(calculateBmi() <58){
                    alert("we need to work on your weight you are below minimum [58kgs]")
                }else if(){}
                    bmiCalculator();
            }
})

});

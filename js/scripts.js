
$(document).ready(function(){
// backend
 
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
    
    event.preventDefault(); 
});

});
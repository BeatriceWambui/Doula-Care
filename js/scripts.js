
$(document).ready(function(){
// backend

// form validation
$("form#form").submit(function(event){
    var inputtedFirstName = $("input#firstName").text();
    var inputtedLastName =$("input#lastName")
    var inputtedDate=$("input#date").val();
    var inputtedAge = $("input#age").val();
    function validate(){
        if($(inputtedFirstName) ==="") {
            alert("Please enter your name")
        }else if($(inputtedLastName)===""){
            alert("please enter your last name")
        }else if($(inputtedAge ) <13){
            alert("your aage is below minimum")
        }else if($(inputtedAge)>50){
            alert("your age is above maximum")
        }else if($(inputtedDate)===""){
            alert("please enter a valid date")
        }else{
            alert("your have inputted correct data")
        }
    }
    console.log(date)
    console.log(name);
    console.log(age);

    event.preventdefault(); 
});

});
/////data

var dataRegex=/^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}$/
var my ="24-01/1996"

console.log(dataRegex.test(my))

///email


var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
var email ="mkrtchyangurgen8@mail.com"

console.log(regexEmail.test(email))



///telephone
 var phoneRegex =/^\+(?:\d{1,3}|\d-\d{3}|\d{2}-\d{4})(?:\s?)\d{5,14}$/
 var myPhone ="+37498867865"


 console.log(phoneRegex.test(myPhone))

 

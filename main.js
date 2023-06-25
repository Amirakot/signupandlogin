//select all input
let fname = document.querySelector(".fname");
let error=document.querySelector(".error");
console.log(fname)
let lname=document.querySelector('.lname');
let email=document.querySelector('.email');
let password=document.querySelector('.password');
let repassword=document.querySelector('.repassword');
let button=document.querySelector('button');
let male = document.querySelector("#male");
let female = document.querySelector("#female");
let $message="";
let error_repass = document.querySelector(".error-repass");
let error_pass = document.querySelector(".error-pass");
let error_email = document.querySelector(".error-email");
let error_lname = document.querySelector(".error-lname");
let error_fname = document.querySelector(".error-fname");
let object=new Object();
let isvalid=true;

// console.log(button)
button.addEventListener("click",function(e){
    e.preventDefault()
if(fname.value==""){
  isvalid=false;
 $message = "filed is required";

error_fname.textContent = $message;

}
let stringg
if(/[0-9]/.test( fname.value)){
  isvalid = false;
  $message = "this filed shoudnt have number";  error_fname.textContent = $message;
}
if (lname.value == "") {
    isvalid = false;
   $message = "filed is required";

    error_lname.textContent = $message;
}
if (/[0-9]/.test( lname.value)) {
    isvalid = false;
   $message = "this filed shoudnt have number";
    error_lname.textContent = $message;
}
if (email.value == "") {
    isvalid = false;
   $message = "filed is required";

   error_email.textContent = $message;
  
}
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 if(!(email.value.match(validRegex))){
    isvalid = false; 
  $message = "invalid email address";

  error_email.textContent = $message;

}

if (password.value == "") {
  isvalid = false;
  $message = "filed is required";

error_pass.textContent = $message;
}
                var strongRegex = new RegExp(
                  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
                );
if (!(strongRegex.test(password.value))){
    isvalid = false; 
  $message =
      "password must be at least one uppercase letter,lowercase letter,digit,special character with no spaces and minimum  8 length";

   error_pass.textContent = $message;

}
  if (repassword.value == "") {
      isvalid = false;
    $message = "filed is required";
    error_repass.textContent = $message;
  }
  if(repassword.value!=password.value){
      isvalid = false; 
    $message = "confirm passsword dosent matach";

       error_repass.textContent= $message;
  }
  object.fname=fname.value;
   object.lname = lname.value;
    object.email = email.value;
 object.pass = password.value;
  object.repassword = repassword.value;
   object.male = male.value;
    object.female = female.value;
    console.log(object)
    if(isvalid){
    if(!(localStorage.getItem("data"))){
      localStorage.setItem("data",JSON.stringify(object))
    }
  }
  })

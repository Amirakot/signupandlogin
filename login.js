let data=JSON.parse(localStorage.getItem("data"));
let user = data.fname +" "+ data.lname;
console.log(user)
let h2=document.querySelector("h2");
let username = document.querySelector(".user");
let password = document.querySelector(".password");
let button=document.querySelector("button")


console.log(username.value.trim().toLowerCase());
button.addEventListener("click",function(e){
    e.preventDefault()

if (
  user == username.value &&
  password.value == data.pass
) {
   location.href = "welcome.html";
 
  console.log("welcome");  
}
})
  



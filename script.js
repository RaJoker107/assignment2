document.addEventListener("DOMContentLoaded",function(){
const registrationForm=document.getElementById("registrationform");
registrationForm.addEventListener("submit",function(event){
    add.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user={
         name : name,
        email: email,
        password: password
    };
    let users =JSON.parse(localStorage.getItem("user"))||[];
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    window.location.herf="datalist.html";
});
});

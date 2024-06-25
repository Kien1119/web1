const loginform = document.getElementById("login-form");
const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
const loginError = document.getElementById("loginError");

loginform.addEventListener("submit",function(e){
    e.preventDefault();
    const username = loginUsername.value;
    const password = loginPassword.value;
    
    const userData = JSON.parse(localStorage.getItem(username,password));

    
    if(!userData || userData.password !== password){

        loginError.textContent = "Sai tên đăng nhập hoặc mật khẩu";
    }else{
        alert("Đăng nhập thành công")
        window.location.href = "Home.html"; 
    }
});
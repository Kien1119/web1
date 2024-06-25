
const registerForm = document.getElementById("Register-form")
const registerFullname = document.getElementById("register-fullname")
const registerUsername = document.getElementById("register-username")
const registerEmail = document.getElementById("register-email")
const registerPhone  = document.getElementById("register-number")
const registerGender = document.getElementById("register-gender")
const registerPassword = document.getElementById("register-password")
const registerComfirmPassword = document.getElementById("register-respassword")
const registerError = document.getElementById("registerError");

registerForm.addEventListener('submit',function(e){
    e.preventDefault();
    const fullname = registerFullname.value;
    const username = registerUsername.value;
    const email = registerEmail.value;
    const phone = registerPhone.value;
    const gender = registerGender;
    const password = registerPassword.value;
    const comfirmpassword = registerComfirmPassword.value;

    if(username.trim() === "" || fullname.trim() === "" || email.trim() === "@gmail.com" || phone.trim() === "" || password.trim() === "" || comfirmpassword.trim() === "" || gender === "" ){
        registerError.textContent = "Vui lòng điền đầy đủ thông tin ";
    }else if(password.length <6 ){
        registerError.textContent = "Mật khẩu phải ít nhất 6 kí tự";
        return false;
    }else if(password !== comfirmpassword){
        registerError.textContent = "Mật khẩu và nhập lại mật khẩu không trùng khớp"
    }else{
        registerError.textContent = "Bạn đăng ký thành công"
        registerForm.reset();
        const userData = {
            fullname,
            username,
            email,
            phone,
            gender,
            password,
            comfirmpassword
        };
        localStorage.setItem(username,JSON.stringify(userData));
        registerForm.reset()
        alert('Bạn đăng ký thành công!')
        window.location.href = "Login.html"
    }
});
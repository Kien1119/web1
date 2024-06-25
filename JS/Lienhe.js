const contactForm = document.getElementById('contactForm')

contactForm.addEventListener('submit',function(event){
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if(fullName.trim() === ''|| email.trim() === '' || message.trim() ===''){
        alert('Vui lòng điền đầy đủ vào các trường')
    }else{
        alert('Biểu thị đã được gửi !!!');
        window.location.href = 'Home.html'
        contactForm.reset();
        
    }
 })
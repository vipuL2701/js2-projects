///////////*********captcha genrate code */
var captcha;
 function generate() {
    
    var unique = "";
    document.getElementById("result").value = "";
 
    captcha = document.getElementById("image");
    const randomchar ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    for (let i = 1; i < 5; i++) {
        unique += randomchar.charAt(
            Math.random() * randomchar.length)
    }
    captcha.innerHTML = unique;
 }


//////////////////////////////////////////////////////////////////////////

const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value
    const city = document.getElementById('city').value
    const number = document.getElementById('number').value
    const email = document.getElementById('email').value
    const captchaInput = document.getElementById('submit').value
    const result = document.getElementById('result')
    //console.table(name,city,number,email);
    //console.log(captchaInput);

    if (name=== "" || city=== "" || number=== "" || email=== ""){
        result.innerHTML = `please enter the correct value`; 
    }else if(captchaInput=== ""){
        result.innerHTML = `captcha not matched`;
    }
    else if(captchaInput === captcha.innerHTML){
        result.innerHTML = `your form is "submitted successfully"<br/>  
                            Name:- ${name} <br/>
                            City:- ${city} <br/>
                            contact number:- ${number} <br/>
                            e-mail id:- ${email} `;
 
    }else {
        result.innerHTML = `captacha not matched`;
    }
  
})

////////////// regenrate captcha

const cap = document.getElementById('reg')

cap.addEventListener('click', generate);
     



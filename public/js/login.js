window.addEventListener('load',()=> {
    let form = document.querySelector('#loginForm')
    let email = document.querySelector('#email')
    let emailError = document.querySelector('#emailError')
    let password = document.querySelector('#password')
    let passwordError = document.querySelector('#passwordError')
    let login = document.querySelector('#login')

    let errorCorreo;
    email.addEventListener('blur'|| 'input',function validarEmail(event){
        campo = event.target;
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(emailRegex.test(campo.value))
        {emailError.innerText = ''
        errorCorreo=false
        emailError.classList.remove('feedback')
        email.classList.remove('errorBox');
        }else{
            emailError.innerText =  "La dirección de email es incorrecta.";
            errorCorreo=true;
            emailError.classList.add('feedback')
            email.classList.add('errorBox');
        }
      })

    login.addEventListener('click',function(event){
        event.preventDefault()

        let errores= {}
        let isempty =(box,name,msg)=>{
            if (box.value==0 || box.value=="" || box.value==null || box.value==undefined){
            return errores[name] = msg
            }
        }

        let setValidationError=(divError,inputV,name)=>{
            divError.innerHTML = errores[name] ? errores[name] :'';
            if(errores[name]){
                divError.classList.add('feedback')
                inputV.classList.add('errorBox');
            }else{
                inputV.classList.remove('errorBox');
                divError.classList.remove('feedback')
            }
        }
        let minLength =(inputBox,nameBox,sizemin)=>{ 
            if(inputBox.value.length < sizemin) {
                 errores[nameBox] = 'Este campo debe tener min '+ sizemin +' caracteres'
            }
        }
        errorCorreo ? errores["email"] = "La dirección de email es incorrecta.":''

        isempty(email,"email","Correo es un campo requerido*")
        minLength(password,"password",8)
        if (Object.keys(errores).length >= 1) {
            setValidationError(emailError,email,"email")
            setValidationError(passwordError,password,"password")
        } else{
            form.submit()
        } 
        console.log(errores)
    })
})
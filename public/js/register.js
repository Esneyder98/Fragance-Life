window.addEventListener('load',()=> {
    let form = document.querySelector('#formRegister')
    let documento = document.querySelector('#document') 
    let documentoError = document.querySelector('#documentError') 
    let nombre = document.querySelector('#nombre')  
    let nombreError = document.querySelector('#nombreError') 
    let apellido = document.querySelector('#apellido')  
    let apellidoError = document.querySelector('#apellidoError')
    let email = document.querySelector('#email')
    let emailError = document.querySelector('#emailError')
    let password = document.querySelector('#password')
    let passwordError = document.querySelector('#passwordError')
    let confirmpassword = document.querySelector('#confirmpassword')
    let confirmpasswordError = document.querySelector('#confirmpasswordError')
    let category = document.querySelector('#category')
    let categoryError = document.querySelector('#categoryError')
    let avatar = document.querySelector('#avatar')
    let avatarError = document.querySelector('#avatarError')
    let button = document.querySelector('#register')
    function soloNumeros(e){
        let key = window.event ? e.which : e.keyCode;
        if ((key < 48 || key > 57 )) {
            if(!(key == 8 || key == 37 || key == 39 || key == 190)){
                e.preventDefault()
                return false
            }
            else{
                return true;
            }
        }
    }
    documento.addEventListener('keydown',soloNumeros, false)
    
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
    let matchesEmail;
    confirmpassword.addEventListener('blur'|| 'input',function(event){
        if(password.value === confirmpassword.value) 
        { matchesEmail = false}
        else {
            matchesEmail = true;
            confirmpasswordError.innerText =  "Las contraseñas no coinciden";
            confirmpasswordError.classList.add('feedback')
        }
    })
    button.addEventListener('click',function(event){
        event.preventDefault()
        let errores= {}
        let isempty =(box,name,msg)=>{
            if (box.value==0 || box.value=="" || box.value==null || box.value==undefined){
            return errores[name] = msg
            }
        }
      
        let setValidationError=(divError,inputV,name)=>{
            divError.innerHTML = errores[name] ? errores[name] :''
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
        matchesEmail ? errores ["confirmpassword"]= "Las contraseñas no coinciden":''
        
           isempty(documento,"documento","Se debe ingresar un documento")
           minLength(nombre,"nombre",2)
           minLength(apellido,"apellido",2)
           isempty(email,"email","Correo es un campo requerido*")
           minLength(password,"password",8)
           minLength(confirmpassword,"confirmpassword",8)
           isempty(category,"category","Se debe seleccionar una categoria")
           isempty(avatar,"avatar","Se debe seleccionar un avatar")
           
        
        
        if (Object.keys(errores).length >= 1) {
            setValidationError(documentoError,documento,"documento")
            setValidationError(nombreError,nombre,"nombre")
            setValidationError(apellidoError,apellido,"apellido")
            setValidationError(emailError,email,"email")
            setValidationError(passwordError,password,"password")
            setValidationError(confirmpasswordError,confirmpassword,"confirmpassword")
            setValidationError(categoryError,category,"category")
            setValidationError(avatarError,avatar,"avatar")
    
        } else{
            form.submit()
        } 
        console.log(errores)
    })
})
window.addEventListener('load',()=> {
    let form = document.querySelector('#editarProducto')
    let nombreProducto = document.querySelector('#nombreProducto')
    let nameError = document.querySelector('#nameError')
    let precioProducto = document.querySelector('#precioProducto')
    let precioError = document.querySelector('#precioError')
    let marca = document.querySelector('#marca')
    let marcaError = document.querySelector('#marcaError')
    let familiaAroma = document.querySelector('#familiaAroma')
    let familiaAromaError = document.querySelector('#familiaAromaError')
    // let gender = document.querySelector('#gender')
    // let genderError = document.querySelector('#genderError')
    let discount = document.querySelector('#discount')
    let discountError = document.querySelector('#discountError')
    // let cant_avaible = document.querySelector('#cant_avaible')
    // let cant_avaibleError = document.querySelector('#cant_avaibleError')
    let imagenProducto = document.querySelector('#imagenProducto')
    let imagenError = document.querySelector('#imagenError')
    let descripcion = document.querySelector('#descripcion')
    let descripcionError = document.querySelector('#descripcionError')
    let button = document.querySelector('#buttonEditar')

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
    precioProducto.addEventListener('keydown',soloNumeros, false)
    discount.addEventListener('keydown',soloNumeros, false)
    //cant_avaible.addEventListener('keydown',soloNumeros, false)
    function ValidationDiscount(){
        discount.addEventListener('blur',()=>{
        if(discount.value >= 0 && discount.value <= 100){
            discount.classList.remove('errorBox');
            discountError.innerHTML = ""
        }else{
            discountError.innerHTML = "Se debe seleccionar un descuento de 0 a 100"
            discountError.classList.add('feedback')
            discount.classList.add('errorBox');
        }
        
    })
    }

    ValidationDiscount()
    button.addEventListener('click',function(event){
        event.preventDefault()
        let errores= {}
        
        let isempty =(box,name,msg)=>{
            if (box.value==0 || box.value=="" || box.value==null || box.value==undefined){
            return errores[name] = msg
            }
        }
    
        let isemptyDiscount =(box,name,msg)=>{
            if ( box.value=="" || box.value==null || box.value==undefined){
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
            }
            
        }
        let minLength =(inputBox,nameBox,sizemin)=>{ 
            if(inputBox.value.length < sizemin) {
                errores[nameBox] = 'Este campo debe tener min '+ sizemin +' caracteres'
            }
        }
    
        minLength(nombreProducto,"nombreProducto",5)
        isempty(precioProducto,"precioProducto","Se debe seleccionar un precio valido")
        isempty(marca,"marca","Se debe seleccionar una marca")
        isempty(familiaAroma,"familiaAroma","Se debe seleccionar una familia aromatica")
        // isempty(gender,"gender","Se debe seleccionar una categoria")
        isemptyDiscount(discount,"discount","Se debe ingresar un descuento de 0 a 100")
        //isempty(cant_avaible,"cant_avaible","Se debe ingresar una cantidad valida")
        isempty(imagenProducto,"imagenProducto","Debe seleccionar una imagen .jpg, .png, .jpeg , .gif")
        minLength(descripcion,"descripcion",20)
        
        if (Object.keys(errores).length >= 1) {
            setValidationError(nameError,nombreProducto,"nombreProducto")
            setValidationError(precioError,precioProducto,"precioProducto")
            setValidationError(marcaError,marca,"marca")
            setValidationError(familiaAromaError,familiaAroma,"familiaAroma")
            // setValidationError(genderError,gender,"gender")
            setValidationError(discountError,discount,"discount")
            //setValidationError(cant_avaibleError,cant_avaible,"cant_avaible")
            setValidationError(imagenError,imagenProducto,"imagenProducto")
            setValidationError(descripcionError,descripcion,"descripcion")


        } else{
            form.submit()
        } 
        console.log(errores)
    })
    })
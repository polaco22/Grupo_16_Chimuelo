//const { validator } = require("sequelize/types/lib/utils/validator-extras");

window.addEventListener('load', function () {
    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');


    const validaciones = {
        fullName: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // solo letras con espacios y acentos.
        userName:/^[a-zA-Z0-9\_\-]{2,16}$/,
        dni: /^[0-9]{8}$/,        //valida solo 8 numeros
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        domicilio: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // solo letras con espacios y acentos.
        provincia: /^['Buenos Aires','Catamarca','Chaco','Chubut','CABA','Córdoba','Corrientes','Entre Rios','Formosa','Jujuy','La Pampa','La Rioja','Mendoza','Misiones','Neuquen','Rio Negro','Salta','San Juan','San Luis','Santa Cruz','Santiago del Estero','Tierra del Fuego','Tucuman']$/, 
        //ciudad: {}, 
        password: /^.{8,12}$/ ,// 8 a 12 digitos.
        confirmarContraseña: /^.{8,12}$/, // 8 a 12 digitos.
       // avatar: /^[.jpg,.png,.gif]$/	// no estoy segura
        
    }
    const campos = {
        fullName: false,
        userName: false,
        dni: false,
        email: false,
        domicilio: false,
        provincia: false,
        //ciudad: false, 
        password: false,
        confirmarContraseña: false  
        //avatar: false
    }    


    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "fullName":
                validarCampo(validaciones.fullName, e.target, 'fullName');
            break;
            case "userName":
                validarCampo(validaciones.userName, e.target, 'userName');
            break;
            case "dni":
                validarCampo(validaciones.dni, e.target, 'dni');
            break; 
            case "email":
                validarCampo(validaciones.email, e.target, 'email');
            break;
            case "domicilio":
                validarCampo(validaciones.domicilio, e.target, 'domicilio');
            break;
            case "provincia":
                validarCampo(validaciones.provincia, e.target, 'provincia');
            break;
            /*case "ciudad":
                validarCampo(validaciones.ciudad, e.target, 'ciudad');
            break;   */       
            case "password":
                validarCampo(validaciones.password, e.target, 'password');
                validarconfirmarContraseña();
            break;
            case "confirmarContraseña":
                validarconfirmarContraseña();
            break; 
            /*           
            case "avatar":
                validarCampo(validaciones.avatar, e.target, 'avatar');
            break;   */
        }
    }
    const validarCampo = (validacion, input, campo) => {
        if(validacion.test(input.value)){
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
        } else {
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos[campo] = false;
        }
    };

    
const validarconfirmarContraseña = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('confirmarContraseña');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__confirmarContraseña`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__confirmarContraseña`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__confirmarContraseña i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__confirmarContraseña i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__confirmarContraseña .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__confirmarContraseña`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__confirmarContraseña`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__confirmarContraseña i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__confirmarContraseña i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__confirmarContraseña .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    formulario.addEventListener('submit', (e) => {
        
        const terminos = document.getElementById('terminos'); // para el check de terminos y condiciones//&& campos.provincia   // 
        if(campos.fullName && campos.userName && campos.dni && campos.email && campos.domicilio && campos.password && terminos.checked ){
            //formulario.reset();

            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000); // tiempo de espera

            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario__grupo-correcto');
            });
        } else {
            e.preventDefault();
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        }
    });
});

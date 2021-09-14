//const { validator } = require("sequelize/types/lib/utils/validator-extras");

window.addEventListener('load', function () {
    const formulario = document.getElementById('register-form');
    const inputs = document.querySelectorAll('#register-form input');

    const validaciones = {
        nombreApellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // solo letras con espacios y acentos.
        usuario:/^[a-zA-Z0-9\_\-]{5,16}$/,
        dni: /^.{8}$/,        
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        domicilio: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // solo letras con espacios y acentos.
        password: /^.{8,12}$/ ,// 8 a 12 digitos.
        confirmarPassword: /^.{8,12}$/, // 8 a 12 digitos.
        avatar: /^[.jpg,.png,.gif]$/	
    }

    const campos = {
        nombreApellido: false,
        usuario: false,
        dni: false,
        correo: false,
        domicilio: false,
        password: false,
        confirmarPassword: false,  
        avatar: false
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "correo":
                validarCampo(validaciones.correo, e.target, 'correo');
            break;
            case "password":
                validarCampo(validaciones.password, e.target, 'password');
            break;            
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

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const terminos = document.getElementById('terminos');
        if(campos.correo && campos.password && terminos.checked ){
            formulario.reset();

            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000);

            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario__grupo-correcto');
            });
        } else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        }
    });
});

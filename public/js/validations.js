//const { validator } = require("sequelize/types/lib/utils/validator-extras");

window.addEventListener('load', function () {
    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');

    const validaciones = {
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{8,12}$/ // 8 a 12 digitos.	
    }

    const campos = {
        correo: false,
        password: false
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
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle'); //agrego icono /
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle'); //saco icono x
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos[campo] = false;
        }
    };

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario); // tecla presionada 
        input.addEventListener('blur', validarFormulario); // tecla suelta
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const recordarme = document.getElementById('terminos');
        if(campos.correo && campos.password && recordarme.checked ){
            formulario.reset();

            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo'); 
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000); // tiempo de reseto de formulario

            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario__grupo-correcto');
            });
        } else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        }
    });
});

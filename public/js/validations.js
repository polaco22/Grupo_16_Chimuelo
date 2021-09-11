const { validator } = require("sequelize/types/lib/utils/validator-extras");

window.addEventListener('load', function () {

    const formulario = document.getElementById("register-form");
    const inputs = document.querySelectorAll('#register-form input');

    const validarFormulario = (e) => {
        switch(e.target.email) {
            case "email": 
                console.log('Funciona');
            break;
        };
    };

    inputs.forEach ((input) =>  {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    formulario.addEventListener('submit', function (e) {
		e.preventDefault();      

    });
});


window.addEventListener('load', function () {
    
    let formulario = document.querySelector("form");
    formulario.addEventListener('submit', function (e) {
        
        let errors = [];
        
        let name = document.querySelector("input#name");   
        let description = document.querySelector("input#description");
        let images = document.querySelector("input#image").files;
        

        if (name.value == "") {
            errors.push("El campo nombre debe ser completado")
        } else if (name.value.length < 5) {
            errors.push("El nombre del producto debe tener al menos 5 caracteres")
        } 
        
        if (description.value.length < 20) {
            errors.push("La descripción del producto debe tener al menos 20 caracteres")
        }

        if (images.name == null) {
            errors.push("Debe cargar al menos una imagen de producto")
        }
        // for (let i = 0; i < images.length; i++) {
        //     let ext = images[i].name.slice(-4)
        //     let acceptedExtensions = ['.jpg','.png','.gif'];
        //     for (let i = 0; i < acceptedExtensions.length; i++) {
        //       if (!acceptedExtensions.includes(ext)){
        //       errors.push("la imagen: " + images[i].name + " no es un formato válido. Las extensiones de archivo permitidas son '.jpg','.png','.gif'")
        //     } 
        //   }
        //   }

        for (let i = 0; i < images.length; i++) {
            if (images[i].type != "image/jpeg" &&  images[i].type != "image/jpg" && images[i].type != "image/png" && images[i].type != "image/gif" )
            errors.push("la imagen: " + images[i].name + " no es un formato válido. Las extensiones de archivo permitidas son '.jpg','.png','.gif'")
        }       

        if (errors.length > 0) {
            e.preventDefault(); 
            let showErrors = document.querySelector("div.showErrors ul")
            for (let i = 0; i < errors.length; i++) {
                showErrors.innerHTML += "<li>" + errors[i] + "</li>"
        }

        setTimeout(() => {document.getElementById('showErrors').remove();
    }, 5000)
        }

    });
});
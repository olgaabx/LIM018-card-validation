import validator from './validator.js';

// Llamamos el input donde se va a ingresar el número de la tarjeta y poder usarlo en el evento de click
const creditCardNumber = document.getElementById('cardNumber');
//console.log(creditCardNumber);
// Llamamos el botón que envía los datos del formulario
const payBtn = document.getElementById('buyTickets');
//console.log(payBtn);

// Iniciamos un evento click con un arrow function que va a tener una condición
payBtn.addEventListener('click', (evt) => {
    // Usamos el preventDefault para poder ver los datos que ingresan en el input y no se refresque la página como lo hace el form por default
    evt.preventDefault();
    //console.log('El botón funciona');
    let message = "";
    //console.log(validator.isValid(creditCardNumber.value));
    //console.log('Llamada antes del if')
    if (creditCardNumber === "") {
        message = prompt("Esto está pasando");
    } else {
        message = "Tu tarjeta es inválida"
    }

    //document.getElementById('resultMessage');
    //resultMessage.textContent = message;
})


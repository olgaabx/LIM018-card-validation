import validator from './validator.js';
// Llamamos el input donde se va a ingresar el número de la tarjeta y poder usarlo en el evento de click
const creditCardNumber = document.getElementById('cardNumber');
// Llamamos el botón que envía los datos del formulario
const payBtn = document.getElementById('buyTickets');

// Iniciamos un evento click con un arrow function que va a tener una condición
payBtn.addEventListener('click', (evt) => {
    // Usamos el preventDefault para poder ver los datos que ingresan en el input y no se refresque la página como lo hace el form por default
    evt.preventDefault();
    let message = validator.isValid(creditCardNumber.value);
    //console.log(validator.isValid(creditCardNumber.value));
    validator.maskify(creditCardNumber.value);
    let number = validator.maskify(creditCardNumber.value);
    alert(number);

    //console.log('Llamada antes del if')
    if (message === true) {
        alert("Tu tarjeta es correcta");
    } else {
        alert("Tu tarjeta es inválida");
    }
})


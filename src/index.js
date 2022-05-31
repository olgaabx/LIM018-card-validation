import validator from './validator.js';

const creditCardNumber = document.getElementById('cardNumber');
//console.log(creditCardNumber);
const payBtn = document.getElementById('buyTickets');
//console.log(payBtn);

payBtn.addEventListener('click', (evt) => {
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


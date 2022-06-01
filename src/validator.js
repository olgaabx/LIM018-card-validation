const validator = {
 isValid:function(creditCardNumber){
   console.log(creditCardNumber)
   //let longitud = creditCardNumber.length;
   //console.log('La longitud es tanto ' + longitud);
   let ccNumber = creditCardNumber.split('').reverse();
   console.log(ccNumber);
   let reversed = ccNumber.join('');

    /*for(let i = 0; i<length; i++){
      const currentDigit = creditCardNumber[i];
      console.log(currentDigit);
    }*/
  },

  /*Maskify:function(creditCardNumber){
    let arrayNew = [];
    let numCard;
    let array = creditCardNumber.split('');

    // usamos un forEach para que ocurra 
    array.forEach((element, i) => {
      if (i < array.length - 4 ){
        element = "#";
      }

      // Usamos el método push para agregar los elementos al arrayNew vacío
      arrayNew.push(element);
      //console.log(arrayNew);
    });

    numCard = arrayNew.join('');
    //alert(numCard);
    return numCard;
  }*/
}



export default validator;
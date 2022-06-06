const validator = {
 isValid:function(creditCardNumber){
   //console.log(creditCardNumber)
   const ccNumber = creditCardNumber.split('').reverse();
   //let stringsNose;
   let multiplyNumber = 0;
   let multipliedNumbersArray = []

   for (let i = 0; i < ccNumber.length; i++){
     let arrInd = ccNumber[i];
     if (i === 0) {
      multiplyNumber = arrInd*1;
     }
      else if (i%2 === 1){
        multiplyNumber = arrInd*2;
     }
      else {
        multiplyNumber = arrInd*1;
      }
     if (multiplyNumber > 9) {
       multiplyNumber -= 9
     }
    // console.log(multiplyNumber);    
      multipliedNumbersArray.push(multiplyNumber);
      //console.log(multipliedNumbersArray);
   }

   let result = 0;
   for (let i = 0; i < multipliedNumbersArray.length; i++) {
    result = result + multipliedNumbersArray[i];
    //console.log(result);
   }

   return result % 10 === 0
  },

  maskify:function(creditCardNumber){
    let arrayNew = [];
    let numCard;
    let array = creditCardNumber.split('');

    // usamos un forEach para que ocurra 
    array.forEach((element, i) => {
      //console.log(element);
      if (i < array.length - 4 ){
        element = "#";
      }

      // Usamos el método push para agregar los elementos al arrayNew vacío
      arrayNew.push(element);
      //console.log(arrayNew);
    });

    numCard = arrayNew.join('');
    return numCard;
  }
}

export default validator;
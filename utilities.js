
let isDividedBy3 = number => {
    let numberString = number.toString();
    let result = 0;
    numberString.split('').forEach( digit =>{
        result += parseInt(digit);
    });
    if(result % 3 == 0)
        return true;
    return false;
};

// Format number with ',': Add comma after third digit in given number
let formatNumber = number => {
    let formatedNumber = [];    
    let numberString = number.toString();  
if (numberString.length >= 4){
    numberString.split('').forEach( (digit,index) =>{
        formatedNumber.push(digit);
        if(isDividedBy3(index) && !(index === numberString.length - 1)){
            if(digit !== '.')
              formatedNumber.push(',');
        }
            
    });
  }
return formatedNumber.join('');
};

export {formatNumber};

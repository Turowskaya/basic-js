const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)){
    throw new Error();
  }

  let array = [];

  for(i=0; i< arr.length; i++){

    if(arr[i] === '--discard-next'){
      i=i+2;
    } else if (arr[i] === '--discard-prev'){
      array.splice(i-1, 1);
    } else if(arr[i] === '--double-next'){

      if(i === arr.length-1){
        continue
      } else{
         array.push(arr[i+1]);
      }

    } else if(arr[i] === '--double-prev'){

      if(i === 0){
        continue
      } else{
         array.push(arr[i-1]);
      }

    } else{
      array.push(arr[i]);
    }

  }
  return array;
};

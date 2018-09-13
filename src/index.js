module.exports = function solveEquation(equation) {
  // your implementation
  let arr = equation.split(' ');
  let a, b, c, d, x1, x2 ;
   
  if (arr[3] === '-'){
    b = -(arr[4]);
  }
  else{
    b = arr[4];
  }
  if (arr[7] === '-'){
    c = -(arr[8]);
  }
  else{
    c = arr[8];
  }
  
  a = arr[0];

  d = (b*b) - (4*a*c);

   x1 = ((-b) + Math.sqrt(d)) / (2 * a);
   x2 = (-b - Math.sqrt(d)) / (2 * a);

  let result = [Math.round(x1), Math.round(x2)]
    
    return result.sort((x1,x2)=> x1 - x2);
  }

  


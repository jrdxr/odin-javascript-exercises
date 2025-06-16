const sumAll = function(low, high) {

  if (low / low !== 1 ||
     Math.min(low) < 0 || 
     low % 1 !== 0 || 
     typeof(low) !== 'number') {

    return "ERROR";
    
  } else if (high / high !== 1 ||
     Math.min(high) < 0 || 
     high % 1 !== 0 || 
     typeof(high) !== 'number') {

    return "ERROR";
    
  } else if (low > high) {
      let a = low;
      low = 1 * high;
      high = 1 * a;
  }

      let sum = 0;

      for(let i = low; i <= high; i++) {
        sum = sum + i;
      }
    
      console.log(sum);
      return sum;
  
}


// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function(originals, ...args) {

    function checkIfNotIncluded(original) {

        // declare variable w/ a t/f value if the arguments are in the array we are checking
        const isNotIncluded = !args.includes(original);
        console.log(original + ` ${isNotIncluded}`);
        return isNotIncluded;
    
    }
    
      const filteredArray = originals.filter(checkIfNotIncluded);
    
      console.log(filteredArray);
      
      return filteredArray;


}

// Do not edit below this line
module.exports = removeFromArray;

// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Method1

function confirmEnding(str, target) {
  
    if (str.substr(-target.length) === target) {
        return true;
    } else {
        return false;
    }

}
  
console.log(confirmEnding("Bastian", "n"));

  
// Method2

function confirmEnding(str, target) {

    return str.slice(str.length - target.length) === target;
}
      
console.log(confirmEnding("Bastian", "n"));
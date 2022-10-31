// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function parChecker (str){
    let openP = 0
    let closeP = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '('){
            openP ++
        }
        else if (str[i]=== ')'){
            closeP +=1
        }  
    }
    if (openP === closeP){
        return true
    }else{
        return false 
    }
}

console.log(parChecker(")Balanced.("))
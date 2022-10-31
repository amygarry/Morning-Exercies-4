// Write your code below this line
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function deCoder (str) {
    //figure out what the number is with parsInt 
    let num = +str[0]
    let decodedStrg = ""
    str = str.toLowerCase()
    for (let i = 1; i < str.length; i++) {
        let origIndex = alphabet.indexOf(str[i])
        let newIndex = origIndex + num
        decodedStrg += alphabet[newIndex]
      if((newIndex+1)>26 )
    }
  return decodedStrg
}

console.log(deCoder("1a")) // "b"
console.log(deCoder("3ce")) // "fh"
console.log(deCoder("2fcjjm")) // "hello"
function filterDobles (str){
    let newWord = ''

    for (let i = 0; i < str.length; i++) {
        if (!newWord.includes(str[i])){
            newWord += str[i]
        }
    }
    return newWord
}


console.log(filterDobles('helloworld'))
// Write your solution below:

//I am going to count how many of each letter and then push that many of the letter into the array 

function sortTshirts (str){
    let smalls = ''
    let mediums = '' 
    let larges = '' 
    for (let i = 0; i < str.length; i++) {
        if(str[i]=== 's'){
            smalls += 's'
        }else if (
            str[i] === 'm'){
                mediums += 'm' 
        }else if (str[i] === 'l'){
            larges += 'l'
        }  
    }
    const newstr = smalls + mediums + larges 
    return newstr
}

console.log(sortTshirts('slsmmsllsmsmlmsls'))
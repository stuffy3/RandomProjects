// Copy and paste the symbols below in the array variable
let array = ""

const removeDollar = (arr) => {
    const newArr = arr.replace(/[^a-zA-Z0-9 ]/g, '')
    console.log(newArr)
}

//Run using Node remove$.js
removeDollar(array)
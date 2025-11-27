/*
3. One argument, pt.2
Let's change the previous function a bit to include a variable and a return statement:

function stringLength(str){
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength("willynilly") */
let stringLength = str => {return (`the length of "${str}" is:`, str.length)};
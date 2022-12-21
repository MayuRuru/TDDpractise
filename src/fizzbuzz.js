export const fizzbuzz = (number) => {

//Step 2: create a function
//Setp 4+6: check if param is a number two different ways

    if(typeof number != 'number') throw new Error('param must be a number')  
    if(Number.isNaN(number)) throw new Error('param must be a number')
    
    //return 1

    //if(number%5 == 0 && number%3 == 0) return 'fizzbuzz'
    // if(number%15 == 0) return 'fizzbuzz'
    // if(number%3 == 0) return 'fizz'
    // if(number%5 == 0) return 'buzz'
    // return number


// REFACTOR:

const multiples = { 3: 'fizz', 5: 'buzz' }
let output = ''

Object.entries(multiples).forEach(([multiplier, word]) =>{
    if(number % multiplier == 0) output += word
})

return output == '' ? number : output

}




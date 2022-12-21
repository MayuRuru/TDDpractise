import { expect, describe, it } from "vitest"
import { fizzbuzz } from "../src/fizzbuzz"

//Step 2: create a function
//Setp 4+6: check if param is a number two different ways

// const fizzbuzz = (number) => {
//     if(typeof number != 'number') throw new Error('param must be a number')  
//     if(Number.isNaN(number)) throw new Error('param must be a number')
//     //return 1

//     //if(number%5 == 0 && number%3 == 0) return 'fizzbuzz'
//     if(number%15 == 0) return 'fizzbuzz'
//     if(number%3 == 0) return 'fizz'
//     if(number%5 == 0) return 'buzz'
//     return number
// }


// Step 1: it should be a function
// This test becomes redundant later on, we refactor by deleting it:

describe("fizzbuzz", () => {
    // it('should be a function', () =>{
    //     expect(typeof fizzbuzz).toBe('function')
    // })

    //Step 3: it needs a number

    it('should throw error if parameter is not a number', () => {
        expect(() => fizzbuzz()).toThrow()
    })

    //Step 5: specific error if is not a number

    it('should throw an specific error message if parameter is not a number', () => {
        expect(() => fizzbuzz()).toThrow(/number/)
    })

    //or if it is NaN

    it('should throw an specific error message if parameter is not a number', () => {
        expect(() => fizzbuzz(NaN)).toThrow('param must be a number')
    })

    //Next steps:

    it('should return 1 if param provided is 1', () => {
        expect(fizzbuzz(1)).toBe(1)
    })

    it('should return 2 if param provided is 2', () => {
        expect(fizzbuzz(2)).toBe(2)
    })

    it('should return fizz if param provided is multiple of 3', () => {
        expect(fizzbuzz(3)).toBe('fizz')
        expect(fizzbuzz(6)).toBe('fizz')
        expect(fizzbuzz(9)).toBe('fizz')

    })

    //When a test goes directly green, let's check wether it is not well done or another test case is already coverting it (like with number 4)


    it('should return buzz if param provided is multiple of 5', () => {
        expect(fizzbuzz(5)).toBe('buzz')
        expect(fizzbuzz(10)).toBe('buzz')
    })

    it('should return fizzbuzz if param provided is multiple of both 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz')
    })


})
import { expect, describe, it } from "vitest";

const factory = (from, to) => {
    //if(from == undefined) throw new Error('from is required')
    if(typeof from != 'string') throw new Error('from is not a string')
    if(typeof to != 'string') throw new Error('to is not a string')

    const isSameLenght = from.length == to.length
    const hasSameUniqueLetters = new Set(from).size == new Set(to).size

    if(!isSameLenght || !hasSameUniqueLetters) return false

    const transformation = {}

    for(let i=0; i<from.length; i++){
        const fromLetter = from[i]
        const toLetter = to[i]

        const checkedLetter = transformation[fromLetter]
        if (checkedLetter && checkedLetter != toLetter) return false

        transformation[fromLetter] = toLetter
    }

    return true

}


describe('factory', () => {
    // it('should be a function', () => {
    //     expect(factory).toBeTypeOf('function')
    // })

    it('should throw error if first param is missing', ()=> {
        expect(() => factory()).toThrow()
    })

    it('should throw error if first param is not a string', ()=> {
        expect(() => factory(3)).toThrow()
    })

    it('should throw error if second param is not a string', ()=> {
        expect(() => factory('string', 3)).toThrow()
    })

    it('should return a boolean', () => {
        expect(factory('a', 'b')).toBeTypeOf('boolean')
    })

    it('should return false if strings provided have different length', () => {
        expect(factory('abc','de')).toBe(false)
    })

 
    it('should return false if strings provided have different length even with same unique letters', () => {
        expect(factory('aab','ab')).toBe(false)
    })


    it('should return false if strings provided have different number of unique letters', () => {
        expect(factory('abc','ddd')).toBe(false)
    })

    it('should return false if strings have different order of transformation', () => {
        expect(factory('XBOX','XXBO')).toBe(false)
    })
})
import { expect, describe, it } from "vitest";
import { f } from "vitest/dist/index-1e9f7f83";

const factory = (from, to) => {
    //if(from == undefined) throw new Error('from is required')
    if(typeof from != 'string') throw new Error('from is not a string')
    if(typeof to != 'string') throw new Error('to is not a string')

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

    it('should throw error if strings provided have different lengths', () => {
        expect(factory('abc','de')).toBe(false)
    })
})
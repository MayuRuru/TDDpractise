import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const rows = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0]
]

const operations = ['+', '-', '*', '/']

const Calculator = () => {
    return (
        <section>
            <h1>Calculator</h1>
            <div role='grid'>
            {rows.map((row, index) => (
                <div key={index} role='row'>
                    {row.map(number => <span key={number}>{number}</span>)}
                </div>
            ))}
            {
                operations.map(operation => (
                    <span key={operation}>{operation}</span>
                ))
            }
            </div>
    </section>
    )
}

describe('Calculator', () => {
afterEach(cleanup)

    it('should render', ()=> {
        render(<Calculator />)
    })

    it('should render title correctly', ()=> {
        render(<Calculator />)

        screen.getByText('Calculator')
    })

    it('should render numbers', () => {
        render(<Calculator />)

        numbers.forEach(number =>{
            screen.getByText(number)
        })

    })

    it('should render 4 rows', ()=> {
        render(<Calculator />)

        const rows = screen.getAllByRole('row')
        expect(rows.length).toBe(4)
    })

    it('should render operations', () => {
        render(<Calculator />)
        operations.forEach(operation =>{
            screen.getByText(operation)
        })
    })
})
import { Bowling } from "../src/bowling_main";

describe('totalScore', () => {
    test('It will display total score when each frame has score of 1', () => {
        const input: Array<number> = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        const output: number = 20
        const bowling = new Bowling();
        const result = bowling.totalScore(input)
        expect(result).toBe(output)
    })
})

describe('totalScore', () => {
    test('It will display total score when each frame has different score but not strike and no spare', () => {
        const input: Array<number> = [1, 2, 1, 2, 1, 4, 1, 5, 1, 7, 1, 1, 6, 1, 6, 0, 0, 0, 1, 1, 0]
        const output: number = 42
        const bowling = new Bowling();
        const result = bowling.totalScore(input)
        expect(result).toBe(output)
    })
})


describe('totalScore', () => {
    test('It will display total score when each frame has a strike', () => {
        const input: Array<number> =
            [
                10,
                0,
                10,
                0,
                10,
                0,
                10,
                0,
                10,
                0,
                10,
                0,
                10,
                0,
                10,
                0,
                10,
                0,
                10,
                10,
                10
            ]
        const output: number = 300
        const bowling = new Bowling();
        const result = bowling.totalScore(input)
        expect(result).toBe(output)
    })
})

describe('totalScore', () => {
    test('It will display total score when frames has different score with strikes and spares', () => {
        const input: Array<number> =
            [
                1,
                4,
                4,
                5,
                6,
                4,
                5,
                5,
                10,
                0,
                0,
                1,
                7,
                3,
                6,
                4,
                10,
                0,
                2,
                8,
                6
            ]
        const output: number = 133
        const bowling = new Bowling();
        const result = bowling.totalScore(input)
        expect(result).toBe(output)
    })
})


describe('totalScore', () => {
    test('It will display total score when frames has different score with strikes and spares', () => {
        const input: number[] = [8, 2, 5, 4, 9, 0, 10, 0, 10, 0, 5, 5, 5, 3, 6, 3, 9, 1, 9, 1, 10]
        const output: number = 149
        const bowling = new Bowling();
        const result = bowling.totalScore(input)
        expect(result).toBe(output)
    })
})


describe('totalScore', () => {
    test('It will display total score when frames has different score with strikes and spares', () => {
        const input: number[] = [5, 5, 4, 5, 8, 2, 10, 0, 0, 10, 10, 0, 6, 2, 10, 0, 4, 6, 10, 10, 0]
        const output: number = 179
        const bowling = new Bowling();
        const result = bowling.totalScore(input)
        expect(result).toBe(output)
    })
})

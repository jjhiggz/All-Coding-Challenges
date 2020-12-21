const {
    swapPosition,
    checkSort,
    placeInOrder,
    insertAt
} = require('./helpers.js')
let testPeople = [
    {
        age:1
    },
    {
        age:3
    },
    {
        age:4
    },
]

let testPeopleAnswer = [
    {
        age:1
    },
    {
        age:2
    },
    {
        age:3
    },
    {
        age:4
    }
]

describe( 'helpers', () => {
    test('the position swap function works correctly', () => {
        expect([1,2,3]).toMatchObject([1,2,3])
        expect( swapPosition([1,2,3], 1, 0)).toMatchObject([2,1,3])
        expect( swapPosition([1,2,3], 2, 1)).toMatchObject([1,3,2])
        expect( swapPosition([1,2,3], 1, 2)).toMatchObject([1,3,2])
        expect( swapPosition([1,2,3], 0, 1)).toMatchObject([2,1,3])
    })

    test('checksort', () => {
        expect( checkSort([1,2,3])).toBe( true )
        expect( checkSort([1,-2,3])).toBe( false )
        expect( checkSort([0, 1, -5, 9, 10, 10, 11, 12])).toBe( false )
        expect( checkSort([1,3,2])).toBe( false )
        expect( checkSort([1,1,1])).toBe( true )
        expect( checkSort([0])).toBe( true )
        expect( checkSort([0,1])).toBe( true )
    })

    test('placeInOrder', () => {
        expect( placeInOrder([1,2,3], 2) ).toMatchObject([1,2,2,3])
        expect( placeInOrder([1,2,2,3], 2) ).toMatchObject([1,2,2,2,3])
        expect( placeInOrder([], 2) ).toMatchObject([2])
        expect( placeInOrder([1], 2) ).toMatchObject([1,2])
    })
    
    
    test('insertAt', () => {
        expect(insertAt( [1,2,3], 1, 3)).toMatchObject([1,3,2,3])
        expect(insertAt( [1,2,3], 2, 2)).toMatchObject([1,2,2,3])
        expect(insertAt( [1,2,3], 0, 3)).toMatchObject([3,1,2,3])
        expect(insertAt( [1,2,3,4], 1, 5)).toMatchObject([1,5,2,3,4])
        expect(insertAt( [1], 1, 2)).toMatchObject([1,2])
        expect(insertAt( testPeople, 1, { age: 2 }, "age")).toMatchObject(testPeopleAnswer)
    })
})
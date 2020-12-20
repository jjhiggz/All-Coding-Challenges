
const {swapPosition, checkSort, bubblesort } = require('./bubblesort.js')
let testArray1 = [1,0,-5,9,10,10,11,12]

describe( 'bubblesort', () => {
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

    test('bubblesort', () => {
        expect( bubblesort([1,2,3])).toMatchObject([1,2,3])
        expect( bubblesort([1])).toMatchObject([1])
        expect( bubblesort([])).toMatchObject([])
        expect( bubblesort([2,1,3])).toMatchObject([1,2,3])
        console.log(bubblesort(testArray1))
        expect( bubblesort(testArray1)).toMatchObject(testArray1.sort((a , b)=>( a - b)))
    })
})
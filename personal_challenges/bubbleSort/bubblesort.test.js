
const { bubblesort } = require('./bubblesort.js')
const {shuffle} = require('lodash')

let testArray1 = [1,0,-5,9,10,10,11,12]

describe( 'bubblesort', () => {
    
    test('bubblesort', () => {
        expect( bubblesort([1,2,3]))
            .toMatchObject([1,2,3])
        expect( bubblesort([1]) )
            .toMatchObject([1])
        expect( bubblesort([]) )
            .toMatchObject( [] )
        expect( bubblesort([2,1,3]))
            .toMatchObject([1,2,3])
        expect( bubblesort(testArray1) )
            .toMatchObject( testArray1.sort((a , b)=>( a - b)) )
        expect( bubblesort(shuffle( [-3,-2,-1,0,1,2,3])) )
            .toMatchObject( [-3,-2,-1,0,1,2,3] )


    })
})
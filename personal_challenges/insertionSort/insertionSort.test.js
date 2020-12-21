const {insertionSort} = require('./insertionSort.js')

describe.skip('insertion sort', () => {
    test.skip('it returns the correct values', () => {
        expect( insertionSort([1,3,1])).toMatchObject([1,1,3])
    })
})
const {insertionSort} = require('./insertionSort.js')
const { testInputs, testOutputs } = require('./testData')

describe.skip('insertion sort', () => {
    test.skip('it returns the correct values', () => {
        expect( insertionSort([1,3,1])).toMatchObject([1,1,3])
        expect( insertionSort([1,1,2])).toMatchObject([1,1,2])
        expect( insertionSort([1,1,-1,-1])).toMatchObject([-1,-1,1,1])
        expect( insertionSort([1,1,-1,-1])).toMatchObject([-1,-1,1,1])
        expect( insertionSort(testInputs[0])).toMatchObject(testOutputs[0])
        expect( insertionSort(testInputs[1])).toMatchObject(testOutputs[1])
    })
})
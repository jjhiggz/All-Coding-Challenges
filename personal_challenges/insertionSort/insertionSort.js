// grows a sorted array
// takes each element from the input, finds the spot where element belongs
// goes until end of array

const { placeInOrder  } = require("../helperFunctions/helpers");


// steps
// 1st make a simple insertion sort



function insertionSort( array, key = null ){
    let newArray = [];
    for(let i in array){
        if( +i === 0 ){ 
            console.log("i: ", i)
            console.log("newArray before first: ", newArray)
            newArray.push(array[i]) 
            console.log("new Array after first:", newArray)
        }
        else{
            // newArray = key ? 
            //     placeInOrder( newArray, array[i], key  ) :
            //     placeInOrder(newArray, array[i])
            console.log("newArray at i = " + i + ":", newArray)
            console.log("array at i = " + i + ":", array[i])
            console.log("array at i= " + i + ":", array)

            newArray = placeInOrder(newArray, array[i])
        }
    }
    return newArray
}

insertionSort([1,2,3])

module.exports = {
    insertionSort
}
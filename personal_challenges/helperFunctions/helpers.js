function swapPosition(array, index1, index2){
    let newArray = JSON.parse(JSON.stringify(array));
    newArray[index1] = array[index2]
    newArray[index2] = array[index1]
    return newArray
}

function checkSort(array){
    let isSorted = true
    for( let i in array ){
        if(i !== 0){
            if( array[i] < array[i - 1] ){
                isSorted = false
                break
            }
        }
    }
    return isSorted
}

function deepCopy( object ){
    return JSON.parse(JSON.stringify(object))
}

function insertAt(array, index, element){
    if( index > array.length - 1 ){
        return deepCopy([ ...array, element])
    } else {
        return deepCopy([ ...array.slice(0, index), element, ...array.slice(index)])
    }
}   

function placeInOrder( array, newElement, key = null ){
    let newArray = []
    if( array.length === 0 ){
        newArray.push(newElement)
        return newArray
    } 
    console.log(array)
    for( let i = array.length - 1; i >= 0; i-- ){
        if(!key){
            if( array[i] >= newElement  ){
                console.log('hit array[i] >= newelement')
                return insertAt( array, i, newElement)
                break
            } else if( i === array.length - 1){
                return deepCopy([...array, newElement])
            }
        } else {
            if( array[i][key] >= newElement[key]  ){
                return insertAt( array, i, newElement)
                break
            } else if( i === array.length - 1){
                return deepCopy([...array, newElement])
            }
        }
    }

}

console.log(placeInOrder([1], 2))

module.exports = {
    checkSort,
    swapPosition,
    placeInOrder,
    insertAt
}
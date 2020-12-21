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

module.exports = {
    checkSort,
    swapPosition
}
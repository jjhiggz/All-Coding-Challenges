const { swapPosition, checkSort } = require('../helperFunctions/helpers')
function bubblesort(array){
    if( checkSort(array) ){
        return array
    } else {
        for( let i = 1; i < array.length; i++){
            if(array[i] < array[i - 1]){
                return bubblesort(swapPosition( array, i, i - 1 ))
            }
        }
    }
}

module.exports = {
    bubblesort
}
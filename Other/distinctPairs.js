function distinctPairs(){

	let pairs = {}

	array.forEach( (number, i) => {
		array.slice(i + 1, array.length).forEach( otherNumber => {
			let pair = [number, otherNumber].sort((a,b) => a - b)
			let pairKey = JSON.stringify(pair)
			let pairSum = pair[0] + pair[1]
			if(!(pairKey in pairs) && pairSum === 10 ){
				pairs[pairKey] = 1
			}
		})
	})
	
	return Object.keys(pairs).length

}
let array = [1, 2, 3, 6, 7, 8, 9, 1]
console.log( distinctPairs(array))


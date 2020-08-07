function largestPrimeFactor(number) {
  let maxFactor = 2
  let newFactor = 2
  let newNumber = number

  while( newNumber > Math.sqrt(number) ){
    if(newFactor > maxFactor && !(newNumber % newFactor )){
      maxFactor = newFactor
    }
    if(!(newNumber % newFactor)){
      newNumber = newNumber / newFactor
      newFactor = 2
    }
    else{
      newFactor++
    }
  }
  return maxFactor > newNumber ? maxFactor : newNumber
}
console.log(largestPrimeFactor(13195))
// console.log(largestPrimeFactor(600851475143))

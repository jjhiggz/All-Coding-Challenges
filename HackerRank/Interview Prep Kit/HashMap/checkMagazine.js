function checkMagazine(magazine, note) {
    let answer = "Yes"
    let map = {}
    magazine.forEach(word => {
        map[word] = map.hasOwnProperty(word) ? map[word] + 1 : 1
    })
    note.forEach(word => {
        if (answer === "Yes" && map.hasOwnProperty(word) && map[word] > 0) {
            map[word] = map[word] - 1
        } else {
            answer = "No"
        }
    })
    return answer
}

let magazine = "two times three is not four".split(' ')
let note = "two times two is four".split(' ')

console.log(checkMagazine(magazine, note))
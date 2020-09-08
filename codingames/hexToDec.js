const decToHex = (dec) => {
    const over9 = (number) => {
        return number < 10 ? number : {
            10: 'A',
            11: 'B',
            12: 'C',
            13: 'D',
            14: 'E',
            15: 'F',
        }[number]
    }
    let sixteens = (dec - dec % 16) / 16
    const ones = over9(dec - sixteens * 16)
    sixteens = over9(sixteens)
    console.log(sixteens, ones)
}

decToHex(198)
    //  FF -> 255
    // 0 -> 00
    //

const indexMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];
function SPQR(x) {
    let result = ''
    for (let i = 0; i < indexMatrix.length; i++) {
        while (x >= indexMatrix[i][0]) {
            result += indexMatrix[i][1]
            x -= indexMatrix[i][0]
        }

    }
    return result

}


console.log(SPQR(1943));
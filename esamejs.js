let x =
    `
Cancelleria
500
40
60

Servizzi igenici
1000
1
200

Vendite
0
`

function spese(string) {
    let array = string.split("\n")
    let matrix = []
    let result = []
    let arrObj = []
    array.shift()
    for (let i = 0; i < array.length; i++) {
        if (array[i] != '') {
            result.push(array[i])
        }
        if (array[i] == '') {
            matrix.push(result)
            result = []
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        let sum = 0
        const obj = {
            'reparto': '',
            'spese': 0
        }
        for (let j = 0; j < matrix[i].length; j++) {
            if (isNaN(matrix[i][j])) {
                obj.reparto = matrix[i][j]
            }
            if (!isNaN(matrix[i][j])) {
                sum += parseInt(matrix[i][j])
                obj.spese = sum
            }
        }
        console.log(obj);
        arrObj.push(obj)
    }
    return arrObj
}
console.log(spese(x));







function pazza(string) {
    let pazza='questa stringa è pazza'
    let nonPazza='questa stringa non è pazza'
    function lastThree(string, cntrl) {
        let z = string.length
        for (let i = 0; i < cntrl.length; i++) {
            if (string[z - 1] == cntrl[i][2] && string[z - 2] == cntrl[i][1] && string[z - 3] == cntrl[i][0]) {
                return true
            }

            else return false
        }
    }
    const start = new Set([',', '.', '!', '?', ':', ';', '-', '~'])
    if (string.includes('Church') || string.includes('mare')) {
        return nonPazza
    }
    else if (string.includes('Cthulu') || start.has(string[0])) return pazza
    else if (!string.includes('lui') || !string.includes('lei') || !string.includes('egli') || !string.includes('ella')) return pazza
    let array = string.split(' ')
    if (lastThree(array[0], ['are', 'ere', 'ire']) && lastThree(array[array.length - 1], ['are', 'ere', 'ire'])) {
        return pazza
    }
    else if (lastThree(array[array.length - 1], ['?!?'])) return pazza

}

console.log(pazza('morire volare Church'));

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
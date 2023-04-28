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
        return 'non pazza'
    }
    else if (string.includes('Cthulu') || start.has(string[0])) return 'pazza'
    else if (!string.includes('lui') || !string.includes('lei') || !string.includes('egli') || !string.includes('ella')) return 'pazza'
    let array = string.split(' ')
    if (lastThree(array[0], ['are', 'ere', 'ire']) && lastThree(array[array.length - 1], ['are', 'ere', 'ire'])) {
        return 'pazza'
    }
    else if (lastThree(array[array.length - 1], ['?!?'])) return 'pazza'

}





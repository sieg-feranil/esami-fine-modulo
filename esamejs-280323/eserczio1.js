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
    let max = 0
    let min = 0
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
                obj.spese > max ? max = obj.spese : min = obj.spese
            }
        }
        console.log(max, min);
        arrObj.push(obj)
    }
    matrix = []
    arrObj.forEach(el => {
        if (el.spese == max || el.spese == min) {
            matrix.push(el)
        }
    });
    return matrix
}
console.log(spese(x));

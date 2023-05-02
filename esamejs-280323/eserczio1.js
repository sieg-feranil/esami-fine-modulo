// pseudo code
// formattare la stringa in entrata per poterla trasformare in array di oggetti
// pushare l'arrey di oggetti xcon gli elementi formattati e calolare la totale delle spese salvando max e min
// iterare sull'array di oggetti e pushare solo gli oggetti con la spesa massima e la spesa minima 


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

Servizzi random
1000
1
200

servizzi rndm
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
        if (matrix.length>2) {
            while (matrix.length!=2) {
                matrix.shift()
            }
        }
    });

    return matrix
}
console.log(spese(x));


// solzione 
// function expenses(allExpenses) {
//     const rows = allExpenses.split('\n')
  
//     const departments = []
  
//     rows.shift()
//     let departmentName = ''
//     let totalAmount = 0
//     for (let i = 0; i < rows.length; i++) {
//       if (departmentName === '') {
//         departmentName = rows[i]
//         continue
//       }
  
//       if (rows[i] === '') {
//         departments.push({
//           name: departmentName,
//           total: totalAmount
//         })
//         departmentName = ''
//         totalAmount = 0
//         continue
//       }
  
//       totalAmount += parseInt(rows[i], 10)
//     }
  
//     if (departments.length == 0) {
//       return []
//     }
  
//     let maxDepartment = departments[0]
//     let minDepartment = departments[0]
//     for (let i = 1; i < departments.length; i++) {
//       if (departments[i].total < minDepartment.total) {
//         minDepartment = departments[i]
//       }
//       if (departments[i].total > maxDepartment.total) {
//         maxDepartment = departments[i]
//       }
//     }
  
//     return [maxDepartment, minDepartment]
//   }
  
//   console.log(expenses(`
//   Reparto 1
//   1
//   2
//   3
  
//   Reparto 2
//   0
  
//   Reparto 3
//   9
//   `))
  
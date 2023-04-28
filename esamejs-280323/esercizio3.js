// creare un indice dove salvo le conversioni di valori e le eccezione con il meno per risparmiarmi eventuali calcoli di valori a sinistra
// con la dunzione itero su ogni valore del mio index e aggiungo sulla variabile result la lettera massima solo nel caso che il valore del valore x in input sia maggiore  o uguale al valore indicato dal mio indice e poi sottraggo il valore della lettera messa al numero x
// tutto si ripete finche il valore di x non diventa 0
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


console.log(SPQR(99));
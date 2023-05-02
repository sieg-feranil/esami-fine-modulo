function pazza(string) {
    let pazza = 'questa stringa è pazza'
    let nonPazza = 'questa stringa non è pazza'
    function lastThree(string, cntrl) {
        let z = string.length
        for (let i = 0; i < cntrl.length; i++) {
            if (string[z - 1] == cntrl[i][2] && string[z - 2] == cntrl[i][1] && string[z - 3] == cntrl[i][0]) {
                return true
            }

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

// soluzione alberto
// function isMad(sentence) {
//     const subjects = ["Lui", "Lei", "Egli", "Ella"]
//     const verbs = ["are", "ere", "ire"]
//     const punct = [',', '.', '!', '?', ':', ';', '-', '~']
  
//     const extras = ['Church', 'mare']
  
//     let isSubjectPresent = subjects.some(subj => sentence.includes(subj))
//     let endsHarshly = sentence.endsWith('?!?')
//     let aboutCthulhu = sentence.includes('Cthulhu')
  
//     let startsWithVerbs = verbs
//         .some(verb => sentence.split(' ')[0].endsWith(verb))
//     let endsWithVerbs = verbs.some(verb => sentence.endsWith(verb))
//     let startsOrEnds = startsWithVerbs && endsWithVerbs
  
//     let startsWithPunct = punct.some(p => sentence.startsWith(p))
  
//     let isNeverMad = extras.some(e => sentence.includes(e))
  
//     return !isNeverMad && (
//       !isSubjectPresent ||
//       endsHarshly ||
//       aboutCthulhu ||
//       startsOrEnds ||
//       startsWithPunct)
//   }
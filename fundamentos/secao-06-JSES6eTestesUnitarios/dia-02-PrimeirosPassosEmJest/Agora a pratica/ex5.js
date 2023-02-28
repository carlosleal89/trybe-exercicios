function hydrate(numBebida) {
    const string = numBebida.split('');
    let numTotal = 0;
    console.log(string);
    for (let num of string) {
        let isNum = parseInt(num);
        if (!isNaN(isNum)) {
            numTotal += isNum;
        }
    }
    if (numTotal > 1) {
        return `${numTotal} copos de água`;
    } else return `${numTotal} copo de água`;
    
}

console.log(hydrate('4 ceva, 2 whisky'));
// tst = '1';
// let tst1 = parseInt(tst);
// console.log(tst1);
// console.log(typeof(tst1));
module.exports = hydrate;
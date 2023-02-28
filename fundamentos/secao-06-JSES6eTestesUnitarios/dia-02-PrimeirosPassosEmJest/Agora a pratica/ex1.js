function myRemove(arr, item) {
    // retorna um array sem o item do segundo argumento.
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }

  console.log(myRemove([1,2,3,4], 3));
  
module.exports = myRemove;
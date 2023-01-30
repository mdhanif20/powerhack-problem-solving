//shift each of the array’s elements unit to the left

const rotateLeft = (array, number) => {
    for (let i = 0; i < number; i++) {
      let firstElement = array.shift();
      array.push(firstElement);
    }
    return array;
  }

const result = rotateLeft([1, 2, 3, 4, 5], 3);
console.log(result)
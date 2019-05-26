const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6]
console.log(array2);
// Array [ 1, 2, 3, 4, 5, 6 ]

function func(x, y, z) {
  console.log(`${x}, ${y}, ${z}`);
}
func(...array1);
// 1, 2, 3

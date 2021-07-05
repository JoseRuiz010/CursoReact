// const arreglo = new Array();

const arreglo = [1, 2, 3, 4];
console.log(arreglo);

const arr2 = [...arreglo, 5];
arr2.push(5);
/////const arr3 = arr2.map();
console.log(arr2);
const arr3 = arr2.map((i) => {
  return i * 2;
});
console.log(arr3);
///console.log(arr3);

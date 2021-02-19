const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const bagiArray = array => {
  // tulis kode di sini
};

console.log(bagiArray(arr));
// [[1,2,3,4,5],[6,7,8,9,10]]

console.log(bagiArray([1, 2, 3, 4, 5, 6, 7]));
// [[1,2,3,4,5],[6,7]]

console.log(bagiArray([1, "A", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
// [[1,'A',3,4,5],[6,7,8,9,10],[11,12]]

const dataSatu = {
  a: "a",
  b: "c",
  c: "c"
};

const dataDua = {
  1: 1,
  2: 2,
  3: 3
};

const gabungObject = data => {};

console.log(gabungObject(dataSatu, dataDua));
// {
//   a: "a",
//   b: "c",
//   c: "c",
//   1: 1,
//   2: 2,
//   3: 3
// };

console.log(gabungObject(dataDua, dataSatu));
//  {
//   1: 1,
//   2: 2,
//   3: 3,
//   a: "a",
//   b: "c",
//   c: "c"
// };

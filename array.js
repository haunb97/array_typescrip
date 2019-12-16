var bachngao = [1, 2, 3];
var laohac = ['bạn', 'bình', 'thường', 'lu'];
console.log('backngao');
bachngao.forEach(function (backngu) {
    console.log(backngu);
});
console.log('laohac');
laohac.forEach(function (magic) {
    console.log(magic);
});
//convert mảng từ dạng này sang dạng khác
// const listSquare = bachngao.map(num =>num*num);
// console.log(listSquare);
var list = bachngao.map(function (num) {
    return num * num;
});
console.log(list);
// lọc các phần tử thỏa mãn
var result = laohac.filter(function (str) { return str.length > 2; });
console.log(result);
// declare a tuple type
var x;
x = ["hello", 10];
console.log(x[0].substr(1));
x[2] = "world";
console.log(x[2]);
// OK, 'string' can be assigned to 'string | number'
x[5] = 100.25;
console.log(x[5].toString());
// OK, 'string' and 'number' both have 'toString'
// const list: number[] = [1, 2, 3];
//
// const categories: Array<string> =
//     ['Sport', 'IT', 'Car'];
//
// console.log('list');
// list.forEach((hau) =>
//     console.log(hau)
// );
//
// console.log('categries');
// categories.forEach((str) =>
//     console.log(str)
// );

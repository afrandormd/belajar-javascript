// let string = '' //string kosong


// // pengulangan untuk mengulang baris
// for( let i = 0; i < 10; i++ ){
//     // perulangan untuk mengulang bintang
//     if(i < 10){
//         for( let j = 0; j < i; j++ ){
//             string += `*` 
//         }
//         string += '\n'
//     } else {
//         for( let j = 0; j < i; j++ ){
//             string += `*` 
//         }
//     }
// }
// console.log(string)

// segitiga sama kaki
function createIsoscelesTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= n - i; j++) {
      str += ' ';
    }
    for (let k = 1; k <= (2 * i) - 1; k++) {
      str += '*';
    }
    console.log(str);
  }
}

createIsoscelesTriangle(5);

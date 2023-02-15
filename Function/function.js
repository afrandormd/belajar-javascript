// belajar function
// hitung volume 2 buah kubus

function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b 
}

// console.log(jumlahVolumeDuaKubus(8, 3))

// coba arguments
function sum(){
    let result = 0
    for (let i = 0; i < arguments.length; i++){
        result += arguments[i]
    }
    return result
}

// console.log(sum(1,3,6))


// rekursif
function tampilAngka(n) {
    // Base case
    if (n === 0) return 
    console.log(n)
    // mulai rekursif
    return tampilAngka(n-1)
}


// faktorial
function faktorial(n) {
    // base case
    if (n === 1) return 1
    return n * faktorial(n-1)
}
// console.log(faktorial(5))

//contoh function expression
let tampil_Alert = function() {
    alert('Hallo semuanya')
}

// es6
let tampilAlert = () => {
    alert('Hallo semuanya')
} 

let tampilConsole = () => {
    console.log("Hallo world")
}


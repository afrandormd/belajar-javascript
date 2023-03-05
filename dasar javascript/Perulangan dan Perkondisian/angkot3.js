// if else for
// latihan angkot

//angkot 1 - 6 beroperasi
//angkot 7 - 10 tidak beroperasi

let noAngkot = 1;
let jmlAngkot = 10;
let angkotBeroperasi = 7;

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log(`Angkot No. ${noAngkot} sedang beroperasi`)
    } else {
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`)
    }
}
// perulangan for & while
//latihan

//angkot 1 - 6 beroperasi dengan baik (while)
//angkot 7 - 10 sedang tidak beroperasi

let noAngkot = 1;
let angkotBeroperasi = 6;
let jmlAngkot = 10;

while(noAngkot <= angkotBeroperasi){
    console.log(`angkot No. ${noAngkot} sedang beroperasi dengan baik.`);
noAngkot++;
}

for(let noAngkot = angkotBeroperasi+1; noAngkot <= jmlAngkot; noAngkot++){
    console.log(`angkot No. ${noAngkot} sedang tidak tidak beroperasi.`);
}


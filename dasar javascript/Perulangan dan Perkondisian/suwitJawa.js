// game suwit jawa

let ask = true
// ulangi permainan
while (ask){
    // tangkap pilihan player
    let pilPlayer = prompt('pilih Gajah, Semut, Orang')
    let player = pilPlayer.toLowerCase()

    // tangkap pilihan komputer
    // generate bilangan random
    let pilCom = Math.random()

    if(pilCom < 0.34){
        pilCom = 'orang'
    }else if(pilCom > 0.34 && pilCom <= 0.67){
        pilCom = 'gajah'
    }else {
        pilCom = 'semut'
    }
    // tertukan rules
    let result = ''
    // jika seri
    if (player == pilCom){
        result = 'SERI'
    } else if (player == 'gajah'){
        // pilihan computer
        // if(pilCom == 'orang'){
        //     result = 'MENANG'
        // } else{
        //     result = 'KALAH'
        // }
        result = (pilCom == 'orang') ? 'MENANG' : 'KALAH'
    } else if (player == 'orang'){
        result = (pilCom == 'gajah') ? 'KALAH' : 'MENANG'
    } else if (player == 'semut'){
        result = (pilCom == 'orang') ? 'KALAH' : 'MENANG'
    } else {
        result = `${player} tidak terdaftar di game`
    }
    // tampilkan hasilnya
    alert(`pilihanmu: ${player} \npilihan komputer: ${pilCom} \nhasilnya adalah: ${result}`)
    ask = confirm('main lagi?')
}
alert('terimakasih!')
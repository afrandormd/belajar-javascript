// Quiz tebak angka 1 - 0

// mengulangi program
let repeat = true
while(repeat){

let comp = Math.floor(Math.random() * 10) + 1

let chance = 3
while(chance != 0){
    let user = parseInt(prompt(`Tebak angka 1 - 10 \nkesempatan anda ${chance} kali`))

    let result = ''
    user = (isNaN(user)) ? 0 : user
    if(user != comp){
        result = (user > comp) ? 'Nilai terlalu tinggi' : 'Nilai terlalu rendah'
        alert(result)
        chance = chance - 1
    } else {
        result = `Benar, nilai sama \n angka yang dicari adalah ${comp}` 
        chance = 0
    }
}
repeat = confirm('ulangi lagi?')
}
alert('thankyou!')
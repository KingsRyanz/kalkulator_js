const readline = require('readline-sync');


const AngkaPertama = parseFloat(readline.question("Masukkan Angka Pertama : "));
const operator = readline.question("Masukkan Operator (+, -, *, /, %) :");
const AngkaKedua = parseFloat(readline.question("Masukkan Angka Kedua : "));

// validasi input
if(isNaN(AngkaPertama) || isNaN(AngkaKedua)) {
    // maka tampilkan eror
 return console.log("Inputan tidak sesuai !!!");
}else {
    // lanjutkan eksekusi kode

const hasil = execute (AngkaPertama, operator, AngkaKedua);
    console.log(`Hasilnya adalah ${hasil}`);
}

function execute(AngkaPertama,operator,AngkaKedua){
    switch (operator) {
        case "+":
            return AngkaPertama + AngkaKedua;
        case "-":
            return AngkaPertama - AngkaKedua;
        case "*":
            return AngkaPertama * AngkaKedua;
        case "/":
           // validasi angkaKedua
            if(AngkaKedua ===0){
        return console.log("Eror : Tidak bisa dibagi dengan nol");
        } 
            return AngkaPertama / AngkaKedua;

        case "%":
            return AngkaPertama % AngkaKedua;
        default:
            console.log("Operator tidak valid");
    }
}
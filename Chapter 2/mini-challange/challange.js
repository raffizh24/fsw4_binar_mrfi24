const pecahanRupiah = [100000,50000,20000,10000,5000,2000,1000,500,200,100];
let bayar = 0;
const kembalian = [];

function setKembalian(bayar, harga){
    let cekKembalian = bayar - harga;

    if (cekKembalian % 100 !== 0 || cekKembalian < 0){
        return 'Tidak Valid';
    }
    for (let i = 0; i < pecahanRupiah.length; i++) {
        while (cekKembalian >= pecahanRupiah[i]){
            kembalian.push(pecahanRupiah[i]);
            cekKembalian -= pecahanRupiah[i];
        }
    }
    return kembalian;
}

console.log(setKembalian(100000, 45500));
console.log(setKembalian(20000, 50000));
console.log(setKembalian(40050, 30000));

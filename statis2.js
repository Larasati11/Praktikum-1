class Aritmetika{
    static tambah(a,b){
        return a+b;
    }
}
//membaca data a dan b
let a=3;
console.log("Nilai A:"+a);
let b=4;
console.log("Nilai B:"+b);
//memanggil metode statis
console.log(`${a}+${b}=${Aritmetika.tambah(a,b)}`);

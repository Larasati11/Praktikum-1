var x = 2
console.log("Nilai x:"+x);
var y = 0
console.log("Nilai y:"+y);

if (y===0){
    console.log('Kesalahan: Nilai y tidak boleh nol');
    Process.exit(1);

}

z=x/y;
console.log(`${x}/${y}=${z}`);
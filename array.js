	// array
// Mempermudah pengelolaan nilai/value/data
//  Penelusuran dan Pencarian
// boleh beda type
// Menajement memori

// array = variabel jamak,yang mempunyai banyak elemen dan diacu dengan nama yang sama
// Kumpulan pasangan key dan nilai / key dan value pair
// Key = index pada array dengan tipe integer yang dimulai dari 0
// Array pada JS bertipe Object
// Array pada JS memiliki fungsi/method length untuk menghitung jumlah elemen didalamnya
// di JS... Elemen pada array boleh memiliki tipe data yang berbeda
// angka pada array selalu diawali dengan 0

var hari = ['Senin','Selasa','Rabu'];
var mhs = ['Hanivan','Rizky','Sobari'];
var angka = [10,123,2003];
var myArr = ['teks',2,false];
var myArr2 = ['teks',2,false,myFunc];

var myArr3 = ['teks',2,false,myFunc,[4,5,6]]; //array multi-dimensi

console.log(myArr3[4][1]); //mengakses array didalam array

var myFunc = function(){
	alert('Hello World');
};

var binatang = ['kucing','kelinci','monyet','panda','koala','sapi'];
console.log(binatang[4]);
console.log(typeof(binatang))
console.log(binatang.length);

// Menambah elemen pada array
// Menghapus elemen pada array
// Menampilkan seluruh isi array

	// Menambah isi array
// var arr = [];
//  arr[0] = "Hanivan";
//  arr[1] = "Rizky";
//  arr[2] = "Sobari";

// console.log(arr); 
// console.log(arr[1]);

	// menghapus isi array (manual)
// var arr = ["Hanivan","Rizky","Sobari"];
// arr[1] = undefined;
// console.log(arr);


	// menampilkan isi array
// var arr = ["Hanivan","Rizky","Sobari"];

// for(var i = 0; i < arr.length; i++){
// 	console.log('Siswa ke- ' + (i+1) + ' : ' + arr[i]);
// }

// array method
 // length: mengetahui berapa jumlah elemen pada array
 // join: menggabungkan seluruh isi array menjadi string
 // push, pop, shift, unshift

	// methode pada array

var arr = ["Hanivan","Rizky","Sobari"];

 // join
// console.log(arr.join(' ~ ')); //kurung disamping adalah separator/pemisah, bisa diisikan dengan simbol-simbol

 // push dan pop, bekerja pada elemen terakhir
// arr.push('Doddy', 'Fitri');
// arr.pop();
// arr.pop();

 // unshift dan shift, bekerja pada elemen awal
// arr.unshift('Ujang');
// arr.shift();
// console.log(arr.join(' ~ '));

 // splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...);
// arr.splice(2, 0, 'Rizky');
// arr.splice(1, 2, 'Haikal', '...');
// console.log(arr.join(' - '));

 // slice
// slice(indexAwal, indexAkhir); artinya index awal akan dibawa dan akhir tidak. Jadi jika ingin mengambil 3 index, maka tulisnya 4
// var arr2 = ["Hanivan","Haikal","Hakiem", "Hana"];
// var arr3 = arr2.slice(1,3);
// console.log(arr2.join(' - '));
// console.log(arr3.join(' - '));

 // forEach: TIDAK MENGEMBALIKAN NILAI ARRAY
// var nama = ["Hanivan","Rizky","Sobari"];
// var angka = [1,2,3,4,5,6,7,8];
 
 // cara manual
// for(var i = 0 ; i < angka.length; i++){
// 	console.log(angka[i]);
// } 

 // dengan fungsi array
// angka.forEach(function(e){
// 	console.log(e);
// });

 // dengan function expression
// var cetak = function(e){
// 	console.log(e);
// }
// angka.forEach(cetak);

 // forEach dengan index
// nama.forEach(function(e, i){
// 	console.log('Siswa ke - ' + (i+1) + ' adalah ' + e);
// });

 // map
// var angka = [1,2,4,5,7,8,9];
// var angka2 = angka.map(function(e){
// 	return e * 2;
// });
// console.log(angka2.join(' - '));

 // sort: jika ingin membuat angka puluhan atau ratusan
// var angka = [1,3,2,5,7,6,4,20,10,32];

//  // tidak pakai fungsi dua angka
// angka.sort();
// console.log(angka.join(' - ')); // belum diurutkan

//  // dengan fungsi dua angka
// angka.sort(function(a,b){
// 	return a-b;
// });
// console.log(angka.join(' - ')); // sudah diurutkan dengan fungsi sort

// filter: mencari nilai pada array, mengembalikan dalam bentuk array. bisa mengembalikan banyak nilai
// var angka = [1,3,2,5,7,6,4,20,10,32];
// var angka2 = angka.filter(function(x){
// 	// return x == 9;
// 	return x > 5
// });
// console.log(angka2.join(' - '));

// find: hanya bisa mengembalikan satu nilai, sesuai urutan pada variabel arraynya.
var angka = [1,3,2,5,6,7,4,20,10,32];
var angka2 = angka.find(function(i){
	return i > 5;
});
console.log(angka2);
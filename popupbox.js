	// tabel dan tombol OK
// alert('Hello World!!!');

	// tabel dengan inputan dari user
// var a = prompt('Masukkan nilai:'); //nilainya string
// 	console.log(a); // nilai dikembalikan lewat console browser

	// tabel dengan nilai boolean (true / false)
// var tes = confirm('kamu yakin??');
// alert(tes);
// 	// kita bisa mengubah nilai boolean dengan pengkondisian if/else
// if(tes === true){
// 	alert('user menekan OK!');
// } else {
// 	alert('user menekan CANCEL!');
// }

	// tabel dengan fungsi pengulangan
alert('selamat datang');
var lagi = true;
while(lagi == true){
	var nama = prompt('masukkan nama:');
	alert('hallo ' + nama);

	lagi = confirm('coba lagi??');
}
alert('terima kasih');
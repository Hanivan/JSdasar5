	// Perbedaan array dan object
// Array = kumpulan nilai, yang memiliki index
// Object = kumpulan nilai, yang memiliki nama. Object adalah array, yang lebih sakti. "In Javascript, object are King. If you understand object, you understand javascript."

	// cara membuat object
// var siswa = {
// 	nama : 'Hanivan',
// 	lulus : true,
// 	IPSemester : [2.90, 3.10, 3.25, 2.88, 3.04],
// 	IPKumulatif : function(){
// 		var total = 0;
// 		var ips = this.IPSemester;
// 		for(var i = 0; i < ips.length; i++){
// 			total += ips[i];
// 		}
// 		return total/ips.length;
// 	}

// }
// siswa.IPKumulatif();

// 	// cara membuat object 2
// var orang = {
// 	nama : 'Hanivan',
// 	umur : '16',
// 	skill : 'Linux Troubleshoot',
// 	sapa : function(){
// 		return 'Hai, nama saya ' + this.nama + ' , usia saya ' + this.umur + ' tahun dan saya adalah seorang ' + this.skill;
// 	}
// }
	// dari nama sampai skill disebut properti, dan function adalah methodnya

	// cara membuat object 3
// var siswa = {
// 	nama : 'Hanivan Rizky Sobari',
// 	umur : 16,
// 	IPSemester : [3.00, 2.50, 3.20],
// 	alamat : {
// 		jalan : 'Jl. Pulo Empang, Kp. Kebon Manggis, RT01/11 Kec. Paledang, Kab. Bogor Tengah',
// 		kota : 'Bogor',
// 		provinsi : 'Jawa Barat'
// 	}
// };






	// Macam-macam object pada javascript
// - Object Literal
// - Function Declaration
// - Constructor Function (Keyword new)
// - object.create()

// Object Literal
// var siswa1 = {
// 	nama : 'Hanivan Rizky Sobari',
// 	nrp : '020200317',
// 	email : 'hanivan20@gmail.com',
// 	jurusan : 'Teknik Konputer dan Jaringan'
// }


// var siswa2 = {
// 	nama : 'Adam',
// 	nrp : '020200222',
// 	email : 'adamfirmansyah@gmail.com',
// 	jurusan : 'Multimedia'
// }

// // Function Declaration
// function buatObjectSiswa(nama, nrp, email, jurusan){
// 	var siswa3 = {}; // untuk memberitahu function bahwa ini adalah object
// 	siswa3.nama = nama;
// 	siswa3.nrp = nrp;
// 	siswa3.email = email;
// 	siswa3.jurusan = jurusan;
// 	return siswa3;
// }

// // isi Object Function Dec
// var siswa4 = buatObjectSiswa('Haikal', '020201020', 'haikalhemendra@gmail.com', 'Sekolah SD');

// var siswa5 = buatObjectSiswa('Afri', '020200215', 'afriranda@gmail.com', 'Teknik Komputer dan Jaringan');


// // Constructor = Fucntion yang khusus untuk object
// function siswaBaru(nama, nrp, email, jurusan){
// 	this.nama = nama;
// 	this.nrp = nrp;
// 	this.email = email;
// 	this. jurusan = jurusan;
// }

// // isi object function constructor
// var siswa6 = new siswaBaru('Adham Madani', '020200230', 'adhammadani@gmail.com', 'Teknik Komputer dan Jaringan');


	// membuat object seri: THIS
// cara 1 - function declaration
// function halo(){
// 	console.log('Hello');
// }
// this.halo();
// this mengembalikan object global

// // cara 2 - object literal
// var obj = {a : 10, nama : 'Hanivan'};
// obj.hallo = function(){
// 	console.log(this);
// 	console.log('Hello World');
// }
// obj.hallo();
// this mengembalikan object yang bersangkutan

// // cara 3 - constructor
// function Hallo(){
// 	console.log(this);
// 	console.log('Hellow World');
// }
// var obj1 = new Hallo();
// var obj2 = new Hallo();
// mengembalikan object yang baru dibuat


	// Konsep this
// this = keyword spesial yang cara otomatis didefinisika pada setiap function/object
// var a = 10;
// console.log(window.a); //sama saja
// console.log(window === this);
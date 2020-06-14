	// pengelolaan penumpang
// - Penumpang naik
//  - tambahPenumpang(); => 2 parameter: namaPenumpang, array penumpang
// - Penumpang turun
//  - hapusPenumpang();

	// rules
// - Jika angkot kosong, penumpang naik duduk di kursi pertama
// - Penumpang berikutnya duduk di kursi selanjutnya secara berurutan
// - Jika ada kursi kosong (karena penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
// - Asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
// - Nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun. Jika ada nama yang sama, maka orangnya juga sama

	// rules hapusPenumpang();
// 2 parameter
 // namaPenumpang
// array penumpang
// - jika angkot kosong, tampilkan pesan bahwa angkot kosong
// - jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi value undefined
// - jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahannya

	// test case 1
var penumpang1 = [];
// tambahPenumpang("Hanivan", penumpang);
// output: ["Hanivan"]
// tambahPenumpang("Rizky", penumpang);
// output: ["Hanivan", "Rizky"]

	// test case 2
var penumpang2 = ["Hanivan",undefined,"Sobari"];
// tambahPenumpang("Rizky", penumpang);
// output: ["Hanivan", "Rizky", "Sobari"] => undefined diganti dengan penumpang baru
// tambahPenumpang("Haikal", penumpang);
// output: ["Hanivan", "Rizky", "Sobari", "Haikal"] => penumpang baru akan duduk setelahnya

	// test case 3
var penumpang3 = ["Hanivan", "Rizky", "Sobari"];
// tambahPenumpang("Hanivan", penumpang);
// output: 'Hanivan sudah ada di dalam angkot'
// output2: ["Hanivan", "Rizky", "Sobari"]

	// test case hapusPenumpang 1
var hapusPenumpang = [];
// hapusPenumpang('Hanivan', penumpang);
// output: Angkot masih kosong!
// output: []

	// test case hapusPenumpang 2
var penumpang = ["Hanivan", "Rizky", "Sobari"];
// hapusPenumpang("Hanivan", penumpang);
// output: ["Hanivan", undefined, "Sobari"]

	// test case hapusPenumpang 3
var penumpang = ["Hanivan", "Rizky", "Sobari"];
// hapusPenumpang("Haikal", penumpang);
// output: Haikal tidak ada di dalam angkot
// output: ["Hanivan", "Rizky", "Sobari"]





var penumpang = [];

// function expression
var tambahPenumpang = function(namaPenumpang, penumpang){
	// jika angkot kosong
	if(penumpang.length == 0){
		// tambah penumpang di awal array 
		penumpang.push(namaPenumpang);
		// kembalikan isi array & keluar dari function
		return penumpang;
	} else {
		// telusuri seluruh kursi dari awal
		for(var i = 0; i < penumpang.length; i++){
		// jika ada kursi kosong
		if(penumpang[i] == undefined){
			// tambah penumpang di kursi tsb
			penumpang[i] = namaPenumpang;
			// kembalikan isi array & keluar dari function
			return penumpang;
		}
		// jika sudah ada nama yang sama
		else if(penumpang[i] == namaPenumpang){
			// tampilkan pesan kesalahannya
			console.log(namaPenumpang + ' sudah ada di dalam angkot.');
			// kembalikan isi array & keluar dari function
			return penumpang;
		}
		// jika seluruh kursi terisi
		else if(i == penumpang.length - 1){
			// tambah penumpang diakhir array
			penumpang.push(namaPenumpang);
			// kembalikan isi array & keluar dari function
			return penumpang;



			}
		}
	}
}

	//function expression 
var hapusPenumpang = function(namaPenumpang, penumpang){
	if(penumpang.length == 0){
		console.log('Angkot masih kosong');
	} else {
		for(var i = 0; i < penumpang.length; i++){
			if(penumpang[i] == namaPenumpang){
				penumpang[i] = undefined;
				return penumpang;
			} else if(i == penumpang.length - 1){
				console.log(namaPenumpang + ' tidak ada didalam angkot.');
				return penumpang;
			}
		}
	}
	return penumpang;
}
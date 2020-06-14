var angka = prompt('Masukkan Nilai:');
if(angka % 2 === 0){
	alert(angka + ' adalah bilangan GENAP');
}else if(angka % 2 === 1){
	alert(angka + ' adalah bilangan GANJIL');
}else{
	alert(angka + ' bukan angka!!');
}

var angka = parseInt(prompt('Masukkan Angka 1 - 10:'));

if(angka === 1){
	alert('anda memasukkan angka 1');
} else if(angka === 2){
	alert('anda memasukkan angka 2');
} else {
	alert('angka yang anda masukkan salah!!');
}

// parseInt adalah syntax untuk mengubah type data string menjadi Integer
// kalau == mengatur perbandingan
// kalau === operator identitas. Membandingkan nilai dan type data 
var tanya = true;
while(tanya){
		// menagkap pilihan player
	var p = prompt('pilih: Gajah, Semut, dan, Orang (ikuti huruf kapital)');

		// menangkap pilihan computer (bil.random)
		// membangkitkan bil.random
	var comp = Math.random();

	if(comp < 0.34){
		comp = 'Gajah';
	} else if(comp >= 0.34 && comp < 0.67){
		comp= 'Orang';
	} else {
		comp = 'Semut';
	}

		// menentukan rules (memakai ternary)
	var hasil = '';

	if(p == comp){
		hasil = 'SERI!!';
	} else if(p == 'Gajah'){
		hasil = (comp == 'Orang') ? 'MENANG!!' : 'KALAH!!';

	} else if(p == 'Orang'){
		hasil = (comp == 'Gajah') ? 'KALAH' : 'MENANG!!';
	} else if(p == 'Semut'){
		hasil = (comp == 'Orang') ? 'KALAH!' : 'MENANG!';
	} else {
		hasil = 'memasukkan pilihan yang salah';
	}

		// tampilkan hasilnya
	alert('Kamu memilih: ' + p + '\nKomputer memilih: ' + comp + ' \nMaka kamu ' + '(' + hasil + ')' );

	tanya = confirm('lagi?');
}
alert ('Terima Kasih');
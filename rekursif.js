// rekursif = sebuah fungsi yang memanggil dirinya sendiri
// fungsi akan dijalankan jika mempunyai input dan dikelola dengan fungsi dan menghasilkan output
// rekursif === input => fungsi(didalam fungsi ada baris kode yang memanggil dirinya sendiri sampai pemanggilannya berhenti) => output
// jika ingin menggunakan rekursif, harus berakhir dan menghasilkan nilai. Jika tidak, maka akan masuk ke infinity loop
// jika ingin memberhentikan rekursif, harus ada fungsi (Base Case = kondisi akhir dari rekursif yang menghasilkan nilai)

	// contoh rekursif infinity
// function tampilAngka(n){
// 	console.log(n);
// 	return tampilAngka(n-1)
// }
// tampilAngka(10);

	// contoh rekursif yang benar
// function cetakAngka(n){
// 	if(n === 0) return; // fungsi if disini adalah sebagai Base Case(Nilai Akhir)
// 	cetakAngka(n-1)
// }
// cetakAngka(10);

	// contoh lain, FAKTORIAL
// 5! = 5 * 4 * 3 * 2 * 1

function faktorial(n){
	if(n === 0) return 1;
	return n * faktorial(n-1);
}
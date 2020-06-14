// "use strict"; // js akan menggunakan mode strict, artinya nilai didalam fungsi akan menjadi local scope walaupun tidak ditandai dengan fungsi varibel
// global scope atau window scope
var a = 1;

function tes(a){ // variabel lokal //ketika kita membuat sebuah argumen, argument disamping akan selalu menjadi lokal variabel, meskipun tidak memakai keyword
	// var a = 2;
	// console.log(a); //variabel lokal
	// console.log(window.a); //mengakses variabel global
			//dari ketiga variabel diatas bisa dikatakan name conflict
	//a = 2; // ini akan menjadi variabel global
	console.log(a); // a disamping mengacu pada lokal scope
}
// tes(2); // nilai untuk argument
tes (a); // a yang ada dalam parameter, sama dengan a yang ada di console.log(a); dibawahnya

console.log(a); // a disamping mengacu pada global scope
// console.log(a); // hati-hati dengan penempatan statement :D
// console.log(a); //variabel global









// pokoknya varibel yang diluar function akan dianggap global scope, dan variabel didalam function akan dianggap local scope

// function dapat melihat variabel diluar fungsi, sedangkan variabel diluar fungsi tidak dapat melihat variabel didalam fungsi
// atau yang didalam function disebut Local Scope, dan yang diluar disebut Global Scope& Window Scope.

// Ibarat kaca film pada mobil, orang didalam mobil bisa lihat keadaan diluar mobil, sedangkan orang diluar mobil tidak bisa melihat keadaan
// didalam mobil
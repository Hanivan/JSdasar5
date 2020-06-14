	
var jumlahAngkot = 10;
var angkotBeroprasi = 6;
var angkot = 1;

	// dengan while
// while(angkot <= angkotBeroprasi){
// 	console.log('Angkot No. '+ angkot + ' beroprasi dengan baik.');
// 	angkot++;
// }
// 	// dengan for
// for(angkot; angkot <= jumlahAngkot; angkot++){
// 	console.log('Angkot No. ' + angkot + ' sedang tidak beroprasi dengan baik.');
// }

	// dengan for dan if else
// for(angkot; angkot <= jumlahAngkot; angkot++){
// 	if(angkot <= angkotBeroprasi){
// 		console.log('Angkot No. ' + angkot + ' beroprasi dengan baik');
// 	}else{
// 		console.log('Angkot No. ' + angkot + ' sedang tidak beroprasi dengan baik.');
// 	}
// }

	// dengan for dan else if
// for(angkot; angkot <= jumlahAngkot; angkot++){
// 	if(angkot <= angkotBeroprasi){
// 		console.log('Angkot No. ' + angkot + ' beroprasi dengan baik');
// 	}else if(angkot === 8){
// 		console.log('Angkot No. ' + angkot + ' sedang lembur');
// 	}else {
// 		console.log('Angkot No. ' + angkot + ' sedang tidak beroprasi dengan baik.');
// 	}
// }

	// dengan for, else if, dan logika or
// for(angkot; angkot <= jumlahAngkot; angkot++){
// 	if(angkot <= angkotBeroprasi){
// 		console.log('Angkot No. ' + angkot + ' beroprasi dengan baik');
// 	}else if(angkot === 8 || angkot === 10){
// 		console.log('Angkot No. ' + angkot + ' sedang lembur');
// 	}else {
// 		console.log('Angkot No. ' + angkot + ' sedang tidak beroprasi dengan baik.');
// 	}
// }

	// dengan for, else if, dan 2 logika or
for(angkot; angkot <= jumlahAngkot; angkot++){
	if(angkot <= angkotBeroprasi && angkot !== 5){
		console.log('Angkot No. ' + angkot + ' beroprasi dengan baik');
	}else if(angkot === 8 || angkot === 10 || angkot === 5){
		console.log('Angkot No. ' + angkot + ' sedang lembur');
	}else {
		console.log('Angkot No. ' + angkot + ' sedang tidak beroprasi dengan baik.');
	}
}
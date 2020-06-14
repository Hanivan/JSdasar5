// 	function declaration
// function identifier(parameterList (opt)){function body}
// function tampilPesan(nama){
// 	alert('hallo' + nama);
// }

// 	function expression
// function identifier(opt)(parameterList (opt)){function body}
// var  tampilanPesan = function(nama){
// 						alert('hallo' + nama);
// 					}

// perbedaan lebih lanjut

// function declaration:
// - lebih fleksibel (dapat ditulis dimanapun)
// - ada konsep hoisting
// - cenderung lebih difahami oleh pemula

// function expression:
// - harus didefinisikan terlebih dahulu sebelum memanggil
// - lebih powerfull: - sebagai closure
// 				   - sebagai argument untuk function lain
// 				   - IIFE (Immediately Invoked Function Expression)
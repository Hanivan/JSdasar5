// membuat object angkot

// function constructor
function Angkot(sopir, trayek, penumpang, kas){
	// membuat properti
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	// membuat method penumpang naik
	this.penumpangNaik = function(namaPenumpang){
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	// membuat method penumpang turun
	this.penumpangTurun = function(namaPenumpang, bayar){
		if(this.penumpang.length === 0){
			alert('Angkot masih kosong!');
			return false;
		}

		// menelusuri nama penumpang yang bersangkutan
		for(var i = 0; i < this.penumpang.length; i++){
			if(this.penumpang[i] == namaPenumpang){
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return penumpang;
			}
		}
	}















}

// inisialisasi object baru
var angkot1 = new Angkot('Hanivan', ['Stasiun Bogor', 'Stasiun Batutulis'], [], 0);
var angkot2 = new Angkot('Haikal', ['Merdeka', 'Mawar'], [], 0);
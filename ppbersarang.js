var s = '';

for(var i = 0; i < 7; i++){
	for(var j = 0; j < 10; j++){
		s += '*';
	}
	s += '\n';
}
console.log(s);


var a = '';

for(var b = 0; b < 16; b++){
	for(var c = 0; c <= b; c++){
		a += '$';
	}
	a += '\n';
}
console.log(a);


var d = '';

for(var e = 16; e > 0; e--){
	for(var f = 0; f < e; f++){
		d += '$';
	}
	d += '\n';
}
console.log(d);
function getRandom(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min)
}
function getArray(n)
{
	var a = []
	for (var i = 0; i < n; i++)
	{
		a.push(getRandom(0, 100))
	}
	return a
}

function getResultArray () 
{
	var n = 4;
	var c = [];
	var b = [];
	for (let i = 0; i < n; i++){
		b[i] = getArray(n);
		
		for (let j = 0; j < n; j++){
			c[j + i * n] = b[i][j];
		}
	}
	c.sort(function(a, b) {
		return a - b;
	});
	var l = 0;
	console.log(c);
	for (let i = 0; i < n; i++){
		if (i % 2 == 0){
			for (let j = n - 1; j > -1; j--){
				b[j][i] = c[l];
				matrixTable.rows[j].cells[i].innerHTML = c[l];
				l++;
			}
		}
		else {
			for (let j = 0; j < n; j++){
				b[j][i] = c[l];
				matrixTable.rows[j].cells[i].innerHTML = c[l];
				l++;
			}
		}
	}
	console.log(b);
}
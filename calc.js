let inputs = document.getElementsByTagName('input');
let text = document.getElementById('text');
let result = document.getElementById('result');
for (let i = 0; i < inputs.length; i++) {
	if (i == 15 || i == 0) {
		continue;
	}
	inputs[i].addEventListener('click', calculate);
}

function calculate() {
	text.innerHTML += this.value;
}
function sumItUp() {
	text.innerHTML = eval(text.innerHTML);
}
function remove() {
	text.innerHTML = '';
}

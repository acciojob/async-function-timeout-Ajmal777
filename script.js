const textField = document.getElementById('text');
const delayField = document.getElementById('delay');
const btn = document.getElementById('btn');
const div = document.getElementById('output');

btn.addEventListener('click', ()=>{
	const text = textField.value;
	const delay = delayField.value;
	display(text, delay);
})

async function display(text, delay){
	setTimeout(()=>{
		div.innerText = text;
	}, delay);
}
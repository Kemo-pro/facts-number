let fact = document.getElementById('fact');
let factText = document.getElementById('factText');
let numberInput = document.getElementById('numberInput');

// Function getFactAjax

function getFactAjax(){
let number = numberInput.value;

let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://numbersapi.com/'+number);

xhr.onload = function(){

if(this.status == 200 && number != ''){
fact.style.display = 'block';
factText.innerText = this.responseText
}

}
xhr.send()
}

numberInput.addEventListener('input', getFactAjax)
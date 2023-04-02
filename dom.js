
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';


var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
even[1].style.Color = '#3a8000';

for(var i = 0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#3a8000';
}
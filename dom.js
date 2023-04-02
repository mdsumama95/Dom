var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

var li = document.getElementsByTagName('li');
console.log(items);
console.log(items[1]);
li[1].textContent = 'Hello 2'
li[0].style.fontWeight = 'bold';
li[1].style.fontWeight = 'bold';
li[2].style.fontWeight = 'bold';
li[3].style.fontWeight = 'bold';
for(var i = 0; i <li.length; i++){
    li[i].style.backgroundColor ='#f4f4f4';
}
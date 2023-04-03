
var itemList = document.querySelector('#items');
//parent node
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);

// parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

//chilNodes
console.log(itemList.children);
itemList.children[1].style.backgroundColor = '#f4f4f4';

//firstChild
console.log(itemList.firstChild);
//firstelementchild
console.log(itemList.firstElementChild);

// nextsibling
console.log(itemList.nextSibling);
//
console.log(itemList.previousSibling);
//create div
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello div');
var newDivText = document.createTextNode('HEllo World');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

container.insertBefore(newDiv,h1);


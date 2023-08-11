//examine the document object
//console.dir(document);

//console.log(document.URL);
//console.log(document.title);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);


//console.log(document.forms);

//1. boarder in the title
//var header= document.getElementById('header-tile');
//var header= document.getElementById('main-header');

//header.style.borderBottom='solid 3px #000';

//2 make add item green

//var item= document.querySelector('.title');
//item.style.color='green';
//item.style.fontWeight='bold';

//make third element in the list green backgroud
// assignment 4

//var items= document.getElementsByClassName('list-group-item');
//items[1].style.backgroundColor='green';

//for(var i=0;i<items.length;i++){
  //  items[i].style.fontWeight='bold';
//}

//assignment 5

//using className
//var items= document.getElementsByClassName('list-group-item');
//items[4].style.backgroundColor='green';
//no effect



//using tagname
//var li= document.getElementsByTagName('li');
//li[4].style.color='green';
//li[4].style.backgroundColor='#f4f4f4';
//li[4].style.fontWeight='bold';

//assignment 6

//querySelector and querySelectorAll

//var header=document.querySelector('#main-header');
//header.style.borderBottom= 'solid 4px #ccc';

//var input= document.querySelector('input');
//input.value='hello world';

//var submit= document.querySelector('input[type="submit"]');
//submit.value='SEND';

//var item= document.querySelector('.list-group-item');
//item.style.color='red';

//var lastitem= document.querySelector('.list-group-item:last-child');
//lastitem.style.color='blue';

//var seconditem= document.querySelector('.list-group-item:nth-child(2)');
//seconditem.style.backgroundColor='green';

//var thirditem= document.querySelector('.list-group-item:nth-child(3)');
//thirditem.textContent='';

//Query Selector All
//var titles= document.querySelectorAll('.title');
//console.log(titles);
//var odd= document.querySelectorAll('li:nth-child(odd');
//for(var i=0;i<odd.length;i++){
  //  odd[i].style.backgroundColor='#f4f4f4';
//}

//var output= document.querySelectorAll('.list-group-item');
//output[1].style.color='green';
//output[2].textContent='';


//traversing the dom

var itemList = document.querySelector('#items');

//1. parentNode 
console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';

//2.parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//2. childNodes

console.log(itemList.childNodes);

//children is better than using childnodes because in childnodes, blank spaces are considered as 
//separate child.

//3.children
console.log(itemList.children);

//4.choose a particular element i.e item2 here
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//5. firstChild

console.log(itemList.firstChild); //got a textnode, that is the blank space
//firstchild is thereby not that useful
//instead use firstElementChild


//6 firstElementChild

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello world';

//7. lastChild
console.log(itemList.lastChild); //gives last text node in our case

//8 lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='bye world';

//9 nextSibling
console.log(itemList.nextSibling); //output is text

//10 nextElementSibling

console.log(itemList.nextElementSibling); //null here because it doesnot have a sibling


//11 previousSibling
console.log(itemList.previousSibling); //text

//12 previousElementSibling
console.log(itemList.previousElementSibling); //output is h2 title = items
itemList.previousElementSibling.style.color='green';

//13 creating dom elements and insert them
//createElement
//create a div

var newDiv= document.createElement('div');
//add className
newDiv.className="hello";
//add id
newDiv.id="hello1";
//add attribute
newDiv.setAttribute('title','hello div');

//create text node
var newDivText= document.createTextNode("Hello World");
//add text to div

newDiv.appendChild(newDivText);
//to add in the dom and not just in js
var container= document.querySelector('header .container');
var h1= document.querySelector('header h1');


console.log(newDiv);

//to change fontsize
newDiv.style.fontSize='30px';

container.insertBefore(newDiv, h1);





















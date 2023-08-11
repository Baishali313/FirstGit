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

var header=document.querySelector('#main-header');
header.style.borderBottom= 'solid 4px #ccc';

var input= document.querySelector('input');
input.value='hello world';

var submit= document.querySelector('input[type="submit"]');
submit.value='SEND';

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

var output= document.querySelectorAll('.list-group-item');
output[1].style.color='green';
output[2].textContent='';






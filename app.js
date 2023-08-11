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
var header= document.getElementById('main-header');

header.style.borderBottom='solid 3px #000';

//2 make add item green

var item= document.querySelector('.title');
item.style.color='green';
item.style.fontWeight='bold';

//make third element in the list green backgroud

var items= document.getElementsByClassName('list-group-item');
items[1].style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}
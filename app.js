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
// assignment 4

var items= document.getElementsByClassName('list-group-item');
items[1].style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}

//assignment 5

//using className
//var items= document.getElementsByClassName('list-group-item');
//items[4].style.backgroundColor='green';
//no effect



//using tagname
var li= document.getElementsByTagName('li');
li[4].style.color='green';
li[4].style.backgroundColor='#f4f4f4';
li[4].style.fontWeight='bold';




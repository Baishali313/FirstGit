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
item.style.font='bold';
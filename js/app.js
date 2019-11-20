'use strict';
// console.log('hello form Js');
// $('section').html('hello from JQuery');
var section = document.getElementById('list');
var ul = document.createElement('ul');
$('#list').append(ul);

function Person(name,age){
  this.name = name;
  this.age = age;
  Person.all.push(this);
}
Person.all = [];
//creating an array of objects here just to chack i can render the data
let arr = [
  {
    "name" : "Mona",
    "age" : 24,
  },
  {
    "name" : "Mahmuod",
    "age" : 24,
  },
  {
    "name" : "John",
    "age" : 24,
  },
  {
    "name" : "JB",
    "age" : 24,
  },
];

arr.forEach((value, idx) => {
  let guy = new Person(arr[idx].name,arr[idx].age);
});

function render(){
  for(var i = 0 ; i < arr.length ; i++){
    var li = document.createElement('li');
    li.textContent = arr[i].name;
    ul.appendChild(li);
  }
}

// render();

$.get("data/peopl-list.json", function(result){



  $.each(result, function(i, field){
    console.log('result : ', result);
    var li = document.createElement('li');
    li.textContent = result.name;
    $('section').append(li);
  });
});


// console.log('Person.all : ', Person.all);
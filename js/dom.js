const element = document.createElement('div');

document.body.appendChild(element);
element.textContent = 'This element created by DOM APi';
/////////////////////////////////////////////////////////

let element2 = document.createElement('div');
element2.className = 'inner';
element2.textContent = 'This element also is created by DOM API ';
element.appendChild(element2);
//////////////////////////////////////////////////////////////////

element2.style.color = 'red';
////////////////////////////////////////////////////////////

element.addEventListener('click', function() {
  console.log('This text says that everything is ok');
})
/////////////////////////////////////////////////////////////

let linkToSite = document.createElement('a');
linkToSite.href = 'https://www.loftschool.com';
document.body.appendChild(linkToSite);
linkToSite.textContent = 'https//www.loftschool.com';
linkToSite.addEventListener('click', function(event){
console.log('I just clicked on ' + linkToSite.href);
event.preventDefault();
  });

//////////////////////////////////////////////////// 

let inputField = document.createElement('input');
let buttonField = document.createElement('button');
buttonField.textContent = 'Button'
document.body.appendChild(inputField);
document.body.appendChild(buttonField);
buttonField.addEventListener('click', function(){
  console.log(inputField.value);
})


////////////////////////////////////////////
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
const computed = getComputedStyle(items);

right.addEventListener("click", function(e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);
  if(!currentRight){
    currentRight = 0;
  }

  if (currentRight < 500){
    items.style.right = currentRight + 100 + 'px';
  }
  // напишите здесь код, который сдвигает items на 100px вправо
  // если items уже сдвинут на 5 элементов впарво, то больше элементы сдвигать не надо, т.к. вы достигли конца списка
});

left.addEventListener("click", function(e) {
    e.preventDefault();
let currentRight = parseInt(computed.right);
if(!currentRight){
  currentRight = 0;
}

if(currentRight > 0){
  items.style.right = currentRight - 100 + 'px';
}
  // напишите здесь код, который сдвигает items на 100px влево
    // если item находится в самом начале, то больше элементы сдвигать влево не надо, т.к. вы достигли начала списка
});


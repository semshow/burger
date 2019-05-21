var name = 'Alex';
console.log(name);
var name = 'Marie';
console.log(name);
///////////////////////
if (2 + 2 == 5) {
  console.log('Hello');
}
else {
  console.log('Bye');
}
/////////////////////////
for(i = 0; i < 10; i++) {
  console.log(i);
}
////////////////////////////
function sum(p1,p2,p3){
  var result = p1 + p2 + p3;
  return result;
}

var total = sum(10,20,30);
console.log(total);

var total = sum(20,30,40);
console.log(total);
////////////////////////////

var array = ['hello','loftschool'];
array.push('I learn','Javascript');
console.log(array.length);

for(i = 0; i < array.length; i++){
  console.log(array[i]);
}
/////////////////////////////////

var arrayTwo = [1,30,120,140,67,78,111,25,89,780];

for(i = 0; i < arrayTwo.length; i++){
  if(arrayTwo[i] > 100){
    console.log(arrayTwo[i]);
  }
}
//////////////////////////////////////////

var person = {
  name: 'alex',
  lastName: 'dermenji',
  age: '28'
}
console.log(person.name, person.lastName, person.age);
person.sex = 'men';
console.log(person.sex);

////////////////////////////////////////////


function hello(human){
  console.log('Hello, my name is ' + human.name +' '+ human.lastName + ' I am ' + human.age + ' years old')
}
var text = hello(person);
console.log(text);
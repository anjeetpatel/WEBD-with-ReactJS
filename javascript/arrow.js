//arrow function for single expression
const squre = (x) => x * x;
console.log(squre(4)); //16

//arrow function with two parameters

const add = (a, b) => a + b;
console.log(add(3, 5));

//arrow function with object literal
const person = (name, age) => ({
  name: name,
  age: age,
});

const personx = person("Anjeet", 20);
console.log(personx); // { name: 'Anjeet', age: 20 }

const createperson = (firstName, birthYear) => {
  return {
    firstName: firstName,
    birthYear: birthYear,
  };
};

const persone = createperson("ansk", 4454);
console.log(persone);

const obj4 ={
    j:78,
    h:function(){
        const i =()=>{
            console.log(e.log(this));
            
        }
    } 
}
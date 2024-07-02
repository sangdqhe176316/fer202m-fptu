import logo from './logo.svg';
import './App.css';

//Arow function
const sum = (a,b)=>{
  const s = a+b;
  console.log(`${a}+${b}=${s}`);
}
sum(3,6);
//Template Literal
const name = "Hello";
console.log(`${name}`);
//Destructuring Assignment
const [x,y] = [1,2];
const {a,b} = {a:1, b:2};
//Class
class Rectangle{
  constructor(height, width){
    this.height=height;
    this.width=width;
  }
  getArea(){
    return this.width*this.height;
  }
}
class Square extends Rectangle{
  constructor(side){
    super(side,side);
  }
}
const rest = new Rectangle(10,15);
console.log(`Area Rectangle: ${rest.getArea()}`);
const square = new Square(20);
console.log(`Area square: ${square.getArea()}`);

const person = {
  name: "abc",
  age: 18,
  greet:function(){
    console.log(`Hello ${this.name} - ${this.age}`)
  }
}
person.greet();
const sumALL=(...numbers)=>{
  return numbers.reduce((sum, current)=>sum+current,0)
};
console.log(sumALL(1,2,3,4,5,6,7));
//Module
//file lib.js
// export const sqrt = Math.sqrt;
// import {sqrt} from 'lib';
//Enhanced array manipulation
const numbers = [1,2,3];//map, filter,reduce
const doubled = numbers.map(n=>n*2);
console.log(doubled);
//Promise
const promise = new Promise((res, rej)=>{
  //Thuc hien cac cong viec va loi goi ham  
});
//Enhanced Obj manipulation
const obj1 = {a:1};
const obj2 = {b:2};
const obj3 = Object.assign({},obj1,obj2);
//Default parameter
function log(mes="No Mess"){
  console.log(mes);
}
log();
//Rest and Spread Operator
function App() {
  return (
    <>
    </>
  );
}

export default App;

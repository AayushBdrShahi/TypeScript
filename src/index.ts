// console.log("hello world")
// console.log("its working fine")


// let age: number = 10;
// if(age<50){
//     age+=10;
// }
// console.log(age)


////// The Any type

// let sales: number= 123_45_67;
// let course: string = "Typescript";
// let is_published: boolean=true;
// let level;

// function render(value: any):void{
//     console.log(`Value: ${value}`);
// }

// render(1);
// render("Aayush")
// render({key :"value"})

 
/// Arrays  
// Number

// let number: number[] = [1,2,3,4]
// console.log(number);

/// STRING

// let names: String[]=["Aayush","Bahadur","Shahi"]
// console.log(names);

//Array of OBJECTS

// interface Person{
//     name:string;
//     age:number;
// }

// let people:Person[]=[
//     {name:"Aayush",age:22},
//     {name:"Shahi",age:20}
// ];

// people.forEach(n => {
//     console.log(n.name)
// })

// let NAME = people.map(a=> a.name)
// console.log(NAME);

// const firstName = people[1].name
// console.log(firstName)

// const Age = people[0].age
// console.log(Age)


// Using Array METHOD

// let a: number[]= [1,2,3,4,5];

// a.forEach(n =>{
//     console.log(n);
// })

// const result = a.map(b => b*2)
// console.log(result)


/// Multi Dimesnional

// let a: number[][]= [[1,2,3,4],[5,6,7,8,],[9,10]];

// console.log(a[0])

// Tuples


/// iT CAN CONATAIN MULTIPLE TYPES IN A ASPECIFIC ORDER


// let person:[String,number] ;

// person=["Aayush",22]
// console.log(person[0])
// console.log(person[1])

// let rgb:[number,number,number] =[255,0,0];
// rgb.push(255);
// console.log(rgb);


// Tuple with Optional Elements

// let userInfo:[string,number?,boolean?]
// userInfo=["Aayush"]
// userInfo=["Bob",30]
// userInfo=["charlie",33,true


// let number:[number,...string[]];
// number=[1,"Two","Three","Four"]
// console.log(number)

// let number:[string, ...number[]];

// number=["aayush",1,2,3,4,5]
// console.log(number)

//Enums


//. Allow yout to define a set of named constants that can be numeric or string-based ex day of the week
// const small =1;
// const medium =2
// const large=3


// enum Size{
//     Small,
//     Medium=1,
//     Large,
// }

// let size: Size = Size.Small
// console.log(size);

// enum StatusCode{
//     Success =200,
//     NotFound = 404,
//     InternalServerError =500
// }

// let statu: StatusCode= StatusCode.NotFound
// console.log(statu)


// enum Direction{

//     Up = 1,
//     Down = "Down",
//     Right = "Right",
//     Left = "Left"
// }

// let move:Direction =Direction.Up
// console.log(move)



/// Function


// function calculateTax(income:number){
//     console.log(income)
// }

// calculateTax(5)

// function student(name:string,rollno:string):string{
//     return (`My name is${name}, and My roll no is ${rollno}`)
// }

// const resutl =student("Aayush","Two")
// console.log(resutl)

/// Rest parameters
// reduce add all the number into the array


// function addNumbers(...numbers: number[]):number{
//    return numbers.reduce((sum,current) => sum+current,0)
// }

// const result =addNumbers(1,2,3,4,5,6)
// console.log(result);

// let myFunc: (x:number, y:number) => number;

// myFunc=function(a:number,b:number):number{
//     return a+b
// }

// console.log(myFunc(5,3))


//Object

// let student:{
//     id:number;
//     name:string;
// }={
//     id:1,
//     name:"Aayush"
// };

// console.log(student.name)


// interface Student{
//     name:string;
//     roll:number;
// }

// let student:Student= {
//     name:"Aayush",
//     roll:40
// }

// console.log(student.roll)


/// ??????? optional

// interface person{
//     name:string;
//     caste:string;
//     isAdmin?:boolean;
// }

// let user1:person={
//     name:"Aayush",
//     caste:"Shahi",
// }

// let user2:person={
//     name:"Hero",
//     caste:"HAHA",
//     isAdmin:true,
// }

// console.log(user1.name)
// console.log(user2.isAdmin)

/// readOnly
// interface Student{
//     name:string;
//     readonly roll:number;
// }

// let student:Student={
//     name:"Aayush",
//     roll:12
// }
//  student.name="Aayushdsff"
//  console.log(student.name)
//  console.log(student.roll)



///// INDEX SIGNATURES


// interface stringArray{
//     [index:number]:string;
// }

// let myarray: stringArray=["Aayush","shahi","hero"]

// console.log(myarray[0])
// console.log(myarray[1])

/////////////////////Advanced types /////////////




///////// Aliases



// type Student = {
//     name:string;
//     roll:number;
// }

// let student: Student ={
//     name:"Aayush",
//     roll:20,
// }

// console.log(student.roll)


////// union types


// function printId(id:string |number){
// if(typeof id === "string"){
//     console.log(`ID: ${id.toUpperCase()}`)
// }
// else{
//     console.log(`ID:${id.toFixed(2)}`)
// }
// }
// printId("aa")
// printId(1)

// let values:(number|string)[]=[1,2,"Aayush","Shahi"]
// values.push(5)
// values.push("shahi")
// console.log(values)

////////// Intersections


// interface Student{
//      name:string;
//      caste:string;
// }
// interface Address{
//     roll:number;
//     city:string
// }

// type School = Student & Address

// let school:School={
//     name:"Aayush",
//     caste:"shahi",
//     roll:20,
//     city:"KTM"
// }

// console.log(school.name)
// console.log(school.caste)
// console.log(school.city)

///Literal Types


// type Direction = "North"|"West"|"East"|"South";

// function move(direction:Direction){
// console.log(`Move:${direction}`)
// }
// move("West")


// type Dice = 1|2|3|4|5|6;

// function rolldice():Dice{
//     return Math.floor(Math.random() *6)+1 as Dice
// }
// let result = rolldice()
// console.log(`The num
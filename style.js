//let age = 25;
//let year = 2023;

//log things to console
//console.log(age, year);

/*age = 30;
console.log(age);

const points = 100;

console.log(points);*/

//var score = 75;
//console.log(score);





//console.log('hello, world');

/*let email = '224cherrmann@frhsd.com';
console.log(email);

let firstName = 'Chris';
let lastName = 'Herrmann';

let fullName = firstName + ' ' + lastName;

console.log(fullName[2]);

console.log(fullName.length);

console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);*/






//let email = '224cherrmann@frhsd.com';

//let results = email.lastIndexOf('n');

//let results = email.slice(0,5);

//let results = email.substring(4,14);

//let results = email.replace('m', 'w');

//let results = email.replace('n', 'w');


//console.log(results);





// let radius = 10;
// const pi = 3.14;

//console.log(radius, pi)

//math oper +, -, *, /, **, %

//console.log(10 /2);
//let result = radius % 3;

//let result = pi * radius**2

//order of operations - B I D M A S

//let result = 5 * (10-3)**2;

//console.log(result);

//let likes = 10;

//likes = likes+10;
//likes++;
//likes--

//likes += 10;
//likes -=5;
//likes*=2;
//likes /= 2;


//console.log(likes);

//NaN - not a number

//console.log(5 / 'hello');
//console.log(5 * 'hello');

//let result = 'the blog has ' +likes + ' likes';
//console.log(result);






//const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// //let result = 'The blog called '+ title+ ' by ' +author+'has '+likes+' likes';

// let result = `The blog called ${title} by ${author} has ${likes} likes`;

// console.log(result);


// let html = `
// <h2>${title}</h2>
// <p>${author}</p>
// <span>This blog has ${likes} likes</span>`;

// console.log(html);








// let ninjas = ['shaun' , 'ryu', 'chun-li'];


// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['shaun', 'crtystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

//array result

// let result = ninjas.join(',')

// console.log(ninjas);
// let result = ninjas.indexOf('chun-li');
//let result = ninjas.concat(['ken', 'crystal']); 
// let result = ninjas.push('ken');
// result = ninjas.pop();

// console.log(ninjas);






//let age = null;

//console.log(age, age + 3, `the age is ${age}`);




// console.log(true, false, 'true', 'false');

// let email = '224cherrmann@frhsd.com';
// let names = 'cherrmann';

// // let result = names.includes('cherrmann');

// // console.log(result)

// let age = 25;

// // console.log(age == 25);
// // console.log(age == 30);
// // console.log(age != 30);
// // console.log(age < 30);
// // console.log(age >= 25);

// console.log(names == 'cherrmann');
// console.log(names > 'bob');

// console.log(age === '25');

// let result = Boolean('');

// console.log(result, typeof result);




//VIDEO THREE STARTS HERE

// for(let i = 0; i < 5; i++){
// console.log('in loop', i)
// };

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//     //console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// };



// let i = 0;

// while(i < 5){
//     console.log('in loop: ', i);
//     i++;
// }

// const names = ['shaun', 'mario', 'luigi'];

// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// let i = 5;

// do{
//     console.log('val of i is: ', i);
//     i++;
// } while(i < 5);




// const age = 20;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'shun-li', 'yoshi'];

// if(ninjas.length > 3){
//     console.log("that's a lot of ninjas");
// }

// const password = 'password';

// if(password.length >= 8){
//     console.log('that password is long enough')
// }



// const password = 'password';

// if(password.length >= 12 && password.includes('@')){
//     console.log('password is very strong');
// }
// else if(password.length >= 8 && password.includes('@')){
//     console.log('password is good');
// } else {
//     console.log('password is not good enough');
// }



// let user = false;

// if(!user){
// console.log('you must be logged in to continue')
// }

// console.log(!true);
// console.log(!false);

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('your score: ', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats you got a 100');
//         break;
//     }

// }


// const grade = 'D';

// switch(grade){
//  case 'A':
//     console.log('you got an A')
//     break;
//  case 'B':
//     console.log('you got an B')
//     break;
//  case 'C':
//     console.log('you got an C')
//     break;
//  case 'D':
//     console.log('you got an D')
//     break;
//  case 'E':
//     console.log('you got an E')
//     break;
//  default: 
//     console.log('You failed LMAO')
// }



// let age = 30;


// if(true){
//     let age = 40;
//     let name = 'shaun';
//     console.log('inside 1 codeblock', age, name)
    
//     if(true){
//         let age = 50;
//         console.log('inside 2 codeblock', age);
//     }
// }



// console.log('outside codeblock', age)


// function greet(){
//     console.log('hello there');
// }

// const speak = function(name = "luigi", time = "night"){
//     console.log(`good ${time} ${name}`);
// };

//greet();

// speak();

// const calcArea = function(radius){
//     return 3.14 * radius**2;
    
// }

// calcArea(5);

// const calcArea = radius => 3.14 * radius**2;



// const area = calcArea(5);
// console.log('area is:', area);


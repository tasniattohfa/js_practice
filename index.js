console.log('Hello world' ,   'whatssup???');



let price = 210;

const name='farha';

// const can not be changed, let can be changed

console.log(name , price);
 
price = 500;

let isMarried = false;

let color = undefined;

console.log(typeof color);

let s= null;

console.log(typeof s);



console.log(typeof isMarried);


console.log(name , price);

console.log( typeof name);


/*
console.log(user);

console.log(user.name);

console.log(user['age']);
*/

let friends =['murgi','kaua'];

console.log(friends);

console.log(friends[1]);

console.log(typeof friends);

friends.length

console.log(friends.length);

// js funcs

function showMyName()
    {
        console.log('Main hu don');
    }


showMyName();


function showMyName(name)
    {
        console.log('Main hu don '+ name);
    }


showMyName('reti');
showMyName('lub');


// sum


// template literals


let msg =`hello
how are u?`;

console.log(msg);
console.log( `${1+1}`);


//practise



// operators

let num1=5;
let num2=10;

console.log(num1+num2);
console.log(num1**num2);
console.log(num1 % num2);
console.log();
console.log();
console.log();
console.log();
console.log();

// assign operator

let dam=10;
console.log(dam!='10');
// 
let murgi = 450;
if(murgi>300)
{
    console.log('onk dam');
}
else
{
    console.log('dam thik ase');

}

// switch case

let colour='blue';

switch(colour)
{
    case 'red':
        console.log('yes Lal');
        break;
        case 'green':
        console.log('not Lal');
        break;

        default:
            console.log('colour nehi pata');

};

function fizzbuzz(num)
{
    if(num%3==0 && num%5==0)
    {
        console.log('fizzbuzz');
    }
    else if(num%3==0)
    {
        console.log("fizz");
    }
    else if(num%5==0)
    {
        console.log("buzz");
    }
    else
    {
        console.log("hoy na");
    }
};

fizzbuzz(49);
fizzbuzz(15);
fizzbuzz(18);
fizzbuzz(40);

//

function leapyear(year){

    
    if(year%400==0)
    {
        console.log('yes');
    }
    else if(year%4==0 && year%100!=0)
    {
        console.log("yes");
    }
    else
    {
        console.log(" na");
    }

}

leapyear(2016);
leapyear(2019);
leapyear(1600);

// loop
/*
for(i=0; i<=5; i++)
{
        console.log('hello world!' ,i);
}
*/

let i=0;

while(i<3)
{
    console.log("lalala");
    i++;
}


console.log(i);
let murgi_1=2;

do
{
    console.log("murgi nai",murgi_1);
    murgi_1--;
}

while(murgi_1>0);

// for in loop

const manush = 
{
    name:'kaua',
    age:3,
};

for(let key in manush)
{
    console.log(key,manush[key]);
}


numb=[1,2,3,4,5];
for(let index in numb)
{
    console.log(index,numb[index]);
}
//

for(let key of numb)
{
    console.log(key);
}
//
for(k=0; k<=5; k++)
{
    if(k%2===1){continue;}

        console.log('hello world!' ,k);
}
//
for( hen=1;hen<9;hen++)
{
    for(murga=1;murga<4;murga++)
    {
        console.log('matching',hen,murga);
    }
}
//

function odd_even(ind){
    if(ind%2===0)
    {
       let s= console.log('even');
       return s;
    }

    else 
    {
        let s= console.log('odd');
        return s;
    }
}


odd_even(5);

let prob = [1, 3, 4, 5, 9];
let jog = 0;

for (let j = 0; j < prob.length; j++) {
    jog += prob[j];
}

console.log(jog);

//

function prime(nom) {
    for (i = 2; i <= nom - 1; i++) {
        if (nom % i === 0) {
            console.log('nehi');
            return;
        }
    }
    console.log("ha");
}

prime(25);
//
let con='bdlaredh';
console.log(con.charAt(4));


//

let r= 'please repeat after the tutorial';

console.log(r.charAt(6));
console.log(r.charCodeAt(2));
console.log(r.toLowerCase());
console.log(r.toUpperCase());
console.log(r.includes('after',18));
console.log(r.startsWith('please'));
console.log(r.endsWith('al',12));
console.log(r.search('afteru'));
console.log(r.indexOf('al'));
console.log(r.lastIndexOf('al'));
//

let temp=[1,2,3];
console.log(typeof temp);
console.log( typeof temp.toString());

m1='hello';
m2='  he';
m3='  bye bye';


let m= m1 + m2 +m3;

let t= m1-m2;

console.log(m);
console.log(t);
console.log(r.split('',3));
console.log(r.slice(2,7));
console.log(r.slice( 0,4));
console.log(r.slice(-5,-1));

console.log(r.substring(0,6));
console.log(r.substr(1,7));

let w='murgi \ kaua kaua kaua'
console.log(w);


console.log('hello    '.trim()
);

var str1 = "Hello ";
var str2 = "morioh!";
var res = str1.concat(str2);
console.log(res);




let user11 = {
    name:'tara',
    age:22,
    hobby: 'reading'
};

console.log(user11);
user11.email ='t@gmil.com';
user11.phone='01718881881';
console.log(user11);
user11.age=2;
console.log(user11);
delete user11.age;
console.log(user11);




//

let person ={
    name:'tayeba',
    age:23,
    isMarried:false,
    homeAddress:{long:32,
        lat:34,
    name:( 'Rawshan Khan Road, South Alipur,Faridpur' )},
    friends:['murgi','kaua'],
   // calcuAge: function(age)
    //{
   //     console.log(`${this.age}`);
   // }
};

console.log(person);
//
//person.calcuAge();

for(let key in person)
{
    console.log(person,person[key]);
}

console.log(Object.values(person));
console.log(Object.keys(person));

///

let morog =
{
    nam:'rafa',
    age:1,
    fav_movie:{
        lyricist:'a',
        name:'rafu'
    }
}
;
const { nam, age, fav_movie } = morog;

console.log(nam);        // Output: rafa
console.log(age);         // Output: 1
console.log(fav_movie);
console.log(nam);

const { lyricist, name:title} = fav_movie;
console.log(title);

let doctor=
{
    naam:'toshiba',
    designation:'intern',
    clinic:
    {
        board_name:'ma_clinic',
        address:"lapataganj"
    },
    operation: function()
    {
        console.log(`${this.designation} started operation`);
    }
}

doctor.operation();
/*
for(let prop in doctor)
{
    console.log(doctor[prop]);

}
*/

//clone an obj

let task= 
{
    task_name: 'task1',
    time:1 ,
    people:3
}

let task_copy= {};
for(let key in task)
{
    task_copy[key]= task[key];
    console.log(key,task_copy[key]);

}
;


 const kak =Object.assign({},task);
 console.log(kak);
const kak1={...task}
console.log(kak1);
console.log(Math.round(5.6));


//json for client to server & vice versa
///json can not have func,use ''

const jd =JSON.stringify(kak);
console.log(jd);
console.log(JSON.parse(jd)//parse korle back to js
);

console.log(typeof typeof 1);


let fuu=['kak','moyur'];
fuu.unshift('chil') //shuru te add
fuu.splice(3,0,'kokil') //majhe add
fuu.push('tia'); ///last e add
fuu.shift() //shuru theke bad
fuu.pop() // last e bad
fuu.push('chil');
fuu.splice(2,3)
console.log(fuu);


function print(str){
    console.log("I am a"+ str);
}

print("Sara");




//sum


function sum(num1,num2,num3=8){
    const  sum = num1+num2+num3;
    return sum;
}
 let b= sum(9,3)
console.log(b);


//
const sumEXp= function sum(num1,num2,num3=8){
    const  sum = num1+num2+num3;
    return sum;
}
;
let bc= sum(9,3)
console.log(bc);
//arrow func
const suE=(num1,num2,num3=8) =>  num1+num2+num3;

;
console.log(suE(1,2));

const multi = (numbu)=> numbu*2;
console.log(multi(2));


//using args
const multip = (...args)=> args;
console.log(multip(2*2*3*4*5));

const area=(numbu1)=> Math.PI*numbu1**2;
console.log(area(5));

const maxargument=(...args)=>Math.max(...args);
console.log(maxargument(2,3,4,5,9,11));
//
console.log(fuu.includes('kak'));
console.log(fuu);
console.log(fuu.indexOf('kak'));

//
const docs=
[
    {name:'rabeya',age:25},
    {name:'raBA',age:29},
    {name:'reya',age:28},

]
const result =docs.find(function(docs)
{
   return  docs.name=='reya';
})

console.log(result);

const result2 =docs.findIndex(function(docs)
{
   return  docs.name=='reya';
})

console.log(result2);


let arr=[1,19,15,3,4,5,6,7]

for(loop=0; loop < arr.length; loop++)
{
    console.log(arr[loop]);
}

for(let key in arr)
{
    console.log(arr[key]);
}

for(let key of arr)
{
    console.log(key);
}

arr.forEach((arr,key)=>console.log(arr,key))
arr.sort((a, b) => a - b);
// best=arr.reverse();
// console.log(best)
//jhamela karon sort aage string banaye ney..
console.log(arr.reverse());
console.log(arr.sort());

docs.sort(function(d1,d2)
{
    return d1.age - d2.age;
    
})
console.log(docs)

docs.sort(function(d1,d2)
{
return d1.age -d2.age
}).reverse();

console.log(docs);
//arrow func
docs.sort((d1,d2)=> d1.age - d2.age);
console.log(docs);











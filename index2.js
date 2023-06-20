//shob positive
const num=[1,2,3,4,5];
const result3=num.every((num)=> num>0
);
console.log(result3);

//koyekta

const numbi=[1,2,3,4,5];
const result4=num.some((numbi)=> numbi>0
);
console.log(result4);

//shob even


const numberi=[1,2,3,4,5];
const result5=num.some((numberi)=> numberi%2===0
);
console.log(result5);


//slice diye extract kore, split diye bad dewao jay nao jay shathe add kora jay

const tara1=[1,3,5];
const tara2=[2,4,6];

const resu=tara1.concat(tara2)
console.log(resu);

const slicedResu=resu.slice(3,5);
console.log(slicedResu);

console.log(...resu);

//clone kortesi
const copyresu =[...resu];
console.log(copyresu);

let taru=[...tara1,...tara2];
console.log(taru);

// array to string

let ri=resu.join(' ');
console.log(ri)

// string to array

let stru='we are learning array methods'

let spi=stru.split(' ');
console.log(spi.join('_'))

//map imp****** array type e return er jnno map

let daku=[1,2,4];

console.log(daku.map((num)=>num*2));


let dakat=[
    {name:'t',age:24},
    {name:'te',age:28},
    {name:'tq',age:29},
]
;

console.log(dakat.map( dakat=>dakat.name));
// ekhane dakat for accessing all the dakats..

console.log(dakat.map(dakat => dakat.name));

console.log(dakat.map(dakat => dakat.age));

// filtering ... filter korum

let neh=[1,2,3,4];
let oddneh=[];

for(let num of neh){
    if(num%2==1)
    {
        oddneh.push(num);
    }
}
console.log(oddneh);

// filter function ase map er motoi

//dekhi kivabe hoyy..

const nehi= neh.filter(function(numbu){
    return numbu%2==0;

});
console.log(nehi);

console.log(neh.filter(numbu=> numbu%2==0));

console.log(neh.filter(numbu=> numbu%2==1));

//array method reduce

//sum kore dekhbo

console.log(neh.reduce((sum,numbu) => sum+numbu,0));
//
//same length array lagle map, specific kisu lagle filter, 
//sum lagle reduce use korbo..

const fighter = [
    {name:'John',combatSkill:80},
    {name:'Mary',combatSkill:70},
    {name:'Smith',combatSkill:90},
];

console.log(fighter.map(fighter=> fighter.name + " "+ fighter.combatSkill));
console.log(fighter.filter(fighter=>fighter.combatSkill==80));
console.log(fighter.reduce((sum,f)=> sum + f.combatSkill,0));

// odd sum

let odds=[10,11,12,13];
let sumu=0;
for(let num of odds)
{
    if(num%2==1)
    {  sumu=sumu+num;}
  
}
console.log(sumu);






console.log(odds.filter((num)=> num%2==1).reduce((sum,num)=>sum+num,0));

console.log(Math.max(...odds.filter((num)=>num%2==0)));
const books = [
    {name: "book1", pp: 450, rating: 4.1},
    {name: "book2", pp: 470, rating: 5},
    {name: "book3", pp: 350, rating: 3.2},
    {name: "book4", pp: 600, rating: 4.5},
];

// console.log(books.filter(b => b.pp < 500 && b.rating > 4));
// console.log(books.sort((a, b) => b.rating - a.rating));


console.log(books.map(book=>book.name));

// data structures

// set

const set = new Set();

set.add(1);
set.add(2);
set.add(7);

console.log(set);

set.delete(2)
console.log(set);
set.forEach((el)=>console.log(el));
set.clear();

//

// map ds


let map = new Map();
map.set('mango','am');
map.set('banana','kola');
map.set('guava','peyara');
map.set('score','100');

console.log(map);

console.log(map.has('orange'));

console.log(map.values());
console.log(map.keys());
console.log(map.entries());

map.clear();

import addition from "./math.js";      

console.log(addition(8,9));


'use strict';

//for in loop

const todos=['','buy milk', 'check e-mail','play th piano']; //''추가해도 0번째는 공백으로 출력
for(const x in todos){
    console.log(`${x}번째 할 일 : ${todos[x]}`);
} 
//for (const key in object) {
    //if (Object.hasOwnProperty.call(object, key)) {
        //const element = object[key];
        
    //}
//}

//for of loops
const Todos=['buy milk', 'check e-mail', 'play the piano'];
for(const todo of Todos){
    console.log(`TODO : ${todo}`);
}

//for loops
for(let n=1; n<5; n++){
    console.log(`No.${n}`);
}

let output = 0;
for(let i = 1; i<=100; i++){
    output +=i
}
console.log(`1~100까지 숫자를 모두 더하면 ${output}입니다.`);

let out=0;
for(let k=1; k<=100; k++){
    out *= k
}
console.log(`1~100사이 모두 곱한 값은 ${out}`);

const TODO =['','buy milk','check e-mail','play the piano']; //->0번째는 공백이라 출력 X
for(let I=1; I<TODO.length; I++){
    console.log(`${I}번째 할 일:${TODO[I]}`);
}

const Do=['buy milk','check e-mail','play the piano'];
for(let N=Do.length-1; N>=0; N--){
    console.log(`${N}번째 할 일: ${Do}`);
}

const DO=['','A','B','C','D'];
for(let D=0; D<DO.length-1; D++){
    console.log(`${D}: ${DO}`);
}

for(let B=3; B>0;B=B-2){
    console.log(`inline variable for: ${B}`);
}

//while loops
let Y=3;
while(Y > 0){
    console.log(`while${Y}`);
    Y--;
}

//let m=0;
//while(true){
  //  console.log(`${m}번째 반복`)
    //m=m+1}

//let M=1;
//while(confirm('계속 진행하겠습니까?')){
    //alert(`${M}번 째 반복중ㅋ`);
    //M=M+1;}

// for&while nested loop
let a=0;
const array=[1,2,3,4,5];
while(a<array.length){
    console.log(`${a}: ${array[a]}`);
    a++
}

for(let c=1; c<5; c++){
    for(let C=1; C<5; C++){
        console.log(`c=${c}, C=${C}`);
    }
}

//break keyword



//continue

for(let z=0; z<5; z++){
    continue;
    alert(z);
} //->실행 X

let OUT =0
for(let Z=1; Z<=10; Z++){
    if(Z%2===1){
        continue;
    } OUT+= Z
}
console.log(OUT);  

for(let g = 1; g<=5; g++){
    console.log(`No.${g}`);
}

let PUT = 0;
for(let G=0; G<=100; G++){
    PUT += G;
}
console.log(`1~100합${PUT}`);

const doit= ['','A','B','C','D','E'];
for(let f =1; f<doit.length; f++){
    console.log(`${f}. ${doit[f]}`);
}



let w=0;
for(let e=1; e<=10; e++){
    if(e%2===1){
        continue;
    }w+=e
}
console.log(w);

let t = ''
for(let u=1; u<10;u++){
    for(let p=0; p<u; p++) {
        t+='*';
    }
    t+='\n'
}
console.log(t);

let r ='';
for(let q=0; q<15; q++){
    for(let s=15; s>q; s--){
        r+=' '; // 공백..중요...
        
    }
    for(let h=0; h < 2*q-1; h++){
        r+='*';
    }
    r+='\n'
    
}
console.log(r);

const arraY=['apple','peer','banana','mandarin'];
console.log('# for in loops');
for(const g in arraY){
    console.log(`${g}: ${arraY[g]}`);
}

for(const g in arraY){
    console.log(g);
}

console.log('# for of loops');
for(const G of arraY){
    console.log(G);
}

for(const G of arraY){
    console.log(`list: ${G}`);
}

const arr =[];
for(let A=0; A<3; A++){
    arr.push((A+1)*3);
}
console.log(arr);

let V=1;
for(let X = 1; X<=100 ; X++){
    V*=X;
}
console.log(V);

let oouutt = '';
const size=5;
for(let qq=1; qq<=size; qq++){
    for(let ww=size; ww>qq; ww--){
        oouutt+=' '
    }
    for(let ee=0; ee<2*qq-1; ee++){
        oouutt+='*'
    }
    oouutt='\n'}
    for(let qq=size-1; qq>0; qq--){
        for(let ww=size; ww>qq; ww--){
            oouutt+=' '
        }
        for(let uu=0; uu<2*qq-1; uu++){
            oouutt+='*'
        } oouutt+='\n'
    }

console.log(oouutt);


for(let aa=0; aa<11; aa++){
    if(aa%2===1){
        continue;
    }
    console.log(`q1.${aa}`);
}


for(let xx = 0; xx<=10; xx++){
    if(xx>8){
        break;
    }
    console.log(xx);
} 


let J =0;
while(confirm(`keep going?`)){
    J=J+1;
    alert(`No.${J}`);
}

for(let k =0; k<5; k++){
    for(let l=0; l<5;l++){
        console.log(`k=${k}, l=${l}`);
    }
}

for(let K=0; true; K++){
    alert('No.'+K);
    const keepGoing= confirm(`Keep Going?`)
    if(!keepGoing){
       break;
    }
}
alert(`The End`);


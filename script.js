// let anim = document.querySelector("#anim");
// let text="forent End Developer";
// let count = 0;

// setInterval(myfun,100);
// function myfun(){
//     anim.innerHTML = text.slice(0,count++);
//     if(count>text.length){
//         count = 0;
//     }    
// }

let sharif =document.getElementById("anim");
let content = "i am a student";
let counter = 0;
setInterval(function(){
    sharif.innerHTML = content.slice(0,counter++);
    if(counter>content.length){
        counter = 0;
    }
},100);
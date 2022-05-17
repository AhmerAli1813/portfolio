

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('#mynavbar');

menu.onclick = () =>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}
window.addEventListener("scroll" ,function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 0);});
const color = [
    '#1abc9c',
    '#16a085' ,
    '#2ecc71',
    '#17a2b8',
    '#27ae60'
]
function Createsquare(){
const section = document.querySelector('.profile');
const square = document.createElement('span');
square.classList.add('icons');
var size = Math.random() * 50;
square.style.width = size + 'px';
square.style.height = size + 'px';
square.style.left  = Math.random() * innerHeight + 'px';
square.style.left  = Math.random() * innerWidth + 'px';
 const bg = color[Math.floor(Math.random() * color.length)];
 square.style.background = bg;
section.appendChild(square);
setTimeout(()=>{
square.remove()
}, 5000);
}

function Createsquare1(){
    const section = document.querySelector('.img-border');
    const square = document.createElement('i');
    var size = Math.random() * 50;
    square.style.width = size + 'px';
    square.style.height = size + 'px';
    square.style.left  = Math.random() * innerHeight + 'px';
    square.style.left  = Math.random() * innerWidth + 'px';
     const bg = color[Math.floor(Math.random() * color.length)];
     square.style.background = bg;
    section.appendChild(square);
    setTimeout(()=>{
    square.remove()
    }, 5000);
    
    };
 setInterval( Createsquare , 150);
 setInterval( Createsquare1 , 150);
 

 function valid(){
    const group = document.querySelector('.group');
        const inputvalid = document.querySelector('.valid');
        inputvalid.classList.add('is-valid');
          group.classList.add('active');  
};
function valid2(){
        const group = document.querySelector('.group2');
        const inputvalid = document.querySelector('.valid2');
        inputvalid.classList.add('is-valid');
          group.classList.add('active');  
};

function valid3(){
    const group = document.querySelector('.group3');
    let inputvalid = document.querySelector('.valid3');
    inputvalid.classList.add('is-valid');
    group.classList.add('active');  
    
};
//   const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/  ;
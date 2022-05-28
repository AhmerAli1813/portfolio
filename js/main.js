

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('#mynavbar');

menu.onclick = () =>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}
window.addEventListener("scroll" , ()=>{
  navbar.classList.remove('active' , window.scrollY > 1050);
  menu.classList.remove('fa-times' , window.scrollY > 1050);
  menu.classList.add('fa-bars' , window.scrollY > 1050);
})
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
// block Animation 1st
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
// Blocks Animation2 
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
 
// form Valid 
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
//   const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/  ;)


// block Amination By anime.js
function blockAmination(){

    const BlockContainer = document.getElementById("blockAnimation");
    for( var x = 1;x<=10; x++){
        const block = document.createElement("div");
        block.classList.add("block");
        BlockContainer.appendChild(block)
        const bg = color[Math.floor(Math.random() * color.length)];
        block.style.background = bg;
  }

  anime({
  
    targets: '.block',
      translateX: function(){return anime.random( 700, 10)},
      translateY: function(){return anime.random( 50, -600)},
      scale: function(){return anime.random( 1, 3)
    
    },
    opacity:[0 ,1],
    duration:8000,
    delay:anime.stagger(100),
    loop:true
  })
}

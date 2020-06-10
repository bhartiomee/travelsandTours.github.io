burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
right_nav=document.querySelector('.right-nav');
nav_list=document.querySelector('.nav-list');
top_height=document.querySelector('.top')
second_Container=document.querySelector('.second-container')


burger.addEventListener('click',()=>{
    right_nav.classList.toggle('v-class-resp');
    nav_list.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    top_height.classList.toggle('res-change-top');
    second_Container.classList.toggle('res-change-secondContainer')
    
})



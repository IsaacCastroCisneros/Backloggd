//header
const menuBtn = document.querySelector('.nav-bar__mob-btn');
const container = document.querySelector('.nav-bar__container');

menuBtn.addEventListener('click',()=>
{
   container.classList.toggle('active');
}
)
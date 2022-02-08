//header
const menuBtn = document.querySelector('.nav-bar__mob-btn');
const body = document.querySelector('.body');

menuBtn.addEventListener('click',()=>
{
   body.classList.toggle('active');
}
)
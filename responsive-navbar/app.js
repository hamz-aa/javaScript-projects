
const midContent = document.querySelector('.mid-content');
const social = document.querySelector('.social');
const icon = document.querySelector('.icon')


window.onresize = function (){
  let width = window.innerWidth;
  
  if(width < 700){
    midContent.classList.add('invisible');
    social.classList.add('invisible');

    icon.classList.add('visible');
    icon.classList.remove('invisible');
    
    midContent.classList.remove('visible');
    social.classList.remove('visible');
  }
  else {
    midContent.classList.add('visible');
    social.classList.add('visible');
    
    icon.classList.add('invisible');
    icon.classList.remove('visible');

    midContent.classList.remove('invisible');
    social.classList.remove('invisible');
  }
}

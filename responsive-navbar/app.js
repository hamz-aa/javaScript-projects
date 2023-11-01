
const nav = document.querySelector('.nav-getter');
const container = document.querySelector('.container-getter');
const logo = document.querySelector('.logo-getter');
const midContent = document.querySelector('.mid-content-getter');
const social = document.querySelector('.social-getter');
const icon = document.querySelector('.icon');
const closeIcon = document.querySelector('.close-icon');
const midContentUl = document.querySelector('.mid-content-ul-getter');
const socialUl = document.querySelector('.social-ul-getter');

let count = 0;

window.onresize = function (){
  let width = window.innerWidth;
  
  if(width < 800){
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

function hamburgerMenu() {
  if(count % 2 == 0){
    count++;

    nav.classList.add('navbar-fluid');
    nav.classList.remove('navbar');

    container.classList.add('container-fluid');
    container.classList.remove('container');

    logo.classList.add('logo-fluid');
    logo.classList.remove('logo');

    midContent.classList.remove('mid-content');

    social.classList.add('social-fluid');
    social.classList.remove('social');

    midContentUl.classList.add('mid-content-fluid-ul');
    
    socialUl.classList.add('social-fluid-ul');

    closeIcon.classList.add('visible');
    closeIcon.classList.remove('invisible');
    
    midContent.classList.add('visible');
    social.classList.add('visible');

    midContent.classList.remove('invisible');
    social.classList.remove('invisible');
  }
  else {
    count++;

    nav.classList.remove('navbar-fluid');
    nav.classList.add('navbar');

    container.classList.remove('container-fluid');
    container.classList.add('container');

    logo.classList.remove('logo-fluid');
    logo.classList.add('logo');

    midContent.classList.add('mid-content');

    social.classList.remove('social-fluid');
    social.classList.add('social');

    midContentUl.classList.remove('mid-content-fluid-ul');
    
    socialUl.classList.remove('social-fluid-ul');
    
    closeIcon.classList.remove('visible');
    closeIcon.classList.add('invisible');

    midContent.classList.add('invisible');
    social.classList.add('invisible');

    midContent.classList.remove('visible');
    social.classList.remove('visible');
  }

}

function closeHandler(){
    count++;

    nav.classList.remove('navbar-fluid');
    nav.classList.add('navbar');

    container.classList.remove('container-fluid');
    container.classList.add('container');

    logo.classList.remove('logo-fluid');
    logo.classList.add('logo');

    midContent.classList.add('mid-content');

    social.classList.remove('social-fluid');
    social.classList.add('social');

    midContentUl.classList.remove('mid-content-fluid-ul');
    
    socialUl.classList.remove('social-fluid-ul');
    
    closeIcon.classList.remove('visible');
    closeIcon.classList.add('invisible');

    midContent.classList.add('invisible');
    social.classList.add('invisible');

    midContent.classList.remove('visible');
    social.classList.remove('visible');
  }
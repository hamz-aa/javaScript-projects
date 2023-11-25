const login = document.querySelector('.login');
const signup = document.querySelector('.signup');

const loginUsername = document.querySelector('#login-username');
const loginPassword = document.querySelector('#login-password');

const signupUsername = document.querySelector('#signup-username');
const signupPassword = document.querySelector('#signup-password');
const confirmPassword = document.querySelector('#confirm-signup-password');
const email = document.querySelector('#signup-email');

const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');

const loginLink = document.querySelector('.login-link');
const signupLink = document.querySelector('.signup-link');

const userData = [];

signupBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(signupPassword.value === confirmPassword.value && confirmPassword.value !== ' '){
        userData.push({name:signupUsername.value, password:signupPassword.value})
        signupPassword.value = '';
        confirmPassword.value = '';
        signupUsername.value = '';
        email.value = ''
    }
    else {
        console.log('error');
    }
})

loginLink.addEventListener('click',()=>{
    signup.style.display = 'none';
    login.style.display = 'block';
})

signupLink.addEventListener('click',()=>{
    signup.style.display = 'block';
    login.style.display = 'none';
})

loginBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    for(let obj of userData){
        if(obj['name'] === loginUsername.value && obj['password'] === loginPassword.value){
            loginUsername.value = '';
            loginPassword.value = '';
            window.location.href='./index.html'; 
        }
        else {
            console.log('error');
        }
    }
})
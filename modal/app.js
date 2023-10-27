
const modalWrapper = document.querySelector('.modal-wrapper');
const modalContentWrapper = document.querySelector('.modal-content-wrapper');
const realModal = document.querySelector('.real-modal');

function modalHandler(){
    modalContentWrapper.classList.replace('invisible', 'visible');
    modalWrapper.classList.add('transparent-background');
    realModal.style.backgroundColor = 'rgb(137, 207, 243)';
}   

function closeHandler(){
    modalContentWrapper.classList.replace('visible', 'invisible');
    modalWrapper.classList.remove('transparent-background');
    realModal.style.backgroundColor = '#fff';
}
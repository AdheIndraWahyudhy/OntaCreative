// Hamburger
const hamburger = document.querySelector('#humberger')
const navbar = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('humberger-active')
    navbar.classList.toggle('hidden')
})

// Header

window.onscroll = () =>{
    const header= document.querySelector('#header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
        header.classList.remove('absolute')
    }else{
        header.classList.add('absolute')
        header.classList.remove('navbar-fixed')
    }
}

const btn_produk = document.querySelector('.btn-produk');
const price = document.querySelector('#price1');
btn_produk.addEventListener('click', () =>{
    price.classList.toggle('hidden')
})
price.addEventListener('click', () =>{
    price.classList.toggle('hidden')
})

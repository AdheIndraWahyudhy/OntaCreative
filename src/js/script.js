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
    const nav_ul= document.getElementById('nav-ul');
    const burger_lines = document.querySelectorAll(".humberger-line");
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
        header.classList.remove('absolute')
        burger_lines.forEach(function(element) {
            element.classList.remove('bg-white');
            element.classList.add('bg-black');
        });
        nav_ul.classList.remove('lg:text-white').add('lg:text-black');
    }else{
        header.classList.add('absolute')
        header.classList.remove('navbar-fixed')
        burger_lines.forEach(function(element) {
            element.classList.remove('bg-black');
            element.classList.add('bg-white');
        });
        nav_ul.classList.add('lg:text-white').remove('lg:text-black')
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

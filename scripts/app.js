let navbtn = document.querySelector('.navbtn')
let mobilenavmenu = document.querySelector('.mobilenavmenu')


navbtn.addEventListener('click' , function(){
    navbtn.classList.toggle('navbtnOpen')
    mobilenavmenu.classList.toggle('mobilenavmenuOpen')
})
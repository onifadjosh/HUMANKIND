let Img1 = document.getElementById('img1');

window.addEventListener('scroll', ()=>{
    window.scrollY;
    Img1.style.t
})

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('header').addClass('fixed-header');
        }
        else{
            $('header').removeClass('fixed-header');
        }
    });
});
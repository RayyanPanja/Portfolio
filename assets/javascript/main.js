// Dialog Handelers
function DialogHandler(opener,closer,dialog) {
    const Open =  document.getElementById(opener);
    const Close = document.getElementById(closer);
    const Dialog =document.getElementById(dialog);

    Open.addEventListener('click',()=>{
        Dialog.show();
    });

    Close.addEventListener('click',()=>{
        Dialog.close();
    });
}

DialogHandler('side-nav-open','side-nav-close','side-nav');

//Scroll Bar
window.addEventListener('scroll',()=>{
    let a = scrollY;
    console.log(a);
}) 
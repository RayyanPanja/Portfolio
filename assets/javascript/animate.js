const linkSet = document.querySelectorAll('.link-item');
const links = document.querySelectorAll('.link');
const active = document.querySelector('.active-link');

linkSet.forEach((link) => {
    link.addEventListener('click', () => {
        console.log(link);
        link.appendChild(active);
    });
});

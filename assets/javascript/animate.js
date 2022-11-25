const linkSet = document.querySelectorAll('.link-item');
const links = document.querySelectorAll('.link');
const active = document.querySelector('.active-link');

linkSet.forEach((link) => {
    link.addEventListener('click', () => {
        console.log(link);
        link.appendChild(active);
    });
});

const SkillBtn = document.querySelector('#skilltitle');
const Skills = document.querySelectorAll('.skill');
Skills.forEach((skill) => { skill.style.opacity = 0 })

SkillBtn.addEventListener('click', () => {
    Skills.forEach((skill) => {
        console.log("JJJ");
        if (skill.style.opacity <= 0) {
            skill.style.transition = "all 500ms";
            skill.style.opacity += 1;
        }else{
            skill.style.opacity = 0;
        }
    })
})


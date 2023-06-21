// const toggleBtn = document.querySelector('.nav_toggleBtn');
// const menu = document.querySelector('.navbar_menu');

// toggleBtn.addEventListener('click', () => {
//     menu.classList.toggle('active');
// })
const toggleBtn = nav_toggle.getElementsByTagName("i")[0];
const navList = document.getElementsByClassName("navbar_menu")[0];

toggleBtn.onclick = () => {
    navList.classList.toggle("show-menu");
}
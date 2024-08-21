

const sideMenu = document.getElementById('side-menu');

function openMenu(){
    sideMenu.style.transform = "translateX(16rem)";
}

function closeMenu(){
    sideMenu.style.transform = "translateX(-16rem)";
}

// //////////
const navbar = document.querySelector('nav');
const navList = document.querySelector('nav ul');

window.addEventListener('scroll',()=>{
    if(scrollY > 50){
        navbar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
        navList.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:border','dark:border-white/50','dark:bg-transparent');
    }else{
        navbar.classList.remove('bg-white','bg-opacity-50','shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
        navList.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:border','dark:border-white/50','dark:bg-transparent');
    }
});


///  dark mode

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
}

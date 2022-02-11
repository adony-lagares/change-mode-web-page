function changeMode() {
   changeClasses();
   changeText();
}

function changeClasses() {
button.classList.toggle(darkModeClass);
h1.classList.toggle(darkModeClass);
body.classList.toggle(darkModeClass);
footer.classList.toggle(darkModeClass);
}

function changeText(){
    const darkMode = "Dark Mode"
    const lightMode = "Light Mode"
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerText = darkMode + ' ON';
        return;
    }
    button.innerHTML = darkMode;
        h1.innerText = lightMode + ' ON';

}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body') [0];
const footer = document.getElementsByTagName('footer') [0];

button.addEventListener('click', changeMode);
const name = 'Бучко Макар';
document.getElementById('name').textContent = name;

const year = new Date().getFullYear();
document.getElementById('footer').textContent= year + " " + name;

let isDark = false;

const button = document.getElementById('btn');

button.addEventListener('click', function(){
    isDark = !isDark;
    document.body.classList.toggle('dark', isDark)

    if(isDark) {
        button.textContent = '☀️';
    } else {
        button.textContent = '🌙'
    }
} )


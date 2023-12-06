let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light') //add o light na classe do html

    const mode = darkMode ? 'Light' : 'Dark'

    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado` //aqui o currentTarget é o buttonToggle

    darkMode = !darkMode
})
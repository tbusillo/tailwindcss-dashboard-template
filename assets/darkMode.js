var modeButton = document.getElementById('dark-mode')
console.log(modeButton)
var htmlElement = document.querySelector('html')
var darkMode = false

modeButton.addEventListener('click', function () {
    if (!darkMode) {
        document.documentElement.classList.add('dark')
        darkMode = !darkMode
    } else {
        document.documentElement.classList.remove('dark')
        darkMode = !darkMode
    }
})

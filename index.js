const burger = document.querySelector('.hamburger')
const menu = document.querySelector('.nav-list')
const links = document.querySelectorAll('.nav-link')
const body = document.querySelector('body')


burger.addEventListener('click', () => {
  burger.classList.toggle('is-active')
  menu.classList.toggle('active-list')
  body.classList.toggle('fixed-position')
})

menu.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav-link')) {
    menu.classList.remove('active-list')
    burger.classList.remove('is-active')
    body.classList.remove('fixed-position')
  }
})


console.log(`
- Вёрстка валидная (10/10)
- Вёрстка семантическая (20/20)
- Вёрстка соответствует макету (48/48)
- Требования к css (12/12)
- Интерактивность, реализуемая через css (20/20)
`)
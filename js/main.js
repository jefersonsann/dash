const links = document.querySelectorAll('.tools_item')
const conteudo = document.querySelectorAll('.conteudo_item')
const pageName = document.querySelector('.pageName')

function activeContent(hashName) {
  conteudo.forEach((item) => {
    item.classList.remove('active')
    if (hashName === `#${item.textContent}`) {
      item.classList.add('active')
    }
  })

  if (hashName === 'geral') conteudo.classList.add('active')
}

function removeActive() {
  links.forEach((link) => {
    link.classList.remove('active')
  })
}

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    removeActive()
    const hashName = event.currentTarget.hash
    activeContent(hashName)
    link.classList.add('active')
    pageName.innerText = event.currentTarget.innerText
  })
})

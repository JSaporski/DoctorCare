// String (textos)
// Number (número)
// Boolean (true | false)

window.addEventListener('scroll', emScroll)

function emScroll() {
  mostrarNavEmScroll()
  mostrarBtnEmScroll()
}

function mostrarNavEmScroll() {
  if (scrollY == 0) {
    header.classList.remove('scroll')
  } else {
    header.classList.add('scroll')
  }
}

function mostrarBtnEmScroll() {
  if (scrollY <= 700) {
    btnTopo.classList.remove('mostrar-btn')
  } else {
    btnTopo.classList.add('mostrar-btn')
  }
}

function abrirMenu() {
  document.body.classList.add('menu-aberto')
}

function fecharMenu() {
  document.body.classList.remove('menu-aberto')
}

// Scroll Reveal

ScrollReveal({
  origin: 'top',
  distance: '10rem',
  duration: 500
}).reveal(`
  #conteudo-principal,
  #servicos,
  #servicos h4,
  #servicos h2,
  .vantagens,
  .vantagens-item,
  #contato,
  #contato h2,
  .contato-infos,
  #contato .btn,
  #contato div img
`)

ScrollReveal({
  origin: 'left',
  distance: '15rem',
  duration: 500
}).reveal(`
  .dados-empresa,
  #sobre,
  #sobre h4,
  #sobre h2,
  #sobre p,
  #sobre div,
  #footer,
  #footer a,
  .copy,
  #footer .social-media
`)

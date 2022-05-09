// String (textos)
// Number (número)
// Boolean (true | false)

window.addEventListener('scroll', emScroll)

function emScroll() {
  mostrarNavEmScroll()
  mostrarBtnEmScroll()
  ativarMenuNaSecaoAtual(conteudoPrincipal)
  ativarMenuNaSecaoAtual(servicos)
  ativarMenuNaSecaoAtual(depoimentos)
  ativarMenuNaSecaoAtual(sobre)
  ativarMenuNaSecaoAtual(contato)
}

function ativarMenuNaSecaoAtual(section) {
  // Linha alvo
  const targetLine = scrollY + innerHeight / 2

  // Verificar se a seção passsou da linha
  // Quais dados eu vou precisar?

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopoPassouOuChegouNaLinha = targetLine >= sectionTop

  const sectionTerminaEm = sectionTop + sectionHeight

  const sectionBasePassouDaLinha = sectionTerminaEm < targetLine

  // limites da seção
  const sectionLimites =
    sectionTopoPassouOuChegouNaLinha && !sectionBasePassouDaLinha

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(
    `.menu-links a[href*=${sectionId}]`
  )

  if (sectionLimites) {
    menuElement.classList.add('linkAtivo')
  } else {
    menuElement.classList.remove('linkAtivo')
  }
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
  #conteudoPrincipal,
  #servicos,
  #servicos h4,
  #servicos h2,
  .vantagens,
  .vantagens-item,
  #contato,
  #contato h2,
  .contato-infos,
  #contato .btn,
  #contato div img,
  #footer,
  #footer a,
  .copy,
  #footer .social-media
`)

ScrollReveal({
  origin: 'left',
  distance: '15rem',
  duration: 500
}).reveal(`
  .dados-empresa,
  #depoimentos,
  #depoimentos h4,
  #depoimentos h2,
  #depoimentos p,
  #depoimentos div,
  #depoimentos > h3,
  #depoimentos .empresas-parceiras,
  #depoimentos .banner-empresa,
  #sobre,
  #sobre h4,
  #sobre h2,
  #sobre p,
  #sobre div
`)

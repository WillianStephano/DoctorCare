/* GAMBIARRA ESPERANDO ALTERAÇÃO */
var posicaoInicial = window.pageYOffset;
window.onscroll = function () {
   var posicaoAtual = window.pageYOffset;
   const cabecalho = document.querySelector('.cabecalho')
   const menu = document.querySelector('.menu_lista_cabecalho')
   const btCabecalho = document.querySelector('.bt_agendar_cabecalho')
   
   cabecalho.classList.add('fixo')
   menu.classList.add('color')
   btCabecalho.classList.add('color')
   
   if (posicaoInicial == posicaoAtual ) {
      cabecalho.classList.remove('fixo')
      menu.classList.remove('color')
      btCabecalho.classList.remove('color')
   }
   
}

/* toggle menu */
var btToggleMenu = document.querySelector('.bt_toggle_menu')


btToggleMenu = addEventListener('click', function () {
   rotacaoBarras()
   mostrarMenu()

 
   
})

function rotacaoBarras() {
   const barra1 = document.querySelector('.bar_toggle_menu_1')
   const barra2 = document.querySelector('.bar_toggle_menu_2')
   const barra3 = document.querySelector('.bar_toggle_menu_3')

   barra1.classList.toggle('rotate_1')
   barra2.classList.toggle('rotate_2')
   barra3.classList.toggle('rotate_3')
}

function mostrarMenu() {
   const menu = document.querySelector('.menu_nav_cabecalho')

   menu.classList.toggle('menu_ativo')
}

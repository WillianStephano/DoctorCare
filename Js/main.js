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

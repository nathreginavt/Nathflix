const nav = document.getElementById('nav');
const perfis = document.getElementById('navPerfis');
const avatar = document.getElementById('nav_avatar');

window.addEventListener( 'scroll', ()=>{
  if(window.scrollY >= 100){ /*quanto a tela rolar mais que 100px... */
    nav.classList.add('nav_black'); /*...adicionar classe pelo js*/
    perfis.style.display = "none";
  }
  else{
    nav.classList.remove('nav_black'); /* remover classe*/
  }
})


function abrirPerfis() {
  const avatarRect = avatar.getBoundingClientRect();
  perfis.style.top = `${avatarRect.bottom + window.scrollY}px`;
  perfis.style.right = `${window.innerWidth - avatarRect.right}px`;

  if (perfis.style.display === 'none' || perfis.style.display === '') {
    perfis.style.display = 'block';
  } else {
    perfis.style.display = 'none';
  }
}


function trocarPerfil(x){
  switch (x){
    case 1: 
      avatar.src="img/netflixavatar1.png";
      perfis.style.display="none";
      break;
    case 2: 
      avatar.src="img/netflixavatar2.png";
      perfis.style.display = "none";
      break;
    case 3:
      avatar.src="img/netflixavatar3.png";
      perfis.style.display = "none";
      break;
  }
}

function scrollRow(rowId, direction) {
  const row = document.getElementById(rowId);
  const posters = row.querySelector('.row_posters');

  if (direction === 'left') {
    posters.scrollLeft -= 100;  // Ajuste conforme necessário
  } else if (direction === 'right') {
    posters.scrollLeft += 100;  // Ajuste conforme necessário
  }
}


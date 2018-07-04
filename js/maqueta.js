var $body = document.getElementById('body');
var $dimmer = document.getElementById('dimmer');
var $modal = document.getElementById('modal');
var $nacionalidad = document.getElementById('nacionalidadModal')
var $idioma = document.getElementById('idiomaModal')

function closeDimmer() {
  $modal.classList.add('closeAnim');
  $modal.addEventListener('animationend',(e)=>{
    if(e.animationName=== 'closeModal'){

      $body.classList.toggle('bodyDimmer');
      $dimmer.classList.toggle('dimmerActive');
    }
  })
}

function changeModal (from, to) {
  let $from = document.getElementById(from);
  let $to = document.getElementById(to)
  //

  $from.classList.add('closeAnim');
  $from.addEventListener('animationend',(event)=>{
    if($from !== $idioma){
      $idioma.classList.remove('modalsActive')
    }
    if($from !== $nacionalidad){
      $nacionalidad.classList.remove('modalsActive')
    }
    if(event.animationName==='closeModal'){
        $from.classList.remove('closeAnim');
        $from.classList.remove('modalsActive')
        $to.classList.add('modalsActive');
      }
  })
}

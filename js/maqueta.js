var $body = document.getElementById('body');
var $dimmerNacionalidad = document.getElementById('dimmerNacionalidad');
var $dimmerSigIn = document.getElementById('dimmerSigIn');
var $modal = document.getElementById('modal');
var $nacionalidad = document.getElementById('nacionalidadModal');
var $idioma = document.getElementById('idiomaModal');
var $ingresa = document.getElementById('ingresaModal');
var $signIn = document.getElementById('signInModal');
var $signInManual = document.getElementById('signInManual');
var $olvide = document.getElementById('olvide');

function closeDimmer() {
  $modal.classList.add('closeAnim');
  $modal.addEventListener('animationend',(e)=>{
    if(e.animationName=== 'closeModal'){

      $body.classList.toggle('bodyDimmer');
      $dimmerNacionalidad.classList.toggle('dimmerActive');
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
    if($from !== $signIn){
       $signIn.classList.remove('modalsActive')
    }
    if($from !== $ingresa){
       $ingresa.classList.remove('modalsActive')
    }
    if($from !== $signInManual){
       $signInManual.classList.remove('modalsActive')
    }
    if(event.animationName==='closeModal'){
        $from.classList.remove('closeAnim');
        $from.classList.remove('modalsActive')
        $to.classList.add('modalsActive');
      }
  })
}

function changeModalIngresa(from, to){
  let $from = document.getElementById(from);
  let $to = document.getElementById(to)
  //

  $from.classList.add('closeAnim');
  $from.addEventListener('animationend',(event)=>{
    if($from !== $signIn){
       $signIn.classList.remove('modalsActive')
    }
    if($from !== $ingresa){
       $ingresa.classList.remove('modalsActive')
    }
    if($from !== $signInManual){
       $signInManual.classList.remove('modalsActive')
    }
    if($from !== $olvide) {
      $olvide.classList.remove('modalsActive')
    }
    if(event.animationName==='closeModal'){
        $from.classList.remove('closeAnim');
        $from.classList.remove('modalsActive')
        $to.classList.add('modalsActive');
      }
  })
}


function openSignIn ()
{
  $ingresa.classList.add('modalsActive');
  $signIn.classList.remove('modalsActive');
  $signInManual.classList.remove('modalsActive');
  $dimmerSigIn.classList.add('dimmerActive');
  $body.classList.add('bodyDimmer');
}

function closeSignIn(current)
{
    var $current = document.getElementById(current);
    $current.classList.add('closeAnim');
    setTimeout(()=>{
      $body.classList.remove('bodyDimmer');
      $dimmerSigIn.classList.remove('dimmerActive')
      $current.classList.remove('closeAnim');
    },0300);
    console.log('HOLA');
}

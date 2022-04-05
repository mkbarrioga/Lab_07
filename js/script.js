function init(){
  document.getElementById('entrybutton').addEventListener('click', clickFunction);

  function clickFunction(){
    var message = document.getElementById('entryinput').value;
    alert('Marc Kevin Barrioga: ' + message);
    document.getElementById('textoutput').innerHTML = message;
  }
}

window.addEventListener('load', init);
function terminalDo(command){
  linebreak = document.createElement("br");
  switch(command){
    case 'oi':
      break;
    case 'map':
      document.getElementById("map-window").classList.remove("closed");
      document.getElementById("map-window").classList.add("restored");
      startMap();
      break;
    default:
      document.getElementById('history').append('command not found');
      document.getElementById('history').appendChild(linebreak);
      return;
  }
  document.getElementById('history').append(`localhost@home> ${command}`);
  document.getElementById('history').appendChild(linebreak);
}
function command(e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 13) { //Enter keycode
    e.preventDefault();
    var command = document.getElementById('cli').value
    terminalDo(command);
    document.getElementById('cli').value = "";
  }
}

document.getElementById("cli").focus();
document.getElementById("clickme").addEventListener('click', function (event) {
  var terminal = document.getElementById("terminal");
  if(terminal.classList.contains('restored')){ 
    terminal.classList.remove("restored");
    terminal.classList.add("closed");
  } else {
    if(terminal.classList.contains('maximized')) terminal.classList.remove("maximized")
    if(terminal.classList.contains('closed')) terminal.classList.remove("closed")
    terminal.classList.add("restored");
  }
}, false);
document.getElementById("close").addEventListener('click', function (event) {
  var terminal = document.getElementById("terminal");
  if(terminal.classList.contains('restored')) terminal.classList.remove("restored")
  if(terminal.classList.contains('maximized')) terminal.classList.remove("maximized")
  terminal.classList.add("closed")
}, false);
document.getElementById("max").addEventListener('click', function (event) {
  var terminal = document.getElementById("terminal");
  if(terminal.classList.contains('restored')) terminal.classList.remove("restored")
  if(terminal.classList.contains('closed')) terminal.classList.remove("closed")
  terminal.classList.add("maximized")
}, false);
document.getElementById("min").addEventListener('click', function (event) {
  var terminal = document.getElementById("terminal");
  if(terminal.classList.contains('maximized')) terminal.classList.remove("maximized")
  if(terminal.classList.contains('closed')) terminal.classList.remove("closed")
  terminal.classList.add("restored")
}, false);
document.getElementById("terminal").addEventListener('focus', function(){
  document.getElementById('cli').selectionEnd = 0;
}, true);

document.getElementById("terminal").addEventListener('click', function(){
  document.getElementById('cli').focus();
});



function onclickDiv (){
  }
var submit = document.querySelector('input[type=submit]');
submit.onclick = function (event){
  var input = document.querySelector('input');
  var container = document.getElementsByClassName('container')[0];
  var novaDiv = document.createElement('div');
  novaDiv.textContent = input.value;
  container.appendChild(novaDiv);
    event.preventDefault();
}

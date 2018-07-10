function onclickDiv (){
  }
var submit = document.querySelector('input[type=submit]');
submit.onclick = function (event){
  var input = document.querySelector('input');
  var container = document.getElementsByClassName('container')[0];
  var novaDiv = document.createElement('div');
  novaDiv.textContent = input.value + moment().format('lll');
  container.appendChild(novaDiv);
    event.preventDefault();
}
function desabilitar (){
var limit = 140;
var textLimit = document.querySelector('#textInput').value.length;
var finish = limit - textLimit;
if(finish>0){
  document.getElementById('textLimit').innerHTML = finish;
  document.getElementById('button').disabled = false;

}else 
{
  document.getElementById('textLimit').innerHTML = finish;
  document.getElementById('button').disabled = true;
}
}
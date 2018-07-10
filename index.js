var input = document.querySelector('input');

function onclickDiv (){
  }
var submit = document.querySelector('input[type=submit]');
submit.onclick = function (event){
  var input = document.querySelector('input');
  var container = document.getElementsByClassName('container')[0];
  var novaDiv = document.createElement('div');
  novaDiv.textContent = input.value + moment().format('lll');
  novaDiv.className='styleColor';
  container.appendChild(novaDiv);
  textInput.value="";
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
function color(){
var area = document.getElementById('textLimit');
  if (input.value.length > 120 && input.value.length < 130){
    area.style.color = "yellow";
  } else if (input.value.length > 130 && input.value.length < 140){
    area.style.color = "red";
  }
 }
 setInterval(color, 1);
const input = document.querySelector('input');
const submit = document.querySelector('input[type=submit]');
submit.onclick = function (event){
  const input = document.querySelector('input');
  const container = document.getElementsByClassName('container')[0];
  const novaDiv = document.createElement('div');
  novaDiv.textContent = input.value + moment().format('lll');
  novaDiv.className='styleColor';
  container.appendChild(novaDiv);
  textInput.value="";
  event.preventDefault();
}
function desabledButton (){
  const limit = 140;
  const textLimit = document.querySelector('#textInput').value.length;
  const finish = limit - textLimit;
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
const area = document.getElementById('textLimit');
  if (input.value.length > 120 && input.value.length < 130){
    area.style.color = "yellow";
  } else if (input.value.length > 130 && input.value.length < 140){
    area.style.color = "red";
  }
 }
 setInterval(color, 1);
/* Код замены части заголовка */
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Привет из колхоза!';

/*
document.querySelector('html').onclick = function() 
{
    alert('Вау, полегче! Здесь пока что пусто....');
}
*/

/* Тождественный оператор. Диалоговое окно при событии клик на веб-странице. */
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('САЙТ НАХОДИТСЯ В ПРОЦЕССЕ РАЗРАБОТКИ!');
} else {
  alert('ИНАЧЕ.... ДО СВИДАНИЯ......');
}

/* Код замены изображения по событию "клик на изображении"
+ проверка через тождество версии (варианта) отображаемого изображения */

var myImage = document.querySelector('img');

myImage.onclick = function()
{
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/shi.jpg')
  {
    myImage.setAttribute ('src', 'images/shi2.jpg');
  }
  else
  {
    myImage.setAttribute ('src', 'images/shi.jpg');
  }
}

/* Код для изменения имени пользователя */
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

/* Функция для персонализированного приветствия*/
function setUserName()
{
  var myName = prompt('Введите, пожалуйста, Ваше имя.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Привет из колхоза, ' + myName;
}

/* Код инициализации приложения */
if(!localStorage.getItem('name'))
{
  setUserName();
}
else
{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Привет из колхоза, ' + storedName;
}

/* Обработчик событие при нажатии на кнопку onclick */
myButton.onclick = function()
{
  setUserName();
}

let menuItem = document.getElementsByTagName('li'),
    menuGlobal = document.querySelector('.menu'),
    bod = document.getElementsByTagName('body'),
    titl = document.getElementById('title'),
    col = document.querySelector('.column'),
    adv = document.getElementsByClassName('adv')[0],
    prom = document.getElementById('prompt');

let newItem = document.createElement('li');
let newItem5 = document.createElement('li');
let divv = document.createElement('div');
newItem.classList.add('menu-item');
menuGlobal.removeChild(menuItem[1]);
menuGlobal.insertBefore(newItem, menuItem[2]);
menuGlobal.appendChild(newItem5);
newItem5.classList.add('menu-item');
newItem.textContent = 'Третий пункт';
newItem5.textContent = 'Пятый пункт';
adv.remove();
bod[0].style.backgroundImage = 'url(img/apple_true.jpg)';
title.textContent = 'Мы продаем только подлинную технику Apple';
// col.removeChild(adv[1]);
let answer = prompt('Как вы относитесь к технике Apple?');
prom.textContent = answer;




// document.removeChild(menuItem1);


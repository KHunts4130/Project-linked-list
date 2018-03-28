window.onload = function() {
 disableEnter();
};
var cardTitle = document.querySelector('.main-left-input-field');
var cardList = document.querySelector('.main-right-card-list');
var enterButton = document.querySelector('.main-left-button-enter');
var cardURL = document.querySelector('.main-left-inputURL');
var cardSum = document.querySelectorAll(".main-right-card-title");
var cardsRead = document.querySelectorAll(".main-right-card-button-delete-read");
var cardsUnread = cardSum - cardsRead;
// enterButton.addEventListener('click', appendCard);
enterButton.addEventListener('click', blankOnEntry);
cardList.addEventListener('click', deleteCard);
cardList.addEventListener('click', markAsRead);


function appendCard() {
var createCard = document.createElement('li');  
createCard.innerHTML = `<h3 class="main-right-card-title">${cardTitle.value}</h3>
  <a class="main-right-card-link" href="">${cardURL.value}</a>
  <button class= "main-right-card-button main-right-card-button-read">Read</button>
  <button class= "main-right-card-button main-right-card-button-delete">Delete</button>`;
cardList.appendChild(createCard); 
}


function deleteCard(event) {
if(event.target.matches('.main-right-card-button-delete')){
  event.target.closest('li').remove();
}
}

function markAsRead() {
if (event.target && event.target.matches('.main-right-card-button-read')){
  event.target.closest('li').classList.toggle('read');
}

document.querySelector('.main-right-card-button-read').classList.toggle('main-right-card-button-read-clicked');
document.querySelector('.main-right-card-button-delete').classList.toggle('main-right-card-button-delete-read');
}

function blankOnEntry() {
if (cardURL.value == '' || cardTitle.value == ''){
  alert('Error empty field');
} else {
  appendCard();
}
}
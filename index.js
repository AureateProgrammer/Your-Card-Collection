const cardForm = document.getElementById('card-form');
const cardNameInput = document.getElementById('card-name');
const cardDescriptionInput = document.getElementById('card-description');
const cardContainer = document.getElementById('card-container');

cardForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const cardName = cardNameInput.value.trim();
    const cardDescription = cardDescriptionInput.value.trim();
    
    if (cardName && cardDescription) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
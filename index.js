//Grabbing the form and input elements from the index.html document
const cardForm = document.getElementById('card-form');
const cardNameInput = document.getElementById('card-name');
const cardDescriptionInput = document.getElementById('card-description');
const cardContainer = document.getElementById('card-container');
//creating a submit btn event listener so the user could submit the card
cardForm.addEventListener('submit', function(event) {
    event.preventDefault();
//grabbing the values from the input fields and trimming any extra whitespace
    const cardName = cardNameInput.value.trim();
    const cardDescription = cardDescriptionInput.value.trim();
    //checking if the card name and description are not empty before creating a new card element
    if (cardName && cardDescription) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        //creating the inner HTML for the card element
        cardElement.innerHTML = `
            <h2 class="card-title">${cardName}</h2>
            <p>${cardDescription}</p>
        `;
        cardContainer.appendChild(cardElement);

        cardNameInput.value = '';
        cardDescriptionInput.value = '';
    }
});


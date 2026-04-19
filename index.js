//Grabbing the form and input elements from the index.html document
const cardForm = document.getElementById('card-form');
const cardNameInput = document.getElementById('card-name');
const cardContainer = document.getElementById('card-container');
const generateLegendButton = document.getElementById('generate-legend');

//Arrays For the radom card Generator
const firstNames = ['Iron', 'Shadow', 'Luna', 'Blaze', 'Storm'];
const lastNames = ['Knight', 'Phantom', 'Caller', 'Hunter', 'Titan'];
const classes = ['Warrior', 'Mage', 'Beast', 'Rogue'];
const traits = ['burning', 'ancient', 'cursed', 'swift', 'arcane'];
const origins = ['from the north', 'from the void', 'from the hidden forest'];
//Function to generate a random card description using the arrays above
function getRandomHero(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function generateLegendName() {
    const firstName = getRandomHero(firstNames);
    const lastName = getRandomHero(lastNames);

    return `${firstName} ${lastName}`;
}

function generateRandomCardDescription() {
    const randomClass = getRandomHero(classes);
    const trait = getRandomHero(traits);
    const origin = getRandomHero(origins);

    return `A ${trait} ${randomClass} ${origin}.`;
}

generateLegendButton.addEventListener('click', function() {
    cardNameInput.value = generateLegendName();
    cardNameInput.focus();
});

//creating a submit btn event listener so the user could submit the card
cardForm.addEventListener('submit', function(event) {
    event.preventDefault();
//grabbing the values from the input fields and trimming any extra whitespace
    const cardName = cardNameInput.value.trim();
    const cardDescription = generateRandomCardDescription();
    //checking if the card name is not empty before creating a new card element
    if (cardName) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        //creating the inner HTML for the card element
        cardElement.innerHTML = `
            <h2 class="card-title">${cardName}</h2>
            <p>${cardDescription}</p>
        `;
        cardContainer.appendChild(cardElement);

        cardNameInput.value = '';
    }
});
const attack = Math.floor(Math.random() * 10) + 1;
const defense = Math.floor(Math.random() * 10) + 1;
const health = Math.floor(Math.random() * 20) + 1;

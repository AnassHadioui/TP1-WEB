// 1. Show/Hide Text
const toggleButton = document.getElementById('toggleText');
const text = document.getElementById('text');
toggleButton.addEventListener('click', () => {
    if (text.style.display === 'none') {
        text.style.display = 'block';
        toggleButton.textContent = 'Masquer';
    } else {
        text.style.display = 'none';
        toggleButton.textContent = 'Afficher';
    }
});

// 2. Change Style on Click
const changeStyleButton = document.getElementById('changeStyle');
const styledDiv = document.getElementById('styledDiv');
changeStyleButton.addEventListener('click', () => {
    styledDiv.style.backgroundColor = styledDiv.style.backgroundColor === 'gray' ? 'green' : 'gray';
});

// 3. Mouse Events
const hoverDiv = document.getElementById('hoverDiv');
hoverDiv.addEventListener('mouseover', () => {
    hoverDiv.classList.remove('blue');
    hoverDiv.classList.add('red');
});
hoverDiv.addEventListener('mouseout', () => {
    hoverDiv.classList.remove('red');
    hoverDiv.classList.add('blue');
});

// 4. Form Validation
const form = document.getElementById('form');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name && email) {
        formMessage.textContent = `Formulaire soumis avec succès : ${name}, ${email}`;
        formMessage.style.color = 'green';
    } else {
        formMessage.textContent = 'Veuillez remplir tous les champs.';
        formMessage.style.color = 'red';
    }
});

// 5. Timer
const timerElement = document.getElementById('timer');
let seconds = 0;
setInterval(() => {
    seconds++;
    timerElement.textContent = `Temps écoulé : ${seconds} secondes`;
}, 1000);
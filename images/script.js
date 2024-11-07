const messages = [
    "Thank you for your endless patience!",
    "You're shaping the future, one student at a time!",
    "Your dedication makes a difference!",
    "Every lesson you teach is a gift!",
    "You inspire us to be our best!",
    "Thank you for believing in us!"
];

const appreciateButton = document.getElementById('appreciateButton');
const messageDisplay = document.getElementById('messageDisplay');

// Function to display a random appreciation message
function displayRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageDisplay.textContent = messages[randomIndex];
    messageDisplay.style.opacity = 1;
    
    // Fade out effect
    setTimeout(() => {
        messageDisplay.style.opacity = 0;
    }, 3000);
}

// Event listener for button clicks
appreciateButton.addEventListener('click', displayRandomMessage);

// Event listener for mouse movements
document.addEventListener('mousemove', (e) => {
    if (e.target === document.body) {
        messageDisplay.textContent = "You're so thoughtful!";
        messageDisplay.style.opacity = 1;

        // Fade out effect
        setTimeout(() => {
            messageDisplay.style.opacity = 0;
        }, 3000);
    }
});

// Event listener for key presses
document.addEventListener('keypress', (e) => {
    if (e.key === 't' || e.key === 'T') {
        messageDisplay.textContent = "Teachers are heroes!";
        messageDisplay.style.opacity = 1;

        // Fade out effect
        setTimeout(() => {
            messageDisplay.style.opacity = 0;
        }, 3000);
    }
});

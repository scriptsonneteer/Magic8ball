const answers = [ // Array of possible answers
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

function shakeEightBall() {
    const answerElement = document.getElementById('answer'); 
    // Get the answer element
    const eightBallInner = document.getElementById('eightBallInner'); 
    // Get the inner eight ball element

    eightBallInner.classList.add('animate'); // Add animation class to inner circle

    const randomIndex = Math.floor(Math.random() * answers.length); 
    // Generate a random index
    answerElement.textContent = answers[randomIndex]; 
    // Set the answer text to a random answer

    // Use requestAnimationFrame for smoother removal of the animation class
    setTimeout(() => {
        requestAnimationFrame(() => {
            eightBallInner.classList.remove('animate');
        });
    }, 300); // Duration of the animation in milliseconds
}

// Expose the function for testing
module.exports = { shakeEightBall, answers };

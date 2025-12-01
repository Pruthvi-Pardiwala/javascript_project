let countdownDisplay = document.getElementById("countdown");
let toggleBtn = document.getElementById("toggleBtn");

const eventDate = new Date("December 11, 2025 00:00:00").getTime();

let countdownInterval = setInterval(updateCountdown, 1000);
let isRunning = true;

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownDisplay.innerHTML = "Time's up! The event has started 🎉";
        return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((distance / (1000 * 60)) % 60);
    let seconds = Math.floor((distance / 1000) % 60);

    countdownDisplay.innerHTML = 
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

toggleBtn.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(countdownInterval);
        toggleBtn.textContent = "Start Countdown";
    } else {
        countdownInterval = setInterval(updateCountdown, 1000);
        toggleBtn.textContent = "Pause Countdown";
    }
    isRunning = !isRunning;
});

const quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal.",
    "Dream big and dare to fail.",
    "The harder you work, the luckier you get.",
    "Do something today that your future self will thank you for.",
    "Every moment is a fresh beginning.",
    "Your only limit is your mind.",
    "Small steps every day lead to big changes.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Believe in the power of consistency.",
    "Success starts with self-discipline.",
    "Don't watch the clock; do what it does—keep going.",
    "Start where you are. Use what you have. Do what you can.",
    "What you do today can improve all your tomorrows.",
    "Focus on progress, not perfection."
];

let quoteIndex = 0;
let quoteBox = document.getElementById("quote-box");

function showQuote() {
    quoteBox.textContent = quotes[quoteIndex];
}

showQuote();

let quoteInterval = setInterval(nextQuote, 4000);

function nextQuote() {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    showQuote();
}

function prevQuote() {
    quoteIndex = (quoteIndex - 1 + quotes.length) % quotes.length;
    showQuote();
}

document.getElementById("nextBtn").onclick = nextQuote;
document.getElementById("prevBtn").onclick = prevQuote;


let modal = document.getElementById("modal");
let closeModalBtn = document.getElementById("closeModal");

setTimeout(() => {
    modal.style.display = "flex";
}, 5000);

closeModalBtn.onclick = () => {
    modal.style.display = "none";
};

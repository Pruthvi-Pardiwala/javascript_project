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
        countdownDisplay.innerHTML = "Time's up! The Exam has started 🎉";
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
    "Success is the sum of small efforts repeated day in and day out.",
    "Exams are not a test of intelligence, but of dedication and discipline.",
    "Study hard now so you can relax later.",
    "Your future is created by what you do today, not tomorrow.",
    "Push yourself because no one else is going to do it for you.",
    "The secret to getting ahead is getting started.",
    "Don’t stop until you’re proud.",
    "Believe in yourself and all that you are.",
    "One day, all your hard work will pay off.",
    "Dreams don’t work unless you do."
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


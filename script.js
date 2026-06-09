let low = 1;
let high = 10;
let midpoint = 0;
let questionsAsked = 0;

const startBtn = document.getElementById("startBtn");
const game = document.getElementById("game");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");
const thinking = document.getElementById("thinking");
const themeToggle = document.getElementById("themeToggle");

const messages = [
    "Reading your thoughts...",
    "Analyzing possibilities...",
    "Looking into the future...",
    "I think I'm getting closer...",
    "Your number is hiding somewhere..."
];

function updateProgress() {
    const percentage = Math.min(
        (questionsAsked / 4) * 100,
        100
    );

    progressBar.style.width = percentage + "%";
}

function updateCounter() {
    counter.textContent =
        `Questions Asked: ${questionsAsked}`;
}

function showThinking(nextAction) {

    thinking.classList.remove("hidden");
    question.textContent =
        messages[
            Math.floor(
                Math.random() * messages.length
            )
        ];

    setTimeout(() => {
        thinking.classList.add("hidden");
        nextAction();
    }, 1000);
}

function askQuestion() {

    if (low === high) {

        question.innerHTML =
            `🎉 Your number is <strong>${low}</strong>!`;

        document.getElementById("yesBtn").style.display = "none";
        document.getElementById("noBtn").style.display = "none";

        progressBar.style.width = "100%";

        return;
    }

    midpoint = Math.floor((low + high) / 2);

    question.innerHTML =
        `Is your number greater than <strong>${midpoint}</strong>?`;
}

startBtn.addEventListener("click", () => {

    startBtn.style.display = "none";
    game.classList.remove("hidden");

    low = 1;
    high = 10;
    questionsAsked = 0;

    updateCounter();
    updateProgress();

    showThinking(askQuestion);
});

document.getElementById("yesBtn")
.addEventListener("click", () => {

    questionsAsked++;

    low = midpoint + 1;

    updateCounter();
    updateProgress();

    showThinking(askQuestion);
});

document.getElementById("noBtn")
.addEventListener("click", () => {

    questionsAsked++;

    high = midpoint;

    updateCounter();
    updateProgress();

    showThinking(askQuestion);
});

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-mode"
    );

    if (
        document.body.classList.contains(
            "light-mode"
        )
    ) {
        themeToggle.textContent =
            "☀️ Light Mode";
    } else {
        themeToggle.textContent =
            "🌙 Dark Mode";
    }
});
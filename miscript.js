const quotes = [
	"Be the change you wish to see in the world.",
	"In the end, it's not the years in your life that count. It's the life in your years.",
	"The only way to do great work is to love what you do.",
	"If you want to live a happy life, tie it to a goal, not to people or things.",
	"Life is like a camera. Focus on the good times, develop from the negatives, and if things don't work out, take another shot."
];

const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

function generateQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomQuote = quotes[randomIndex];
	quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener("click", generateQuote);

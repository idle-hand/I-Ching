const quotes = [
	"Be the change you wish to see in the world.",
	"The wise student hears of the Tao and practices it diligently. The average student hears of the Tao and gives it thought now and again. The foolish student hears of the Tao and laughs aloud. If there were no laughter, the Tao would not be what it is. Hence it is said: The bright path seems dim; Going forward seems like retreat; The easy way seems hard; The highest Virtue seems empty; Great purity seems sullied; A wealth of Virtue seems inadequate; The strength of Virtue seems frail; Real Virtue seems unreal; The perfect square has no corners; Great talents ripen late; The highest notes are hard to hear; The greatest form has no shape; The Tao is hidden and without name. The Tao alone nourishes and brings everything to fulfillment,"
	"The only way to do great work is to love what you do.",
	"The Tao begot one. One begot two. Two begot three. And three begot the ten thousand things. The ten thousand things carry yin and embrace yang. They achieve harmony by combining these forces. en hate to be orphaned, widowed, or worthless, But this is how kings and lords describe themselves. For one gains by losing And loses by gaining. What others teach, I also teach; that is: A violent man will die a violent death! This will be the essence of my teaching.",
	"Life is like a camera. Focus on the good times, develop from the negatives, and if things don't work out, take another shot."
	"Fame or self: Which matters more? Self or wealth: Which is more precious? Gain or loss: Which is more painful? He who is attached to things will suffer much. He who saves will suffer heavy loss. A contented man is never disappointed. He who knows when to stop does not find himself in trouble. He will stay forever safe.",
	"The softest thing in the universe Overcomes the hardest thing in the universe. That without substance can enter where there is no room. Hence I know the value of non-action. Teaching without words and work without doing Are understood by very few.",
];

const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

function generateQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomQuote = quotes[randomIndex];
	quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener("click", generateQuote);

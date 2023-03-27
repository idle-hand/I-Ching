const quotes = [
   {
    quote: "The superior man is modest in his speech, but exceeds in his actions.",
    hexagram: "Hexagram 15 – Qian (Modesty)"
  },
  {
    quote: "In the midst of great joy, do not promise anyone anything. In the midst of great anger, do not answer anyone's letter.",
    hexagram: "Hexagram 3: Difficulty at the Beginning"
  },
  {
    quote: "A superior man is modest in his speech, but exceeds in his actions.",
    hexagram: "Hexagram 15: Modesty"
  },
  {
    quote: "He who knows others is wise; he who knows himself is enlightened.",
    hexagram: "Hexagram 33: Retreat"
  },
  {
    quote: "To be wronged is nothing unless you remember it.",
    hexagram: "Hexagram 47: Oppression"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    hexagram: "Hexagram 53: Gradual Progress"
  },
  {
    quote: "A jade stone is useless before it is processed; a man is good-for-nothing until he is educated.",
    hexagram: "Hexagram 59: Dispersion"
  },
  {
    quote: "The wise find pleasure in water; the virtuous find pleasure in hills. The wise are active; the virtuous are tranquil. The wise are joyful; the virtuous are long-lived.",
    hexagram: "Hexagram 61: Inner Truth"
  },
  {
    quote: "He who is contented is rich.",
    hexagram: "Hexagram 85: Dissolution"
  },
  {
    quote: "The cautious seldom err.",
    hexagram: "Hexagram 62: Small Exceeding"
  },
  {
    quote: "The man who moves a mountain begins by carrying away small stones.",
    hexagram: "Hexagram 19: Approach"
  },
 {
    quote:
      "What is required is that we unite with others, in order that all may complement and aid one another through holding together.",
    hexagram: "Hexagram 8 – Bi (Union)"
  },
  {
    quote:
      "In a time of decay, when the laws are changing, the true scholar produces nothing, and the dilettante leads the way.",
    hexagram: "Hexagram 18 – Gu (Decay)"
  },
  {
    quote:
      "All things change, and we change with them. The world is constantly in a state of flux, and our thoughts and actions must be adaptable to changing circumstances.",
    hexagram: "Hexagram 49 – Ge (Molting)"
  }
];

const quoteBtn = document.getElementById("new-quote");
const quote = document.getElementById("quote");
const hexagram = document.getElementById("hexagram");

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  const randomQuote = getRandomQuote();
  quote.innerText = randomQuote.quote;
  hexagram.innerText = randomQuote.hexagram;
}

quoteBtn.addEventListener("click", displayQuote);

displayQuote();

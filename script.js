// English quotes ki list
const quotes = [
    { text: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", author: "Marilyn Monroe" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "A smile is a curve that sets everything straight.", author: "Phyllis Diller" },
    { text: "Let us always meet each other with smile, for the smile is the beginning of love.", author: "Mother Teresa" },
    { text: "You're never fully dressed without a smile.", author: "Martin Charnin" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" }
];

// Elements select kar rahe hain
const quoteTextElement = document.getElementById('quote-text');
const quoteAuthorElement = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const quoteBox = document.getElementById('quote-box');

// Function: Naya quote dikhane ke liye
function displayNewQuote() {
    // Animation reset
    quoteBox.classList.remove('fade-in');
    void quoteBox.offsetWidth; // Reflow trigger
    
    // Random index nikalna
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Text update karna
    quoteTextElement.textContent = `"${randomQuote.text}"`;
    quoteAuthorElement.textContent = `- ${randomQuote.author}`;
    
    // Animation apply karna
    quoteBox.classList.add('fade-in');
}

// Button click event
newQuoteBtn.addEventListener('click', displayNewQuote);

// Page load hone par pehla quote
displayNewQuote();

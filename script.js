const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs, USA"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill, USA"
    },
    {
        text: "Your limitation—it's only your imagination.",
        author: "Tony Robbins, USA"
    },
    {
        text: "Push yourself, because no one else is going to do it for you.",
        author: "Les Brown, USA"
    },
    {
        text: "Great things never come from comfort zones.",
        author: "Roy T. Bennett, USA"
    },
    {
        text: "Dream it. Wish it. Do it.",
        author: "Dr. Seuss, USA"
    },
    {
        text: "Success doesn't just find you. You have to go out and get it.",
        author: "Grant Cardone, USA"
    },
    {
        text: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Eric Thomas, USA"
    },
    {
        text: "Dream bigger. Do bigger.",
        author: "Denzel Washington, USA"
    },
    {
        text: "Don't stop when you're tired. Stop when you're done.",
        author: "David Goggins, USA"
    },
    {
        text: "Wake up with determination. Go to bed with satisfaction.",
        author: "Mel Robbins, USA"
    },
    {
        text: "Do something today that your future self will thank you for.",
        author: "Brendon Burchard, USA"
    },
    {
        text: "Little things make big days.",
        author: "Jim Rohn, USA"
    },
    {
        text: "It's going to be hard, but hard does not mean impossible.",
        author: "Gary Vaynerchuk, USA"
    },
    {
        text: "Don't wait for opportunity. Create it.",
        author: "George Bernard Shaw, USA"
    },
    {
        text: "The key to success is to focus on goals, not obstacles.",
        author: "Zig Ziglar, USA"
    },
    {
        text: "Your attitude determines your direction.",
        author: "Brian Tracy, USA"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt, USA"
    },
    {
        text: "The future belongs to those who believe in their dreams.",
        author: "Eleanor Roosevelt, USA"
    },
    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis, USA"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins, USA"
    },
    {
        text: "Success is not about the destination, it's about who you become on the journey.",
        author: "Jim Kwik, USA"
    },
    {
        text: "Your dreams are valid. Your hustle is necessary.",
        author: "Fela Durotoye, Nigeria"
    },
    {
        text: "Don't wait for perfect conditions. Start where you are with what you have.",
        author: "Niyi Adesanya, Nigeria"
    },
    {
        text: "The size of your dreams must always exceed your current capacity to achieve them.",
        author: "Ellen Johnson Sirleaf, Nigeria"
    },
    {
        text: "You are not a product of your circumstances, you are a product of your decisions.",
        author: "Chimamanda Ngozi Adichie, Nigeria"
    },
    {
        text: "Every morning you have two choices: continue to sleep with your dreams or wake up and chase them.",
        author: "Chris Oyakhilome, Nigeria"
    },
    {
        text: "The greatest investment you can make is in yourself.",
        author: "Aliko Dangote, Nigeria"
    },
    {
        text: "Don't let your background put your back on the ground.",
        author: "Ibukun Awosika, Nigeria"
    },
    {
        text: "You must expect great things of yourself before you can do them.",
        author: "Mike Adenuga, Nigeria"
    }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    quoteText.style.animation = 'none';
    quoteAuthor.style.animation = 'none';
    
    void quoteText.offsetWidth;
    
    quoteText.style.animation = 'fadeIn 0.5s ease-in forwards';
    quoteAuthor.style.animation = 'fadeIn 0.5s ease-in forwards';
    
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `— ${quote.author}`;
}

newQuoteBtn.addEventListener('click', generateRandomQuote);
window.addEventListener('load', generateRandomQuote);

const express = require('express');
const app = express();

const Quote = require('inspirational-quotes');

app.get('/', (req, res) => {
    res.send(Quote.getQuote());
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// Define your /quote endpoint
app.get('/quote', (req, res) => {
    const quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        "The way to get started is to quit talking and begin doing. -Walt Disney",
        "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
        "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.send(randomQuote);
});

// Start your server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

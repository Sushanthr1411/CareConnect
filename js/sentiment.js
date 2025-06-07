// sentiment.js
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

function analyzeSentiment(message) {
    const result = sentiment.analyze(message);
    return result.score > 0 ? 'Positive' : result.score < 0 ? 'Negative' : 'Neutral';
}

module.exports = analyzeSentiment;
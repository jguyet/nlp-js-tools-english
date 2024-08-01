'use strict';

var NlpjsTEn = require('../');

var corpus = "Internet Computer price makes a strong bullish comeback, targeting $10.44, as the Federal Reserve leaves interest rates unchanged at 5.25% - 5.5%.";

var nlpToolsEn;
// nlpToolsFr = new NlpjsTFr(corpus);
nlpToolsEn = new NlpjsTEn(corpus, {
    tagTypes: ['nat', 'vir', 'vre', 'common', 'nbr'],
    strictness: false,
    minimumLength: 3,
    debug: true,
    // perfLog: true
});

var tokenizedWords = nlpToolsEn.tokenized;
var posTaggedWords = nlpToolsEn.posTagger();
var lemmatizedWords = nlpToolsEn.lemmatizer();
var stemmedWords = nlpToolsEn.stemmer();
var stemmedWord = nlpToolsEn.wordStemmer("aléatoirement");
console.log(nlpToolsEn.foundTokensInDicts);

'use strict';

var NlpjsTEn = require('../');

var corpus = "Dismiss, Description for Screen Readers";

var nlpToolsEn;
// nlpToolsFr = new NlpjsTFr(corpus);
nlpToolsEn = new NlpjsTEn(corpus, {
    tagTypes: ['nat', 'vir', 'vre', 'common', 'nbr', 'code', 'num'],
    strictness: false,
    minimumLength: 3,
    debug: true,
    // perfLog: true
});

var tokenizedWords = nlpToolsEn.tokenized;
var posTaggedWords = nlpToolsEn.posTagger();
// var lemmatizedWords = nlpToolsEn.lemmatizer();
// var stemmedWords = nlpToolsEn.stemmer();
// var stemmedWord = nlpToolsEn.wordStemmer("aléatoirement");
// console.log(nlpToolsEn.foundTokensInDicts);

console.log(nlpToolsEn.isEnglish());

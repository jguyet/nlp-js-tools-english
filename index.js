'use strict';

var Config = require('./config');
var Logger = require('./logger');
var Tokenize = require('./algos/tokenize');
var FindTokens = require('./algos/find-tokens');
var StemTools = require('./algos/stem');
var PosTag = require('./algos/pos-tag');
var Lemmatize = require('./algos/lemmatize');

module.exports = NlpjsTEn;

function NlpjsTEn(sentence, userConfig) {

    this.config = new Config(userConfig);
    this.logger = new Logger(this.config);

    this.logger.debug("Config: ", this.config);

    this.sentence = sentence;
    this.tokenized = Tokenize(this);
    this.foundTokensInDicts = null;
    this.posTagged = null;
    this.stemmed = null;
    this.lemmatized = null;

    this.posTagger = function() {
        if (this.foundTokensInDicts === null) {
            this.foundTokensInDicts = FindTokens(this);
        }
        this.posTagged = PosTag(this);
        this.logger.debug("Pos Tag: ", this.posTagged);
        return this.posTagged;
    };

    this.lemmatizer = function() {
        if (this.foundTokensInDicts === null) {
            this.foundTokensInDicts = FindTokens(this);
        }
        this.lemmatized = Lemmatize(this);
        this.logger.debug("Lemmas: ", this.lemmatized);
        return this.lemmatized;
    };

    this.stemmer = function() {
        this.stemmed = StemTools.stem(this);
        this.logger.debug("Stemmed: ", this.stemmed);
        return this.stemmed;
    };

    this.wordStemmer = function(word) {
        var stemmedWord = StemTools.stemWord(word);
        this.logger.debug("StemmedWord: ", stemmedWord);
        return stemmedWord;
    };

    this.isEnglish = function() {
        if (this.foundTokensInDicts === null) {
            return 0;
        }
        return this.foundTokensInDicts.reduce((acc, word, _, arr) => {
            if (word.pos === 'UNK' || word.pos === 'CODE') {
                return acc;
            }
            return acc + (1 / arr.length);
        }, 0);
    }

}

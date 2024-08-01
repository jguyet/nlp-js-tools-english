'use strict';

module.exports = {
    lexi: [
    	(word) => { // simple number
            return !isNaN(word) ? {"word": word,"word_nosc": word, "lemma": word, "pos":"NBR"} : false;
        },
        (word) => { // number with virgule
            return /\d+[,.]\d+/.exec(word) !== null ? {"word": word,"word_nosc": word, "lemma": word, "pos":"NBR"} : false;
        }
	]
}

# NLP Javascript tools for english language
#### Tokenize, POS Tagger, lemmatizer and stemmer

Inspired by the french similar lib.

This package is partly based on the [Snowball stemming algorythm](https://snowballstem.org/algorithms/french/stemmer.html) and the [javascript adaptation](http://snowball.tartarus.org/otherlangs/french_javascript.txt) by _Kasun Gajasinghe, University of Moratuwa_ 

This package offers 4 NLP tools in javascript for french language :
* Tokenizing
* POS Tagging
* Lemmatizing
* Stemming

## Install
```
npm install nlp-js-tools-english
```

## Usage
```
var NlpjsTEn = require('nlp-js-tools-english');
```
Corpus to use
```
var corpus = "Internet Computer price makes a strong bullish comeback, targeting $10.44, as the Federal Reserve leaves interest rates unchanged at 5.25% - 5.5%.";
```
Configs
```
var config = {
    tagTypes: ['nat', 'vir', 'vre', 'common', 'nbr'],
    strictness: false,
    minimumLength: 3,
    debug: true
};
```

New instance with specific corpus and configs
```
var nlpToolsEn = new NlpjsTEn(corpus, config);
```

These are the available methods, self-explanatory.
**Note:** The sentence that is passed into the class earlier is automaticaly tokenized.
```
var tokenizedWords = nlpToolsEn.tokenized;
var posTaggedWords = nlpToolsEn.posTagger();
var lemmatizedWords = nlpToolsEn.lemmatizer();
var stemmedWords = nlpToolsEn.stemmer();
var stemmedWord = nlpToolsEn.wordStemmer("aléatoirement");
```

## Attributes

#### config
Shows config
#### tokenized
```
["semble", "nourrir", "de"]
```

## Methods return

#### posTagger()
```
[{
  "id": 1,
  "word": "semble",
  "pos": [
   "VER",
   "VER"
  ]
 },
 {
  "id": 2,
  "word": "nourrir",
  "pos": [
   "VER"
  ]
 },
 {
  "id": 3,
  "word": "de",
  "pos": [
   "NOM",
   "ART:def",
   "PRE"
  ]
 }]
```
#### lemmatizer()
```
[{
  "id": 1,
  "word": "semble",
  "lemma": "sembler"
 },
 {
  "id": 2,
  "word": "nourrir",
  "lemma": "nourrir"
 },
 {
  "id": 3,
  "word": "de",
  "lemma": "de"
 }]
```
#### stemmer()
```
[{
  "id": 1,
  "word": "semble",
  "stem": "sembl"
 },
 {
  "id": 3,
  "word": "nourrir",
  "stem": "nourr"
 },
 {
  "id": 5,
  "word": "de",
  "stem": "de"
}]
```

#### wordStemmer(word)
```
{
    word: "aléatoirement",
    stem: "aléatoir"
}
```

## Config

Option | Type | Default | Description
--- | --- | --- | ---
tagTypes | Array | `["adj", "adv", "art", "con", "nom", "ono", "pre", "ver", "pro"]` | List of dictionnaries the package will look in, in case you only need verbs or nouns, both or whatever else. If a word does not belong to any type, it is tagged as `"UNK"`.
strictness | Bool | `false` | If you set the strictness to `true` and try to POS Tag the word `generalement`, it will fail because the word is missine its accents. On the other hand, trying to POS Tag the word `dé` with the strictness set to `false` well return the types `art`, `pre` and `nom` because the word will match `de` in these dictionnaries.
minimumLength | Int | 1 | Algorythms will ignore words that are shorter than this parameter.
debug | Bool | false | Enable console debug

var sentence = 'the quick brown fox';

var SenString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

var SenWords = (str) => str.split(' ').map(SenString).join(' ');

console.log(SenWords(sentence));
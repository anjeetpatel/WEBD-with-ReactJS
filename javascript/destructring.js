const prolang = ['HTML','CSS','Js','Python','C','Java'];

//ES5
var lang1 = prolang[0];
var lang2 = prolang[1];
var lang3 = prolang[2];
console.log("Lang1 "+lang1);
console.log("lang2"+lang2);

//ES6
const[firstlang,second,fifth]=prolang;
console.log("1st prog lang: "+firstlang);
console.log("2nd prog lang: "+second);
console.log("5th prog lang: "+fifth);
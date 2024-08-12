var GlobalVar = "I am Global";
console.log(GlobalVar);
function LocalVar() {
  let LocalVar = "I am Local";
  console.log(LocalVar);
}

LocalVar();

function H(){
    console.log("Before Declaration", t);
    var t =20;
    console.log("After Declaration", t);
}
H();


let globalVar = "i am global";
console.log(globalVar);

function localLet(){
    let test = "test";
    console.log(test);
}
localLet();

function hoist(){
      
}
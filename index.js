const { spy } = require("chai");

function receivesAFunction(callback){
    callback(spy)
}

function  returnsANamedFunction(){
return function fn(){};
    return 'fn'
}
const fn = function (){
    return 'function'
}

function returnsAnAnonymousFunction(){
return function(){};
}
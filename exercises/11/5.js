// count1(50000) errors out with maximum call stack size exceeded
function count1(maxTerm){
    return (function calculateCount(current, term){
        return term === maxTerm ? current : calculateCount(++current, ++term, maxTerm);
    })(0, 0);
}

// This one works if you trampoline it
function count2(maxTerm){
    return (function calculateCount(current, term){
        return term === maxTerm ? current : function(){
            return calculateCount(++current, ++term);
        };
    })(0, 0);
}

function trampoline(value){
    while(typeof value === 'function'){
        value = value();
    }
    return value;
}

console.log(trampoline(count2(50000)));
console.log(count1(50000));
// This is straight up recursive
function count(maxTerm, term, current){
    term = term || 0;
    current = current || 0;
    return term === maxTerm ? current : count(maxTerm, ++term, ++current);
};

// Our trampolining function
function trampoline(value){
    while(typeof value === 'function'){
        value = value();
    }
    return value;
}

// This decorator turns a recursive function into a trampolinable function
function trampolineDec(fn){
    return function(){
        var args = Array.prototype.slice.call(arguments, 0);
        return function(){
            return fn.apply(this, args);
        }
    }
}

try {
    count(50000);
} catch(e) {
    console.log("Recursive count failed: " + e.message);
}

// We need to redefine count so that it refers to the variable name, not 
// the function declaration. This puts the name outside the function declaration
// so we can modify it with out decorator.
decoratedCount = trampolineDec(function count(maxTerm, term, current){
    term = term || 0;
    current = current || 0;
    return term === maxTerm ? current : decoratedCount(maxTerm, ++term, ++current);
});

console.log("Result of trampolined count: " + trampoline(decoratedCount(50000)));


// Now some trampolined mutually recursive functions.
var addFive = trampolineDec(checkCondition(function(n, until, current){
    return minusTwo(n + 5, until, current);
}));

var minusTwo = trampolineDec(checkCondition(function(n, until, current){
    return addFive(n - 2, until, current);
}));

function checkCondition(fn){
    return function(n, until, current){
        current = current || 0;
        current++;
        if(current === until){
            return n;
        }
        else {
            return fn(n, until, current);
        }
    }
}

console.log("Result of mutually recursive trampolined functions: " + trampoline(addFive(0, 50000)));
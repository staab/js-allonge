function assert(condition, msg){
    if(!msg){
        throw new Error("Please provide an assertion message.");
    }
    if(!condition){
        throw new Error("Assertion failed: " + msg);
    }
    console.log("Success: " + msg);
}

module.exports = assert;
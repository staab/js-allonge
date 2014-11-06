recursiveSimpleExtend = function(target, source) {
    if(!(target instanceof Object) && !(source instanceof Object)){
        return source;
    }

    for (var prop in source) {
        if (prop in target){
            target[prop] = recursiveSimpleExtend(target[prop], source[prop]);
        }
        else {
            target[prop] = source[prop];
        }
    }

    return target;
}

module.exports = {
    recursiveSimpleExtend: recursiveSimpleExtend
};
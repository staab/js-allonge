function SuperArray(array){
    array.index = 0;
    return array;
}

SuperArray.prototype = Array.prototype;

SuperArray.prototype.shifty = function shifty(){
    var item = this[this.index];
    this.index++;
    return item;
};

sup = new SuperArray(["hello", "there", "what", "things"]);
console.log(sup.shifty())
console.log(sup.shifty())
console.log(sup.shifty())
console.log(sup.shifty())
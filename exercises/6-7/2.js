_ = require('underscore');
x = {
    'one_thing': 1, 
    "one_man": "George", 
    "two_dogs": ['ruby', 'sniffles']
};

function pluckStartingWith(obj, string){
    return _.pick(obj, _.keys(obj).filter(function(key){
        return key.indexOf(string) === 0;
    }));
};

console.log(pluckStartingWith(x, 'one'));
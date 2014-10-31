function createRental(name, format){
    if(!Boolean(this.global)){
        throw new Error("This closure is meant to be instantiated without 'new'.");
    }

    var currentUserId = null;

    function validateUserId(fn, index){
        index = (index || 0).toString();
        return function userIdValidated(){
            var userId = arguments[index];

            if(!userId){
                throw new Error("userId was empty.");
            }

            fn.apply(this, arguments);
        };
    };

    return {
        isAvailable: function isAvailable(){
            return currentUserId === null;
        },
        checkOut: validateUserId(function checkOut(userId){
            if(!this.isAvailable()){
                throw new Error(name + " as a " + format + " is not available.");
            }

            currentUserId = userId;
        }),
        checkIn: validateUserId(function checkIn(userId){
            if(userId !== currentUserId){
                throw new Error("User " + userId + " doesn't have that rental.");
            }

            currentUserId = null;
        }),
        getInfo: function getInfo(){
            return {
                name: name,
                format: format,
                currentUserId: currentUserId
            };
        }
    };
};

rental = createRental("Wizard of Oz", "blu-ray");
console.log(rental.isAvailable());
rental.checkOut(10)
console.log(rental.isAvailable());
console.log(rental.getInfo());
rental.checkIn(10);
console.log(rental.isAvailable());
console.log(rental.getInfo());
rental2 = createRental("The Matrix", "cassette (audio book)");
rental2.checkOut(13)
console.log(rental.getInfo());
console.log(rental2.getInfo());
const hobbyTracker = hobbies => { // ['yoga', 'baking', 'piano']
    let obj = {}
    
    for (let i = 0; i < hobbies.length; i++) {
        obj[hobbies[i]] = 0
    }
    const innerFunc = (...args) => {
        if (args.length === 2) {
            obj[args[0]] = obj[args[0]] + args[1]
            return obj
        } else {
            for (let key in obj) {
                obj[key] = 0
            }
            console.log(obj)
            return 'tracker has been reset!'
        }
    }
    return innerFunc
}

const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}
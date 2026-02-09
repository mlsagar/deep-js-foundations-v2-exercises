function isValidName(name) {
    if (typeof name !== 'string') {
        return false;
    }

    if (name === "") {
        return false;
    }

    if (Number.isNaN(Number(name)) && name.length < 3) {
        return false;
    } 

    
    if (String(Number(name)).length < 3) {
        return false;
    }

    return true;
}

function hoursAttended(attended, length) {
    if (typeof attended !== 'string') {
        if (typeof attended !== 'number') {
            return false;

        }
    }

    if (typeof length !== 'string') {
        if (typeof length !== 'number') {
            return false;
        }
    }

    if (typeof attended === 'string' && attended === "") {
        return false;
    }

    if (typeof length === 'string' && length === "") {
        return false;
    }

    attended = Number(attended);
    length = Number(length);

    if (Number.isNaN(attended) || Number.isNaN(length)) {
        return false
    }

    if (attended < 0 || length < 0) {
        return false
    }

    if (!Number.isInteger(attended) || !Number.isInteger(length)) {
        return false;
    }

    if (attended > length) {
        return false;
    }

    return true;
}

// tests:
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);


console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
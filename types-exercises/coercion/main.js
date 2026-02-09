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

// tests:
console.log(isValidName("Frank") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
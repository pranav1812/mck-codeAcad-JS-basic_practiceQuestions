const checkEqualDigitsArrow= (num)=> {
    let digit= num% 10;
    num%= 10;
    while (num> 0) {
        temp= num% 10;
        if (temp!= digit) return false;
        num%= 10;
    }
    return false
}

function checkEqualDigitsRegular(num) {
    let digit= num% 10;
    num%= 10;
    while (num> 0) {
        temp= num% 10;
        if (temp!= digit) return false;
        num%= 10;
    }
    return false
}

module.exports= {
    checkEqualDigitsArrow,
    checkEqualDigitsRegular
}
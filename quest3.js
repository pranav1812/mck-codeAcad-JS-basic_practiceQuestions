const _changeCapitalization= (chr)=> {
    // A-> a, a->A
    if (chr === chr.toUpperCase()) {
        return chr.toLowerCase();
    } 
    return chr.toUpperCase();
}
const changeCapitalizationArrow= (str)=> {
    return str.split('').map(chr=> _changeCapitalization(chr)).join('');
}

function changeCapitalizationRegular(str) {
    return str.split('').map(chr=> _changeCapitalization(chr)).join('');
}

module.exports= {
    changeCapitalizationArrow,
    changeCapitalizationRegular
}
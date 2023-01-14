const _changeCapitalization= (chr)=> {
    // A-> a, a->A
    if (chr === chr.toUpperCase()) {
        return chr.toLowerCase();
    } 
    return chr.toUpperCase();
}
const changeCapitalizationArrow= (str)=> {
    if (typeof str!== "string") return -1
    return str.split('').map(chr=> _changeCapitalization(chr)).join('');
}

function changeCapitalizationRegular(str) {
    if (typeof str!== "string") return -1
    return str.split('').map(chr=> _changeCapitalization(chr)).join('');
}

module.exports= {
    changeCapitalizationArrow,
    changeCapitalizationRegular
}
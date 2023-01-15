const endsWithScriptArrow= (str)=> {
    if (typeof str!= "string" || str.length< 6) return -1
    let lastSix= str.slice(-6);
    return lastSix === 'Script';
}

function endsWithScriptRegular(str) {
    if (typeof str!= "string" || str.length< 6) return -1
    let lastSix= str.slice(-6);
    return lastSix === 'Script';
}

module.exports= {
    endsWithScriptArrow,
    endsWithScriptRegular
}

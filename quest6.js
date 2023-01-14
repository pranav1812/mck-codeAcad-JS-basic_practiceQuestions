const endsWithScriptArrow= (str)=> {
    let lastSix= str.slice(-6);
    return lastSix === 'Script';
}

function endsWithScriptRegular(str) {
    let lastSix= str.slice(-6);
    return lastSix === 'Script';
}

module.exports= {
    endsWithScriptArrow,
    endsWithScriptRegular
}

const concatStringsWithoutInitialsArrow= (str1, str2) => {
    return str1.slice(1, str1.length) + str2.slice(1, str2.length);
}

function concatStringsWithoutInitialsRegular(str1, str2) {
    return str1.slice(1, str1.length) + str2.slice(1, str2.length);
}

module.exports= {
    concatStringsWithoutInitialsArrow,
    concatStringsWithoutInitialsRegular
}
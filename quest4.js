const findLongestWordInArrayArrow= (arr)=> {
    return arr.reduce((x, y)=> x.length > y.length ? x : y)
}

function findLongestWordInArrayRegular(arr) {
    return arr.reduce(function(x, y) {
        return x.length > y.length ? x : y
    })
}

module.exports= {
    findLongestWordInArrayArrow,
    findLongestWordInArrayRegular
}
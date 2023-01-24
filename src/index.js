module.exports = function reverse (n) {
    const num = (n) => n.toString().split('').reverse().join('');
    return num;
}


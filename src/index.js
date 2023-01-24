module.exports = function reverseInt (n) {
    n = n + "";
    return Number(String(n).split("").reverse().join(""));
  }



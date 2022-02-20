module.exports = function reverse (n) {
    let i = 0;
    let str = String(Math.abs(n));
    let numb = '';


  while (i < str.length) {
    numb =  str[i] + numb;
    i = i + 1;
  };

  return Number(numb);
}

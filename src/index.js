module.exports = function check(str, bracketsConfig) {
  // your solution
  let parentheses=[];
  
  bracketsConfig.forEach(element => { 
    parentheses.push(element[0]+element[1])
  });

  for (let i = 0; i < parentheses.length; i++) {
    if (str.includes(parentheses[i])) {
        str = str.replace(parentheses[i], '')
        i = - 1;
    }
}

return str === ''
}

const checkNum = (x, array) => {
  let count = 0;
  array.forEach((i) => {
    if(i.num===x) {count += 1}
  });
  var boo = (count === 2) ? false : true
  return boo
}

const imageHelper = {
  setArray (num) {
    var array = [];
    while (array.length < num) {
      var x = Math.floor((Math.random()*10)+1);
      if (checkNum(x,array)) {array.push({num: x, flip: false})}
    }
    return array
  }
}

export default imageHelper;

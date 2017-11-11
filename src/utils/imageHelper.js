const checkNum = (x, array) => {
  let count = 0;
  array.forEach((i) => {
    if(i.num===x) {count += 1}
  });
  return count !== 2
}

const imageHelper = {
  setArray (num) {
    let array = [];
    while (array.length < num) {
      let x = Math.floor((Math.random()*10)+1);
      if (checkNum(x,array)) {
          array.push({
          num: x,
          flip: false
        })}
    }
    return array
  }
}

export default imageHelper;

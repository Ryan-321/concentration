const checkNum = (num, array) => {
  const filteredArray = array.filter((i) => i.num===num);
  return filteredArray.length < 2
}

const imageHelper = {
  setArray (num) {
    let array = [];
    while (array.length < num) {
      let randomNum = Math.floor((Math.random()*10)+1);
      if (checkNum(randomNum ,array)) {
          array.push({
          num: randomNum,
          flip: false
        })}
    }
    return array
  }
}

export default imageHelper;

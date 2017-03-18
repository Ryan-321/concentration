const imageHelper = {
  setArray (num) {
    array = [];
    while (array.length < num) {
      x = Math.floor((Math.random()*10)+1);
      var count = 0;
      array.forEach(function(i) {
        if (i === x) {count += 1}
      });
      if (count === 2) {
        continue
      } else {
        array.push(x);
      }
    }
    return array
  }
}

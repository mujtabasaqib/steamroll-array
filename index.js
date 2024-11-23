function steamrollArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }

  function roller(flatArray, element) {
    if (Array.isArray(element)) {
      for (const e of element) {
        roller(flatArray, e); 
      }
    } else {
      flatArray.push(element);
    }
  }

  return arr.reduce((accum, element) => {
    roller(accum, element);
    return accum;
  }, []);
}

module.exports = steamrollArray;

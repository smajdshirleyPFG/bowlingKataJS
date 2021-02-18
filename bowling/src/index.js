let bucket = 0
function roll(pins) {
  bucket += pins;
}

function score() {
  return bucket;
}

export {roll, score}
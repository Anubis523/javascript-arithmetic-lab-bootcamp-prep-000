function add (a,b) {
  return a + b
}

function subtract(a,b) {
  return a - b
}

function multiply(a,b) {
  return a * b
}

function divide(a,b) {
  return a / b
}

function inc(n) {
  return ++n
}

function dec(n) {
  return --n
}

function makeInt(n) {
  if (parseInt(n).isNaN) {
    return true
  }
  else 
    return (`${parseInt(n)}` === n)? parseInt(n) : 0
  // return (`${parseInt(n)}` === n)? parseInt(n) : 0
}

function preserveDecimal(n) {
  return parseFloat(n)
}
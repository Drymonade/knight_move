let movesList = []

let counter = 1

let idx = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8
}

function check (cell1, cell2) {

  if (!cell2) {
    return true
  }

  let x1 = idx[cell1[0]]
  let y1 = parseInt(cell1[1])

  let x2 = idx[cell2[0]]
  let y2 = parseInt(cell2[1])

  if ((Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) == 2) || (Math.abs(x1 - x2) === 2 && Math.abs(y1 - y2) === 1)) {
    return true
  }
  else {
    return false
  }
}

function erase () {
  let l = movesList.length

  if (l > 0) {
    let last = movesList[l-1]
    movesList = movesList.slice(0, l - 1)
    counter -= 1
    document.getElementById(last).innerHTML = ""
    document.getElementById('moves').innerHTML = movesList.join(', ')
  }
}

function clicker (cell) {
  let l = movesList.length
  let last = movesList[l - 1]
  
  if (check(cell, last) && !movesList.includes(cell)) {
      movesList.push(cell)
      document.getElementById(cell).innerHTML = counter
      document.getElementById('moves').innerHTML = movesList.join(', ')
      counter += 1
  }
}

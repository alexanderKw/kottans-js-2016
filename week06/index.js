"use strict"

function add(value) {

  if(!value) return 0

  value = value.slice()
  const delimitersList = /[\%\;\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g
  let values

  if(value.match(delimitersList)) {
    let delimiterReplace = value.replace(delimitersList, ",")
    values = delimiterReplace.split(",")
  } else {
    values = value.split(/[,\n]/)
  }

  let numbersArr = []
  values.forEach(item => {
    if(item < 1001) {
      numbersArr.push(item * 1)
    }
  })

  let negativeNum = []
  let result = numbersArr.reduce((sum, current) => {
    if(current < 0) {
      negativeNum.push(current)
      current = 0
    }
    return sum + current
  }, 0)

  if(negativeNum.length > 0) {
    throw new Error("Negatives not allowed " + negativeNum)
  }

  return result

}

module.exports = add

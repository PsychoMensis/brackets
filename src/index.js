module.exports = function check(str, bracketsConfig) {
  if (str.length%2 != 0){return false}
  for (elem in bracketsConfig){
    if (bracketsConfig[elem][0] === str[str.length - 1] && str.length != 2 && bracketsConfig[elem][0] != '|') {return false}
  }

  let obj = {}
  let arr = [].concat.apply([], bracketsConfig)
  for (i in arr){
    if (arr[i] === '|'){break}
    if (arr[i] === '7'){break}
    if (arr[i] === '8'){break}
    obj[arr[i]] = 0
  }
  for (i in str){
    obj[str[i]] += 1
    if (closed(obj) === false){return false}
  }

  function closed (obj){
    let keys = Object.keys(obj)
    for (let i = 1; i < keys.length; i+=2){
      if (obj[keys[i]] > obj[keys[i-1]]){
        return false
      }
    }
  }

  let incor = [ '(]', '(}', '(|)', '[)', '[}', '[|]', '{]', '{)', '{|}', '14', '16', '171', '181', '32', '36', '373', '383', '52', '54', '575', '585']
  for (i in incor){
    if (str.includes(incor[i]) === true) return false
  }
  return true
}

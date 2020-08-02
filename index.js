class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    let arr = string.split('')
    let filtered = arr.map(letter => {
      if (letter.match(/^[0-9a-zA-Z]+$/) != null || letter === '-' || letter === "'" || letter === " ") {
        return letter
      } else {
        return ''
      }
    })
    return filtered.join('')
  }


  static titleize(string) {
    let array = string.split(" ")
    let capitalArray = array.map(word => {
      if (word === 'a' || word === 'an' || word === 'but' || word === 'of' || word === 'and' || word === 'for' || word === 'at' || word === 'by' || word === 'from'|| word === 'the') {
        return word
      } else {
        return this.capitalize(word)
      }
    })
    capitalArray[0] = this.capitalize(capitalArray[0])
    return capitalArray.join(' ')
  }
}
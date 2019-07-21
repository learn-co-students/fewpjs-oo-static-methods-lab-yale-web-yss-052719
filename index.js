class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }

  static titleize(string) {
    let newString = this.capitalize(string)
    let words = newString.split(" ")
    let array = words.map( function(word) {
      if (!(word == 'the') && !(word == 'a') && !(word == 'an') && !(word == 'but') && !(word == 'of') && !(word == 'and') && !(word == 'for') && !(word == 'at') && !(word == 'by') && !(word == 'from'))  {
        return Formatter.capitalize(word)
      } else {
        return word
      }
    })
    return array.join(' ')
  }
}
class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    let str = string.replace(/[^A-Za-z0-9-" "']/gim,"");
    return str
  }

  // static titleize(string){
  //   let firstCapitalized = this.capitalize(string)
  //   let splitString = firstCapitalized.split(' ')
  //   let newStringArray = []
  //   for (let i = 0; i < splitString.length; i++){
  //     if (i !== "a" && i !== "an" && i !== "but" && i !== "of" && i !== "and" && i !== "for" && i !== "at" && i !== "by" && i !== "from") {
  //       let capitalized = Formatter.capitalize(i)
  //       newStringArray.push(capitalized)
  //     }
  //     else {
  //       newStringArray.push(i)
  //     }
  //   }
  //   return newStringArray.join(' ')
  // }

  static titleize(string) {

    let stringSplit = string.split(' ')
    let exceptionWords = [ "an", "but", "of", "and", "for", "at", "by", "from", "the", "a"]
    let titledString = stringSplit.map(function(word){
      if (exceptionWords.includes(word)) {
        return word
      }
      else {
        return Formatter.capitalize(word)
      }
    }).join(' ')
    return Formatter.capitalize(titledString)
  }
}

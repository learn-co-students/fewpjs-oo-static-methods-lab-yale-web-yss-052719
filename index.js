class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let lowercaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let capitalWords = string.split(" ").map(function(word) {
      if (lowercaseWords.includes(word)) {
        return word
      } else {
        return Formatter.capitalize(word)
      }
    });

    capitalWords[0] = this.capitalize(capitalWords[0])

    return capitalWords.join(" ")
  }
}
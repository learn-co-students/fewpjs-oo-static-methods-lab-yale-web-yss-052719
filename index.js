class Formatter {
  static capitalize(word) {
  	return word[0].toUpperCase() + word.slice(1)
  }

  static sanitize(word) {
  	return word.replace(/[^A-Za-z0-9-" "']+/g, '')
  }

  static titleize(sentence) {
  	let notCap = [ "an", "but", "of", "and", "for", "at", "by", "from", "the", "a"]
  	let split = sentence.split(" ")

  	let result = split.map(function(word) {
  		if (notCap.includes(word)) {
  			return word
  		}
  		else {
  			return Formatter.capitalize(word)
  		}
  	})

  	return Formatter.capitalize(result.join(" "))

  }
}
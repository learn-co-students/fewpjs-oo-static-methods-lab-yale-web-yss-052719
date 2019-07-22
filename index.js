class Formatter {
  //add static methods here
  static capitalize(string){
     return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-" "']+/g, '')
  }
  static titleize(string){
    let except = [ "an", "but", "of", "and", "for", "at", "by", "from", "the", "a"]
    let sentence = string.split(" ")
    let arr = []
    sentence.forEach(function(w){
      if(except.includes(w)){
        if(arr.length === 0){
          arr.push(Formatter.capitalize(w))
        } else {
          arr.push(w)
        } 
      } else {
        arr.push(Formatter.capitalize(w))
      }
    })  
    return arr.join(" ")
  }
}
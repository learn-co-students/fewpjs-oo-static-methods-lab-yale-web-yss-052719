class Formatter {

  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    let clean = string.split(" ").map(function(e){
      return e.replace(/[^0-9a-zA-Z'-]/g, '');
    }).join(" ")
    return clean
  }

static titleize(string) {
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = string.split(" ");
    let title = words.map(word => {
      if (!except.find(w => { return w === word })) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    }).join(" ")
    return title[0].toUpperCase() + title.slice(1);
  }

  // static sanitize(str) {
  //   let result = str.split(" ").map(w => {
  //     return  w.replace(/[^0-9a-zA-Z'-]/g, '');
  //   }).join(" ")
  //   return result
  // }
 
 

}
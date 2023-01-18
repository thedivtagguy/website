function wrapLastWord(str) {
  var words = str.split(" ");
  var totalWords = words.length;
  var wrapPoint = Math.round(totalWords * 0.7);
  return (
    words.slice(0, wrapPoint).join(" ") + " <span>" + words.slice(wrapPoint).join(" ") + "</span>"
  );
}

export default wrapLastWord;

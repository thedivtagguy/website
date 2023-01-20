function wrapLastWord(str, className) {
  var words = str.split(" ");
  var totalWords = words.length;
  var wrapPoint = Math.round(totalWords * 0.7);
  return (
    words.slice(0, wrapPoint).join(" ") +
    // If className is passed, wrap the last word in a span with the class name passed
    // Otherwise, just wrap the last word in a span
    (className
      ? ` <span class="${className}">${words.slice(wrapPoint).join(" ")}</span>`
      : ` <span>${words.slice(wrapPoint).join(" ")}</span>`)
  );
}

export default wrapLastWord;

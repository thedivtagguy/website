const readingTime = require("reading-time");

export const readingtime = (text) => {
  const result = readingTime(text);
  return result.text;
};

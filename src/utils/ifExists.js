// Function to check if a given image file exists in the given path
// and return true or false

const fs = require("fs");
const path = require("path");

const ifExists = (path) => {
  const filePath = path;
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

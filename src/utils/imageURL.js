// Function checks if strings starts with https:// or http://
// If not, then it returns the string with the path to the images folder

function imageURL(str) {
  if (str.startsWith("https://") || str.startsWith("http://")) {
    console.log("str starts with https:// or http://");
    return false;
  }
  return str;
}

export default imageURL;

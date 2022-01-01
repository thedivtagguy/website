// Program to collect Google Doc IDs 
// of all files present in a Google Drive Folder
// and write them to a file.

const CWD = process.cwd();
const fs = require("fs");
const fetch = require("node-fetch");
const getfilelist = require("google-drive-getfilelist");

const topFolderId = "xxx"; // Please set the top folder ID.
getfilelist.GetFileList(
  {
    auth: "3333",
    fields: "files(id)",
    id: topFolderId,
  },
  (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const fileList = res.fileList.flatMap(({ files }) => files);
    console.log(fileList);
    // Write the file list to a file to docs.json
    fs.writeFileSync(`${CWD}/docs.json`, JSON.stringify(fileList));
  }
);
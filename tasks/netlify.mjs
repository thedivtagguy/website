import { NetlifyAPI } from "netlify";
// Import fs
import fs from "fs";
import { config } from "dotenv";
// Read in netlify_key from .env
config();
const CWD = process.cwd();
const client = new NetlifyAPI(process.env.netlify_key);
const sites = await client.listSites();
let screenshots;
let updated;
// Find updated_at of site with id 7196b267-ca43-42dc-8670-6dc53300f092
for (let site of sites) {
  if (site.id === "7196b267-ca43-42dc-8670-6dc53300f092") {
    updated = site.updated_at;
  }
}

// Format updated_at to January 10, 2022
const date = new Date(updated);
const formattedDate = date.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

// JSON object is created with updated_at
const json = JSON.stringify({
  last_update: formattedDate
});
// Write to file
fs.writeFile(`${CWD}/src/data/last_update.json`, json, (err) => {
  if (err) throw err;
  console.log("Updated fetched and written to file");
});

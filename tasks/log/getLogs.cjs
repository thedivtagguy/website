// This script gets the API response from https://api.github.com/repos/thedivtagguy/thedivtagguy/issues
// And compiles it to a data file which can be used to draw our timeline
const fetch = require('node-fetch');
const fs = require('fs');
const keys = [
    "id",
    "state",
    "milestone",
    "comments_url",
    "created_at",
    "updated_at",
    "closed_at",
    "body",
    "title",
    "number",
    "html_url",
];

const commentKeys = [
    "body",
    "created_at",
    "updated_at",
]

const issueDetails = [];
let numIssues = 0;
const gitHubURL = "https://api.github.com/repos/thedivtagguy/thedivtagguy/issues";

// Get number of issues
fetch(gitHubURL)
    .then(res => res.json())
    .then(json => {
        // get "number" key
        numIssues = json.length;
        console.log(`Number of projects: ${numIssues}`);
        // Get the keys defined above
        for (let i = 0; i < numIssues; i++) {
            let issue = {};
            for (let j = 0; j < keys.length; j++) {
                issue[keys[j]] = json[i][keys[j]];
            }
            issueDetails.push(issue);
        }
    // Access each comment_url and push them to the issueDetails array
    }).then(() => {
        for (let i = 0; i < numIssues; i++) {
            fetch(issueDetails[i].comments_url)
                .then(res => res.json())
                .then(json => {
                    // Get the keys defined in commentKeys
                    for (let j = 0; j < json.length; j++) {
                        let comment = {};
                        for (let k = 0; k < commentKeys.length; k++) {
                            comment[commentKeys[k]] = json[j][commentKeys[k]];
                           
                        }
                        console.log(comment);
                        // Create a new key in the issueDetails array
                        issueDetails[i][`comment-${j}`] = comment;

                    }
                }).then(() => {
                    // save the issueDetails array to a file
                    fs.writeFileSync('./src/data/logs/timeline.json', JSON.stringify(issueDetails));
                });
        }
    })
    .catch(err => {
        console.log(err);
    });

// create a script to get reddit feed from a subreddit top 5 posts
// and save it to a file

const snoowrap = require("snoowrap");
const fs = require("fs");

const r = new snoowrap({
  userAgent: "rss-sub",
  clientId: "FcxBKqP8aoc1lM_tBXlPOw",
  clientSecret: "RVSODJi1oO36jcWpv-JwBtMNWQ2gyw",
  username: "emocanmimocan",
  password: "123321321a",
});

r.getSubreddit("javascript")
  .getTop({ time: "day", limit: 5 })
  .map((post) => {
    return { title: post.title, url: post.url };
  })
  .then((dt) => {
    fs.writeFile("reddit.json", JSON.stringify(dt), (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });

const RssParser = require("rss-parser");
const parser = new RssParser();

const subreddit = "SaaS";
const total_count = 10;

// Replace 'r/SUBREDDIT' with the name of the subreddit you want to access
const feedUrl = `https://www.reddit.com/r/${subreddit}/.rss`;

// Use the parser to fetch the RSS feed
parser.parseURL(feedUrl).then((feed) => {
  // Get the last 5 posts from the feed
  const posts = feed.items.slice(0, total_count);

  // Print the titles of the last total_count posts
  posts.forEach((post) => {
    console.log(post.title);
  });
});

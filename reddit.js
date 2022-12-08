const Parser = require("rss-parser");
const parser = new Parser();

export const GetFeed = async (subreddit, numberOfPosts) => {
  // Fetch the RSS feed for the specified subreddit
  const feed = await parser.parseURL(
    `https://www.reddit.com/r/${subreddit}/.rss`
  );

  // Print the title and link of the top 5 posts
  for (let i = 0; i < numberOfPosts; i++) {
    const post = feed.items[i];
    // TODO: retun an object with title and link
    console.log(`${post.title}: ${post.link}`);
  }
};

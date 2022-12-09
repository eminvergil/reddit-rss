import schedule from "node-schedule";
import { GetFeed } from "./helpers/reddit.js";
// const { InsertDataToSheet } = require("./helpers/sheet");

const job = schedule.scheduleJob("0 */2 * ? * *", function () {
  console.log("Running Cron Job");
  GetFeed("SaaS", 10).then((data) => {
    console.log(data);
    // InsertDataToSheet(data);
  });
});

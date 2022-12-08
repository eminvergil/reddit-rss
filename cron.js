const schedule = require("node-schedule");
const { GetFeed } = require("./reddit");
const { InsertDataToSheet } = require("./sheet");

const job = schedule.scheduleJob("0 16 * * *", function () {
  console.log("Running Cron Job");
  GetFeed("SaaS", 10).then((data) => {
    console.log(data);
    InsertDataToSheet(data);
  });
});

// Import the Google Sheets API
const { GoogleSpreadsheet } = require("google-spreadsheet");

// Set up your Google Sheet details
const SPREADSHEET_ID = "<YOUR_SPREADSHEET_ID>";
const SHEET_NAME = "<YOUR_SHEET_NAME>";

export const InsertDataToSheet = async (data) => {
  // Create a new instance of the Google Sheets API
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  // Authenticate with the Google Sheets API
  await doc.useServiceAccountAuth({
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  });

  // Load the Google Sheet
  await doc.loadInfo();

  // Get the Google Sheet
  const sheet = doc.sheetsByTitle[SHEET_NAME];

  // Add the data to the Google Sheet
  await sheet.addRow(data);
};

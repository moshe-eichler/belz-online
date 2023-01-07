import { google } from 'googleapis';

const arrayToObj = (rows) => {
    return rows.map((row) => ({
        ID: row[0],
        name: row[1],
        street: row[2],
        number: row[3],
        city: row[4],
        state: row[5],
        category: row[6],
        email: row[7],
        phone: row[8],
        picture: row[9],
        site: row[10],
    }));
}

const filterResults = (searchQuery, rows) => {
    let filteredArray = [];

    rows.map(array => {
        array.map(item => {
            if (item.includes(searchQuery)) {
                filteredArray.push(array);
                return;
            }
        })
    });

    return filteredArray;
}

const prepareResult = (searchQuery, rows) => {
    let filteredResults = searchQuery ? filterResults(searchQuery, rows) : rows;
    return arrayToObj(filteredResults);
}

export async function connectToGoogleSheets(searchQuery, skip, limit) {
    try {
        const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
        const jwt = new google.auth.JWT(
            `${process.env.GOOGLE_SHEETS_CLIENT_EMAIL}`,
            null,
            (`${process.env.GOOGLE_SHEETS_PRIVATE_KEY}` || ''),
            target
        );
        const sheets = google.sheets({ version: 'v4', auth: jwt });
        const ragne = `nextjs!A${skip + 2}:K${skip + 1 + limit}`;
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: `${process.env.SPREADSHEET_ID}`,
            range: ragne,
        });

        const rows = response.data.values;

        if (rows.length) {
            return { success: true, message: prepareResult(searchQuery, rows), code: response.status };
        }
    } catch (err) {
        console.log(err);
        return { success: false, message: err, code: err.code }
    }

    return { success: false, message: 'Something went wrong, please try again later.', code: 400 };
}
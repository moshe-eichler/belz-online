const { connectToGoogleSheets } = require('../../lib/google-sheets');
const url = require('url');

const getRecords = async (req, res) => {
	let queryObject = url.parse(req.url, true).query;
	let querySearch = queryObject.querySearch ? queryObject.querySearch.replace(/ /g, '" "') : '';
	let limit = queryObject.limit ? Math.min(queryObject.limit, 40) : 40; // To avoid scraping huge records.
	let skip = queryObject.skip ? Math.max(queryObject.skip, 0) : 0; // To avoid skip in minus

    res.json(await connectToGoogleSheets(querySearch, skip, limit));
}

export default getRecords;
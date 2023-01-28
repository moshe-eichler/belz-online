import protectAPI from '../../middleware/protectAPI';
const { connectToDatabase } = require('../../lib/mongodb');
const url = require('url');

const getContent = async (req, res) => {
    let queryObject = url.parse(req.url, true).query;
    let querySearch = '';
    if (queryObject.querySearch) querySearch = '"' + queryObject.querySearch.replace(/ /g, '" "') + '"';
    let limit = queryObject.limit ? Math.min(queryObject.limit, 40) : 40; // To avoid scraping huge records.
    let skip = queryObject.skip ? Math.max(queryObject.skip, 0) : 0; // To avoid skip in minus
    let source = queryObject.source

    try {
        // connect to the database
        let { db } = await connectToDatabase();

        // fetch the content
        let content = []
        if (querySearch) {
            content = await db
                .collection(source)
                .find({ $text: { $search: querySearch } })
                .project({ _id: 0, score: { $meta: 'textScore' } })
                .sort({ score: { $meta: 'textScore' }, family_name: 1, first_name: 1 })
                .limit(limit)
                .skip(skip)
                .toArray();
        } else {
            content = await db
                .collection(source)
                .find()
                .project({ _id: 0, phone_number: 0, mobile_phone: 0 })
                .sort({ family_name: 1, first_name: 1 })
                .limit(limit ? Number(limit) : 99999)
                .skip(skip ? Number(skip) : 0)
                .toArray();
        }

        // return the content
        return res.json({
            message: JSON.parse(JSON.stringify(content)),
            success: true,
        });

    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

export default protectAPI(getContent);
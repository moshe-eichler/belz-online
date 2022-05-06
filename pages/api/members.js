const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
const url = require('url');
import protectAPI from '../../middleware/protectAPI';


const getMembers = async (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    let querySearch = '';
    if (queryObject.querySearch) querySearch = '\"' + queryObject.querySearch.replace(/ /g, '\" \"') + '\"';

    let limit = queryObject.limit;
    let skip = queryObject.skip;

    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the members
        let members = []
        if (querySearch) {
            members = await db
            .collection('anash_belz')
            .find({ $text: { $search: querySearch} })
            .project( { _id:0, phone_number:0, mobile_phone:0 })
            .sort({ family_name: 1, first_name: 1})
            .limit(limit ? Number(limit) : 99999)
            .skip(skip ? Number(skip) : 0)
            .toArray();
        } else {
            members = await db
            .collection('anash_belz')
            .find()
            .project( { _id:0, phone_number:0, mobile_phone:0 })
            .sort({ family_name: 1, first_name: 1})
            .limit(limit ? Number(limit) : 99999)
            .skip(skip ? Number(skip) : 0)
            .toArray();
        }
        
        // return the members
        return res.json({
            message: JSON.parse(JSON.stringify(members)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
    finally {
        await client.close();
    }
}

export default protectAPI(getMembers);
const { connectToDatabase } = require('../../lib/mongodb');
// const ObjectId = require('mongodb').ObjectId;
// const url = require('url');

export default async function getMembers(req, res){
    // const queryObject = url.parse(req.url, true).query;
    // let limit = queryObject.limit;
    // let skip = queryObject.skip;
    
    // delete queryObject.limit;
    // delete queryObject.skip;

    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the members
        let members = await db
            .collection('business_belz')
            .find()
            .sort()
            .toArray();
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
}
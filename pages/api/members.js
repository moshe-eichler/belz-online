const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
const url = require('url');

export default async function getMembers(req,res){
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject)
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the members
        let members = await db
            .collection('anash_belz')
            .find(queryObject)
            .sort({ published: -1 })
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
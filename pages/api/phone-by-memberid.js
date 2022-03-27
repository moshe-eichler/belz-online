const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
const url = require('url');

export default async function getPhoneByMemberId(req, res){
    const queryObject = url.parse(req.url, true).query;

    const memberId = queryObject.memberid;
    console.log(memberId)

    try {
        // connect to the database
        const { db } = await connectToDatabase();
        // fetch the members
        const memberData = await db
        .collection('anash_belz')
        .findOne({ 'ID': memberId });

        console.log(memberData);

        return res.json({
            message: {
                'phone_number': memberData.phone_number,
                'mobile_phone': memberData.mobile_phone
            },
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
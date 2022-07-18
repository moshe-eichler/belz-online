const nodemailer = require('nodemailer')

export default function (req, res) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'belzeanash@gmail.com',
            pass: process.env.EMAIL_PASSWORD,
        },

        secure: true,
    })

    let mailData = null;

    if (req.body.type == 'members') {
        mailData = {
            from: 'belzeanash@gmail.com',
            to: 'belzeanash@gmail.com',
            subject: `עדכון/הוספת מנוי`,
            html: `<p>שם פרטי: <b>${req.body.data.pName}</b> שם משפחה: <b>${req.body.data.fName}</b></p>
            <p>כתובת: <b>${req.body.data.address}</b> מספר: <b>${req.body.data.number}</b> עיר: <b>${req.body.data.city}</b></p>
            <p>טלפון: <b>${req.body.data.phone}</b> טלפון נייד: <b>${req.body.data.cellphone}</b></p>
            <p>בן: <b>${req.body.data.father}</b> חתן: <b>${req.body.data.fatherInLaw}</b></p>`
        }
    } else {
        mailData = {
            from: 'belzeanash@gmail.com',
            to: 'belzeanash@gmail.com',
            subject: `עדכון/הוספת עסק`,
            html: `<p>שם העסק: <b>${req.body.data.bName}</b> תחום העסק: <b>${req.body.data.cName}</b></p>
            <p>כתובת: <b>${req.body.data.address}</b> מספר: <b>${req.body.data.number}</b> עיר: <b>${req.body.data.city}</b></p>
            <p>טלפון: <b>${req.body.data.phone}</b> טלפון נייד: <b>${req.body.data.cellphone}</b></p>
            <p>איש קשר: <b>${req.body.data.contact}</b> אימייל: <b>${req.body.data.email}</b></p>`,
            attachments: [
                {
                    'filename': req.body.data.pic,
                    'path': req.body.data.pic
                }
            ]
        }
    }
    
    transporter.sendMail(mailData, function (err, info) {
        if(err){
            console.log(err);
            res.status(400);
        }
        else
            console.log(info);
            res.status(200);
    })
}

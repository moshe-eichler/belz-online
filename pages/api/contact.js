const nodemailer = require('nodemailer');
import multiparty from "multiparty";

export default async function (req, res) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'belzeanash@gmail.com',
            pass: process.env.EMAIL_PASSWORD,
        },

        secure: true,
    })

    let mailData = null;

    if (req.query.type == 'members') {
        mailData = {
            from: 'belzeanash@gmail.com',
            to: 'belzeanash@gmail.com',
            subject: `עדכון/הוספת מנוי`,
            html: `<p>שם פרטי: <b>${req.body.firstName}</b> שם משפחה: <b>${req.body.familyName}</b></p>
            <p>כתובת: <b>${req.body.address}</b> מספר: <b>${req.body.number}</b> עיר: <b>${req.body.city}</b></p>
            <p>טלפון: <b>${req.body.phone}</b> טלפון נייד: <b>${req.body.cellphone}</b></p>
            <p>בן: <b>${req.body.father}</b> חתן: <b>${req.body.fatherInLaw}</b></p>`
        }
    } else {

        // Parse the form
        const form = new multiparty.Form()
        const data = await new Promise((resolve, reject) => {
            form.parse(req, function (err, fields, files) {
            if (err) reject({ err })
            resolve({ fields, files })
            })
        })

        mailData = {
            from: 'belzeanash@gmail.com',
            to: 'belzeanash@gmail.com',
            subject: `עדכון/הוספת עסק`,
            html: `<p>שם העסק: <b>${data.fields.businessName}</b> תחום העסק: <b>${data.fields.categoryName}</b></p>
            <p>כתובת: <b>${data.fields.address}</b> מספר: <b>${data.fields.number}</b> עיר: <b>${data.fields.city}</b></p>
            <p>טלפון: <b>${data.fields.phone}</b> טלפון נייד: <b>${data.fields.cellphone}</b></p>
            <p>איש קשר: <b>${data.fields.contact}</b> אימייל: <b>${data.fields.email}</b></p>`,
            attachments: [
                {
                    'filename': data.files.pic[0].originalFilename,
                    'path': data.files.pic[0].path
                }
            ]
        }
    }
    
    transporter.sendMail(mailData, function (err, info) {
        console.log('sending now');
        if(err) {
            console.log('error');
            console.log(err);
            res.status(400);
        }
        else {
            console.log('success');
            console.log(info);
            res.status(200);
        }
    })
}

export const config = {
    api: {
      bodyParser: false,
    },
  }

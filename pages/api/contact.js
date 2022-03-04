const nodemailer = require('nodemailer')

export default function (req, res) {
    require('dotenv').config()

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'nzuzsus@gmail.com',
            pass: 55668899,
        },
        secure: true,
    })
    
    const mailData = {
        from: 'nzuzsus@gmail.com',
        to: 'm0548597760@gmail.com',
        subject: `עדכון/הוספת מנוי`,
        html: `<p>שם פרטי: <b>${req.body.pName}</b> שם משפחה: <b>${req.body.fName}</b></p>
        <p>כתובת: <b>${req.body.address}</b></p>
        <p>טלפון: <b>${req.body.phone}</b> טלפון נייד: <b>${req.body.cellphone}</b></p>
        <p>בן: <b>${req.body.father}</b> חתן: <b>${req.body.fatherInLaw}</b></p>`
    }
    
    transporter.sendMail(mailData, function (err, info) {
        if(err){
            console.log(err)
        }
        else
            console.log(info)
    })
    res.status(200)
}

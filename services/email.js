const nodemailer = require('nodemailer');

const sendCustomEmail = async (name, email , message)=>{

    const auth = nodemailer.createTransport({
        service:"gmail",
        port:465,
        secure:true,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    });

    const template = {
        from: email,
        to:"saoodchoudhary9@gmail.com" ,
        subject:"From Portfolio - Contact Form Submission",
        html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
        }
        .email-container {
            background-color: #ffffff;
            border: 1px solid #dddddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 600px;
            width: 100%;
        }
        .email-header {
            text-align: center;
            background-color: #4CAF50;
            color: white;
            padding: 10px 0;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        .email-body {
            padding: 20px;
        }
        .email-body h2 {
            margin-top: 0;
            color: #333333;
        }
        .email-body p {
            margin: 10px 0;
            color: #555555;
        }
        .email-footer {
            text-align: center;
            font-size: 12px;
            color: #999999;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>Contact Form Submission</h1>
        </div>
        <div class="email-body">
            <h2>New Message from ${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        </div>
        <div class="email-footer">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`,
        text:` ${name} ${email} ${message}`
    };

    auth.sendMail(template, (err, res)=>{
        if(err){
            console.log("err",err)
            throw err;
        }
        console.log('sucess mail')
    })

}

module.exports = sendCustomEmail
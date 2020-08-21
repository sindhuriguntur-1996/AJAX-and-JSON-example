 var nodemailer=require('nodemailer');

 var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sindhu.guntur10@gmail.com',
      pass: ''
    }
  });
  
  var mailOptions = {
    from: 'sindhu.guntur10@gmail.com',
    to: 'sindhu.guntur10@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3600;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port);

// Go to tracking page.
app.get('/tracking', function(req, res) {
  res.sendFile(__dirname + '/public/tracking/tracking.html');
});

// Send contact form email.
app.post('/sendContactForm', function(req, res) {
  console.log('Sending email...');
  console.log(req.body);
  res.send('Handle contact form. Work in progress.');

  // Request body.
  /*
    {
      name,
      email,
      subject,
      message
    }
  */
  const requestBody = req.body;
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 's.roibon@gmail.com',
      pass: 's4lv4d0r82'
    }
  });
  const mailOptions = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: 's.roibon@gmail.com',
    subject: 'We Carry formulario de contacto.',
    html: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };

  smtpTrans.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(`Error while sending an email: ${err}`);
    } else {
      console.log(`Email sent. info: ${info}`);
    }
  });
});

console.log(`App server running on  port: ${port}`);

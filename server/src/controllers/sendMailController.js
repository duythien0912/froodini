import nodemailer from 'nodemailer';

export default {
  sendMail(req, res) {
    console.log('send mail');
    console.log(req.body);
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    const mailOptions = {
      from: process.env.EMAIL_USER, // sender address
      to: process.env.EMAIL_SEND, // list of receivers
      subject: `Request add more category from ${req.body.name} by ${
        req.body.email ? req.body.email : 'Anonymous'
      }`, // Subject line
      html: `
      <h2>Name: ${req.body.name}</h2>
      <h2>Email: ${req.body.email ? req.body.email : 'Anonymous'}</h2>
      <h3>Message: ${req.body.message}</h3>` // plain text body
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(info);
        res.send(info);
      }
    });
    return true;
  }
};

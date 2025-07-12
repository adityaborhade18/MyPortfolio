import nodemailer from "nodemailer"




const contact = async (req, res) => {
  const { name, email, phone, message } = req.body;


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASS, 
    }
  });

  
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: 'Contact Us',
    text: `Name: ${name}\nEmail: ${email}\nphone:${phone} \nMessage: ${message}`
  };

  
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
};

export default contact;

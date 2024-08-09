// Import the Nodemailer library
import * as nodemailer from 'nodemailer';

// Define the mail transport options
interface MailTransportOptions {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Define the email options
interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

// Create a transport object
const transportOptions: MailTransportOptions = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'techhacker1213@gmail.com',
    pass: 'ckjt fxsz sbjp wmvt'
  }
};

// Create a mail options object
const mailOptions: MailOptions = {
  from: 'techhacker1213@gmail.com',
  to: 'ashu32696@gmail.com',
  subject: 'Hello brother ashish this side from Your college!',
  text: 'This is a test email sent from Node.js.'
};


export function Mailer(){


// Create a transporter object
const transporter = nodemailer.createTransport(transportOptions);

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}

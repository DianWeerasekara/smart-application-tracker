const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendInterviewReminder = async(
    email,
    firstName,
    company,
    position,
    interviewDate
) => {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Interview Reminder - ${company}`,
      html: `
            <h2>Hello ${firstName}</h2>

            <p>This is a reminder that your interview is coming up.</p>

            <p>
                <strong>Company:</strong> ${company}<br/>
                <strong>Position:</strong> ${position}<br/>
                <strong>Date:</strong> ${new Date(interviewDate).toLocaleString()}
            </p>

            <p>Good luck!</p>
        `,
    });
}

module.exports = {
    sendInterviewReminder
}
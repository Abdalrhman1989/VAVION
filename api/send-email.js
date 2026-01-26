import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, phone, service, date, message } = req.body;

    // Validate required fields
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and Email are required' });
    }

    try {
        // Configure Transporter with Gmail Credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Will be set in Vercel Env Vars
                pass: process.env.EMAIL_PASS, // Will be set in Vercel Env Vars
            },
        });

        // Email Content
        const mailOptions = {
            from: \`"\${name}" <\${process.env.EMAIL_USER}>\`, // Sender address (must be the authenticated user for Gmail)
      to: process.env.EMAIL_USER, // Send TO yourself
      replyTo: email, // Valid Reply-To based on user input
      subject: \`New Booking Request: \${service || 'General Inquiry'}\`,
      text: \`
        New Booking Request from Website:
        
        Name: \${name}
        Email: \${email}
        Phone: \${phone || 'N/A'}
        Service: \${service || 'N/A'}
        Target Date: \${date || 'N/A'}
        
        Message:
        \${message}
      \`,
      html: \`
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> \${name}</p>
        <p><strong>Email:</strong> \${email}</p>
        <p><strong>Phone:</strong> \${phone || 'N/A'}</p>
        <p><strong>Service:</strong> \${service || 'N/A'}</p>
        <p><strong>Target Date:</strong> \${date || 'N/A'}</p>
        <h3>Message:</h3>
        <p>\${message}</p>
      \`,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}

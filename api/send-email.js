import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and Email are required' });
  }

  try {
    // Clean credentials (remove all spaces/tabs)
    const cleanUser = process.env.EMAIL_USER ? process.env.EMAIL_USER.replace(/\s+/g, '') : '';
    const cleanPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '';

    // Explicit SMTP Configuration for better reliability
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: cleanUser,
        pass: cleanPass,
      },
    });

    const primaryColor = '#e95c27'; // Vavion Orange
    const logoUrl = 'https://vavion.vercel.app/logo-dark.png';

    // --- HTML TEMPLATE GENERATOR ---
    const createEmailTemplate = (isForAdmin) => {
      const title = isForAdmin ? 'New Booking Request' : 'Thank You for Contacting Vavion';

      const content = isForAdmin
        ? `
          <div class="info-box">
            <h3>📌 Client Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Service:</strong> ${service || 'General Inquiry'}</p>
          </div>
          <div class="message-box">
            <h3>💬 Message</h3>
            <p>${message ? message.replace(/\n/g, '<br>') : 'No message provided'}</p>
          </div>
          `
        : `
          <p>Dear <strong>${name}</strong>,</p>
          <p>Thank you for reaching out to <strong>Vavion Creative</strong>. We have received your request regarding <strong>${service || 'your project'}</strong>.</p>
          <p>Our team is reviewing your details and will get back to you shortly.</p>
          
          <div class="summary">
            <h3>Your Request Summary:</h3>
            <ul>
              <li><strong>Service:</strong> ${service || 'General Inquiry'}</li>
            </ul>
          </div>

          <p>Best Regards,<br><strong>Vavion Creative Team</strong></p>
          `;

      return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
            .header { background-color: #1a1a1a; padding: 30px; text-align: center; border-bottom: 4px solid ${primaryColor}; }
            .header img { height: 60px; width: auto; }
            .content { padding: 40px 30px; color: #333; line-height: 1.6; }
            .content h2 { color: ${primaryColor}; margin-top: 0; }
            .content h3 { color: #555; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 25px; }
            .info-box { background-color: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid ${primaryColor}; margin-bottom: 20px; }
            .message-box { background-color: #fff8f5; padding: 20px; border-radius: 8px; border: 1px solid #ffeadd; }
            .summary { background-color: #f0f4f8; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .footer { background-color: #1a1a1a; padding: 20px; text-align: center; color: #888; font-size: 12px; }
            .footer a { color: ${primaryColor}; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
               <img src="${logoUrl}" alt="Vavion Creative Logo"> 
            </div>
            <div class="content">
              <h2>${title}</h2>
              ${content}
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Vavion Creative. All rights reserved.</p>
              <p>Jeddah & Madinah, Saudi Arabia</p>
              <p><a href="https://vavion.vercel.app">www.vavion.com</a></p>
            </div>
          </div>
        </body>
        </html>
      `;
    };

    // Send Admin Email
    await transporter.sendMail({
      from: `"${name}" <${cleanUser}>`,
      to: cleanUser,
      replyTo: email,
      subject: `🚀 New Request: ${name} - ${service || 'General'}`,
      html: createEmailTemplate(true)
    });

    // Send User Email
    await transporter.sendMail({
      from: `"Vavion Creative" <${cleanUser}>`,
      to: email,
      subject: `We received your request! - Vavion Creative`,
      html: createEmailTemplate(false)
    });

    return res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('SERVER ERROR SENDING EMAIL:', error);
    return res.status(500).json({
      message: 'Failed to send email',
      error: error.message,
      stack: error.response // provide more SMTP details if available
    });
  }
}

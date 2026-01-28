import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, fullName, email, phone, service, message } = req.body;

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
    const logoUrl = 'https://vavion.vercel.app/logo-dark.png'; // Ensure this URL is valid
    const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Riyadh' });

    // --- HTML TEMPLATE GENERATOR ---
    const createEmailTemplate = (isForAdmin) => {
      const title = isForAdmin ? 'New Project Request' : 'We Received Your Request';
      const subTitle = isForAdmin
        ? `A new inquiry has been submitted via the website.`
        : `Thank you for choosing Vavion Creative. We have received your request.`;

      const adminContent = `
        <div class="info-section">
            <h3>👤 Client Information</h3>
            <table class="info-table">
                <tr>
                    <td class="label">Short Name:</td>
                    <td class="value">${name}</td>
                </tr>
                <tr>
                    <td class="label">Full Name:</td>
                    <td class="value">${fullName || 'N/A'}</td>
                </tr>
                <tr>
                    <td class="label">Email:</td>
                    <td class="value"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                    <td class="label">Phone:</td>
                    <td class="value"><a href="tel:+${phone?.replace(/\D/g, '') || ''}">${phone || 'N/A'}</a></td>
                </tr>
            </table>
        </div>

        <div class="info-section">
            <h3>🚀 Project Details</h3>
            <table class="info-table">
                <tr>
                    <td class="label">Service:</td>
                    <td class="value"><strong>${service || 'General Inquiry'}</strong></td>
                </tr>
                <tr>
                    <td class="label">Date:</td>
                    <td class="value">${date}</td>
                </tr>
            </table>
            
            <div class="message-box">
                <h4>Message / Details:</h4>
                <p>${message ? message.replace(/\n/g, '<br>') : 'No details provided.'}</p>
            </div>
        </div>
      `;

      const userContent = `
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for reaching out to <strong>Vavion Creative</strong>. This email confirms that we have successfully received your request regarding <strong>${service || 'your project'}</strong>.</p>
        
        <p>Our team is currently reviewing the details you provided. We will get back to you shortly to discuss the next steps.</p>

        <div class="summary-box">
            <h3>📝 Request Summary</h3>
            <ul>
                <li><strong>Reference Name:</strong> ${fullName || name}</li>
                <li><strong>Service:</strong> ${service || 'General Inquiry'}</li>
                <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
                <li><strong>Date:</strong> ${date}</li>
            </ul>
        </div>

        <p>If you have any immediate questions, feel free to reply to this email or contact us directly at <a href="tel:+966565094364">+966 56 509 4364</a>.</p>
        
        <p style="margin-top: 30px;">Best Regards,<br><strong>Vavion Creative Team</strong></p>
      `;

      return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; color: #333; }
            .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
            
            .header { background-color: #1a1a1a; padding: 30px; text-align: center; border-bottom: 4px solid ${primaryColor}; }
            .header img { height: 50px; width: auto; object-fit: contain; }
            
            .hero { background-color: ${isForAdmin ? '#fff3cd' : '#fff'}; padding: 30px 30px 10px; text-align: center; }
            .hero h2 { color: ${primaryColor}; margin: 0 0 10px; font-size: 24px; }
            .hero p { color: #666; font-size: 16px; margin: 0; }

            .content { padding: 20px 30px 40px; line-height: 1.6; font-size: 15px; }
            
            .info-section { margin-bottom: 25px; }
            .info-section h3 { font-size: 18px; color: #444; border-bottom: 1px solid #eee; padding-bottom: 8px; margin-bottom: 15px; }
            
            .info-table { width: 100%; border-collapse: collapse; }
            .info-table td { padding: 8px 0; vertical-align: top; }
            .info-table .label { width: 120px; color: #888; font-weight: 500; }
            .info-table .value { color: #222; font-weight: 600; }
            
            .message-box { background-color: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 3px solid ${primaryColor}; margin-top: 15px; }
            .message-box h4 { margin: 0 0 10px; color: #555; }
            
            .summary-box { background-color: #f0f7ff; padding: 20px; border-radius: 12px; border: 1px solid #dcecfd; margin: 20px 0; }
            .summary-box h3 { margin-top: 0; color: ${primaryColor}; font-size: 16px; }
            .summary-box ul { padding-left: 20px; margin-bottom: 0; }
            .summary-box li { margin-bottom: 8px; }

            .footer { background-color: #1a1a1a; padding: 25px; text-align: center; color: #888; font-size: 13px; border-top: 1px solid #333; }
            .footer p { margin: 5px 0; }
            .footer a { color: ${primaryColor}; text-decoration: none; }
            .social-links { margin-top: 15px; }
            
            @media only screen and (max-width: 600px) {
              .container { width: 100% !important; border-radius: 0; }
              .content { padding: 20px; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
               <img src="${logoUrl}" alt="Vavion Creative"> 
            </div>
            
            <div class="hero">
                <h2>${title}</h2>
                <p>${subTitle}</p>
            </div>

            <div class="content">
              ${isForAdmin ? adminContent : userContent}
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

    // 1. Send Admin Email
    try {
      await transporter.sendMail({
        from: `"Website Form" <${cleanUser}>`,
        to: cleanUser, // Admin receives it
        replyTo: email,
        subject: `📌 New Request: ${name} (${service || 'General'})`,
        html: createEmailTemplate(true)
      });
      console.log("Admin email sent.");
    } catch (err) {
      console.error("Failed to send Admin email:", err);
      // Continue to try sending user email even if admin fails? 
      // Usually if admin fails, user might also fail, but let's try.
    }

    // 2. Send User Email (Confirmation)
    try {
      await transporter.sendMail({
        from: `"Vavion Creative" <${cleanUser}>`,
        to: email, // User receives it
        subject: `Request Received! - Vavion Creative`,
        html: createEmailTemplate(false)
      });
      console.log("User email sent.");
    } catch (err) {
      console.error("Failed to send User email:", err);
    }

    return res.status(200).json({ message: 'Request processed successfully' });
  } catch (error) {
    console.error('SERVER ERROR:', error);
    return res.status(500).json({
      message: 'Failed to process request',
      error: error.message
    });
  }
}

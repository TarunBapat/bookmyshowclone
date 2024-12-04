function generateEmailTemplate(resetLink) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home - Forgot Password</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f9; color: #333; text-align: center;">
    
      <div style="max-width: 600px; margin: 50px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #4CAF50; margin-bottom: 20px;">Welcome to Our Website</h1>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 30px;">
          If you've forgotten your password, click the link below to reset it. A reset link will be sent to your registered email.
        </p>
        <a href=${resetLink} style="display: inline-block; background: #4CAF50; color: #fff; text-decoration: none; font-size: 16px; padding: 10px 20px; border-radius: 5px;">
          Reset Your Password
        </a>
        <p style="margin-top: 20px; font-size: 14px; color: #888;">
          If you didn't request a password reset, please ignore this message.
        </p>
      </div>
    
      <footer style="margin-top: 30px; font-size: 12px; color: #aaa;">
        &copy; 2024 Your Company Name. All Rights Reserved.
      </footer>
    
    </body>
    </html>`;
}
export default generateEmailTemplate;

export const template = (token) => {
  return `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px 20px; background-color: #020617; color: #F3F4F6; text-align: center;">
    <div style="max-width: 500px; margin: 0 auto; background-color: #0f172a; padding: 40px 30px; border-radius: 12px; border: 1px solid #1e3a8a;">
      
      <div style="margin-bottom: 25px;">
        <img src="https://i.pinimg.com/736x/68/0e/d9/680ed9ad3e25665eb9f5d9f598a119b7.jpg" alt="Games Store Logo" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 2px solid #3B82F6;">
      </div>

      <h2 style="margin: 0 0 15px 0; color: #ffffff; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">
        Epic Games Await You! 🎮
      </h2>
      
      <p style="font-size: 16px; line-height: 1.6; color: #D1D5DB; margin-bottom: 25px;">
        Hi there, <br><br>
        Thanks for signing up! Please confirm your email to start exploring the best collection of PC and Console games at unbeatable prices.
      </p>

      <a href="http://localhost:3000/users/verify/${token}"
         style="display: inline-block; padding: 14px 28px; background-color: #3B82F6; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
         Verify Email Address
      </a>

      <hr style="border: none; border-top: 1px solid #1e3a8a; margin: 30px 0;">

      <p style="margin-top: 20px; font-size: 12px; color: #9CA3AF;">
        If you didn't create an account, you can safely ignore this email.
      </p>

      <p style="margin-top: 10px; font-size: 12px; color: #9CA3AF;">
        © 2026 Games Store. All rights reserved.
      </p>

    </div>
  </div>
  `;
};
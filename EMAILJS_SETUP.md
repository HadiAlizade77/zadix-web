# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form.

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID**

## Important: How EmailJS "From" Address Works

**The "From" address in emails will always show your EmailJS service email (e.g., your Gmail), NOT the form submitter's email.** This is a security feature of EmailJS and most email services to prevent spoofing.

**What you'll see:**
- From: Your Name (your-email@gmail.com)
- Subject: Contact Form: John Doe (via Zadix Contact Form)

**How to identify the real sender:**
- The subject line will show the submitter's name
- The email body contains all their contact information
- Use the Reply-To field to respond directly to them

## 3. Create Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use this improved template structure:

**Subject:** `Contact Form: {{user_name}} from {{company}}`

**To Email:** Use your email address (e.g., admin@yourdomain.com)

**Template Body:**
```
NEW CONTACT FORM SUBMISSION

Contact Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{user_name}}
Email: {{user_email}}
Company: {{company}}
Role: {{role}}
Phone: {{phone}}
Industry: {{industry}}

Project Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Systems in use: {{systems}}
Contains PII/PHI: {{sensitivity}}
Daily/weekly volume: {{volume}}
Target deadline: {{deadline}}
Budget bracket: {{budget}}

Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This form was submitted from zadix.ai contact page.
Reply directly to this email to respond to {{user_name}}.
```

4. **Important Settings in EmailJS Template:**
   - Set **Reply-To** field to: `{{reply_to}}`
   - This allows you to reply directly to the form submitter

5. Save the template and note down the **Template ID**

## 4. Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## 5. Update Environment Variables

Update the `.env.local` file with your actual values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Update Email Destination

In the Contact component (`components/pages/Contact.tsx`), update line 49:

```typescript
to_email: 'admin@yourdomain.com' // Replace with your actual email
```

Make sure this matches the email address you want to receive the form submissions.

## 7. Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the submission

## Features Implemented

- ✅ Form validation
- ✅ Loading states during submission
- ✅ Success modal after successful submission
- ✅ Error handling and display
- ✅ Form reset after successful submission
- ✅ EmailJS integration

## Troubleshooting

- Make sure all environment variables are set correctly
- Check that your email service is properly configured in EmailJS
- Verify that your template variables match the ones used in the code
- Check the browser console for any error messages

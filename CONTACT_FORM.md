# Contact Form - EmailJS Integration

## ⚠️ Important: Email "From" Address Behavior

**The "From" field in emails will always show your EmailJS service email address, NOT the form submitter's email.** This is a security limitation of EmailJS and most email providers.

**What you'll see:**
- **From:** Your Name (your-email@gmail.com)  
- **Subject:** Contact Form: John Doe (via Zadix Contact Form)
- **Reply-To:** john.doe@company.com (the actual submitter)

**How to handle this:**
- The subject line clearly identifies the real sender
- All contact details are in the email body
- Click "Reply" to respond directly to the form submitter
- The Reply-To field is automatically set to their email

## Features

✅ **Form Validation** - All required fields are validated  
✅ **Email Integration** - Sends emails via EmailJS service  
✅ **Loading States** - Shows spinner while submitting  
✅ **Success Modal** - Displays confirmation after successful submission  
✅ **Error Handling** - Shows user-friendly error messages  
✅ **Form Reset** - Clears form after successful submission  
✅ **Responsive Design** - Works on all device sizes  

## Quick Setup

1. **Install EmailJS** (already done):
   ```bash
   npm install @emailjs/browser
   ```

2. **Configure EmailJS**:
   - Copy `.env.example` to `.env.local`
   - Follow the setup guide in `EMAILJS_SETUP.md`
   - Update your EmailJS credentials in `.env.local`

3. **Update email destination**:
   - Edit `components/pages/Contact.tsx` line 49
   - Change `admin@zadix.ai` to your actual email

## How it works

1. User fills out the contact form
2. Form validates all required fields  
3. On submit, shows loading spinner
4. Sends email via EmailJS service
5. Shows success modal on completion
6. Form resets for next submission

## Email Template Variables

The following variables are sent to your EmailJS template:

- `{{from_name}}` - Shows as "Name (via Zadix Contact Form)" in subject
- `{{user_name}}` - User's actual full name for email body
- `{{user_email}}` - User's email address for email body
- `{{reply_to}}` - User's email (set as Reply-To header)
- `{{company}}` - User's company name
- `{{role}}` - User's job role
- `{{phone}}` - User's phone number
- `{{industry}}` - Selected industry
- `{{systems}}` - Systems they currently use
- `{{sensitivity}}` - Whether data contains PII/PHI
- `{{volume}}` - Daily/weekly volume of work
- `{{deadline}}` - Target deadline
- `{{budget}}` - Budget bracket
- `{{message}}` - Their workflow challenge description
- `{{to_name}}` - Your team name (Zadix Request)
- `{{to_email}}` - Your email address

## File Uploads

The form includes a file upload field for sample documents, but this requires additional backend processing (not handled by EmailJS). You may want to integrate with a service like:

- Uploadthing
- Cloudinary  
- AWS S3
- Or remove the file upload field if not needed

## Troubleshooting

- Check browser console for error messages
- Verify EmailJS credentials in `.env.local`
- Ensure your EmailJS service and template are properly configured
- Check your email spam folder for test messages

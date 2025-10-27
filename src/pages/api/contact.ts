import type { APIRoute } from 'astro';

interface ContactFormData {
  'first-name': string;
  'last-name': string;
  email: string;
  phone?: string;
  company: string;
  website: string;
  'service-interest': string;
  message?: string;
  consent: string;
}

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    // Parse form data
    const formData = await request.formData();
    const data: ContactFormData = {
      'first-name': formData.get('first-name')?.toString() || '',
      'last-name': formData.get('last-name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      phone: formData.get('phone')?.toString(),
      company: formData.get('company')?.toString() || '',
      website: formData.get('website')?.toString() || '',
      'service-interest': formData.get('service-interest')?.toString() || '',
      message: formData.get('message')?.toString(),
      consent: formData.get('consent')?.toString() || '',
    };

    // Validation
    const errors: string[] = [];

    if (!data['first-name']) errors.push('First name is required');
    if (!data['last-name']) errors.push('Last name is required');
    if (!data.email || !isValidEmail(data.email)) errors.push('Valid email is required');
    if (!data.company) errors.push('Company name is required');
    if (!data.website || !isValidUrl(data.website)) errors.push('Valid website URL is required');
    if (!data['service-interest']) errors.push('Service interest is required');
    if (!data.consent) errors.push('Consent is required');

    if (errors.length > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          errors,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Send email notification (using your preferred email service)
    // Example: SendGrid, Mailgun, AWS SES, or Resend
    const emailSent = await sendEmailNotification(data);

    if (!emailSent) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Failed to send email notification. Please try again or contact us directly.',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Optionally save to database or CRM
    // await saveToCRM(data);

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for your inquiry! We will contact you within 24 hours.',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};

// Helper function to validate email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to validate URL
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Email notification function
// This is a placeholder - you should integrate with your preferred email service
async function sendEmailNotification(data: ContactFormData): Promise<boolean> {
  // IMPLEMENTATION OPTIONS:

  // Option 1: Use Resend (modern, simple, good for transactional emails)
  // https://resend.com/docs/send-with-nodejs
  /*
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'contact@outcomedigital.co.uk',
      to: 'hello@outcomemarketing.co.uk',
      subject: `New Contact Form Submission: ${data['service-interest']}`,
      html: formatEmailHtml(data),
    });
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
  */

  // Option 2: Use SendGrid
  /*
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

  const msg = {
    to: 'hello@outcomemarketing.co.uk',
    from: 'contact@outcomedigital.co.uk',
    subject: `New Contact Form Submission: ${data['service-interest']}`,
    html: formatEmailHtml(data),
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
  */

  // Option 3: Use Netlify Forms (if hosting on Netlify)
  // Just add name="contact" and data-netlify="true" to the form element
  // No server-side code needed

  // Option 4: Use Formspree (external service)
  // Change form action to https://formspree.io/f/YOUR_FORM_ID
  // No server-side code needed

  // TEMPORARY: Console log for development
  console.log('Contact form submission:', {
    name: `${data['first-name']} ${data['last-name']}`,
    email: data.email,
    company: data.company,
    website: data.website,
    service: data['service-interest'],
    message: data.message,
  });

  // Return true in development mode to allow testing
  // In production, replace this with actual email sending
  return true;
}

// Format email HTML (customize as needed)
function formatEmailHtml(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #1A5F7A;
            color: white;
            padding: 20px;
            text-align: center;
          }
          .content {
            background-color: #f9f9f9;
            padding: 30px;
          }
          .field {
            margin-bottom: 15px;
          }
          .label {
            font-weight: bold;
            color: #1A5F7A;
          }
          .value {
            margin-top: 5px;
          }
          .footer {
            text-align: center;
            padding: 20px;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data['first-name']} ${data['last-name']}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            ${
              data.phone
                ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${data.phone}</div>
            </div>
            `
                : ''
            }
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${data.company}</div>
            </div>
            <div class="field">
              <div class="label">Website:</div>
              <div class="value"><a href="${data.website}" target="_blank">${data.website}</a></div>
            </div>
            <div class="field">
              <div class="label">Service Interest:</div>
              <div class="value">${data['service-interest']}</div>
            </div>
            ${
              data.message
                ? `
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
            `
                : ''
            }
            <div class="field">
              <div class="label">Consent Given:</div>
              <div class="value">Yes</div>
            </div>
            <div class="field">
              <div class="label">Submitted:</div>
              <div class="value">${new Date().toLocaleString('en-GB', {
                dateStyle: 'full',
                timeStyle: 'short',
              })}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Outcome Digital Marketing contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

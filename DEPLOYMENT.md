# Outcome Digital Marketing Website - Deployment Guide

## Overview

This document provides complete instructions for deploying the Outcome Digital Marketing website to production. The site is built with Astro 5.14.4 and is optimized for static hosting platforms.

## Pre-Deployment Checklist

- [ ] All content has been reviewed and approved
- [ ] Privacy policy and terms of service pages are updated with correct company details
- [ ] Contact form email integration is configured
- [ ] Analytics tracking code is added (Google Analytics, etc.)
- [ ] Production environment variables are set
- [ ] Domain DNS settings are prepared
- [ ] SSL certificate is ready (or will be auto-provisioned)
- [ ] Production build test passes successfully

## Recommended Hosting Platforms

### Option 1: Netlify (Recommended)

**Pros:**
- Automatic deployments from Git
- Free SSL certificates
- Built-in form handling (alternative to API endpoint)
- Edge CDN with automatic optimization
- Generous free tier
- Easy rollbacks and previews

**Setup:**

1. **Connect Repository**
   ```bash
   # Push your code to GitHub/GitLab/Bitbucket
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Configure Netlify**
   - Sign up at [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider and select the repository

3. **Build Settings**
   ```
   Base directory: outcome-marketing-website
   Build command: npm run build
   Publish directory: outcome-marketing-website/dist
   ```

4. **Environment Variables** (if using email API)
   - Go to Site settings → Environment variables
   - Add variables:
     - `RESEND_API_KEY` (if using Resend)
     - `SENDGRID_API_KEY` (if using SendGrid)
     - `PUBLIC_SITE_URL` → `https://outcomedigital.co.uk`

5. **Deploy**
   - Click "Deploy site"
   - Deployment typically takes 2-3 minutes
   - Get temporary URL: `random-name-12345.netlify.app`

6. **Custom Domain**
   - Go to Site settings → Domain management
   - Add custom domain: `outcomedigital.co.uk` and `www.outcomedigital.co.uk`
   - Configure DNS with your domain registrar:
     ```
     Type: A
     Name: @
     Value: [Netlify IP provided]

     Type: CNAME
     Name: www
     Value: [your-site].netlify.app
     ```
   - SSL certificate auto-provisions within 24 hours

7. **Optional: Netlify Forms** (Alternative to API endpoint)
   - Update contact form in `src/pages/contact.astro`:
     ```html
     <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
       <input type="hidden" name="form-name" value="contact" />
       <!-- rest of form fields -->
     </form>
     ```
   - Netlify will handle submissions automatically
   - Configure notifications in Netlify dashboard

### Option 2: Vercel

**Pros:**
- Excellent Astro support
- Global edge network
- Automatic deployments from Git
- Zero-config deployments
- Serverless functions for API endpoints

**Setup:**

1. **Connect Repository**
   ```bash
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Configure Vercel**
   - Sign up at [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your repository
   - Vercel auto-detects Astro framework

3. **Build Settings** (auto-configured)
   ```
   Framework Preset: Astro
   Root Directory: outcome-marketing-website
   Build Command: npm run build
   Output Directory: dist
   ```

4. **Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add your email service API keys
   - Variables are available during build and at runtime

5. **Deploy**
   - Click "Deploy"
   - Get temporary URL: `your-project.vercel.app`

6. **Custom Domain**
   - Go to Project Settings → Domains
   - Add: `outcomedigital.co.uk`
   - Configure DNS as instructed
   - SSL auto-provisions

### Option 3: Cloudflare Pages

**Pros:**
- Part of Cloudflare's global network
- Excellent performance
- Built-in DDoS protection
- Free unlimited bandwidth
- Great for sites with high traffic

**Setup:**

1. **Connect Repository**
   ```bash
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Configure Cloudflare Pages**
   - Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
   - Click "Create a project" → "Connect to Git"
   - Select repository

3. **Build Configuration**
   ```
   Framework preset: Astro
   Build command: npm run build
   Build output directory: dist
   Root directory: outcome-marketing-website
   ```

4. **Environment Variables**
   - Add in project settings
   - Available during build

5. **Custom Domain**
   - Add custom domain in Pages dashboard
   - DNS auto-configures if using Cloudflare DNS
   - SSL included automatically

## Email Integration Setup

### Option A: Resend (Recommended)

1. **Sign up**
   - Go to [resend.com](https://resend.com)
   - Free tier: 100 emails/day, 3,000/month

2. **Install Package**
   ```bash
   cd outcome-marketing-website
   npm install resend
   ```

3. **Update API Endpoint**
   - Edit `src/pages/api/contact.ts`
   - Uncomment Resend implementation
   ```typescript
   import { Resend } from 'resend';

   const resend = new Resend(import.meta.env.RESEND_API_KEY);

   await resend.emails.send({
     from: 'contact@outcomedigital.co.uk',
     to: 'hello@outcomemarketing.co.uk',
     subject: `New Contact Form Submission`,
     html: formatEmailHtml(data),
   });
   ```

4. **Add Environment Variable**
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

5. **Verify Domain**
   - Add DNS records provided by Resend
   - Verify in Resend dashboard

### Option B: SendGrid

1. **Sign up**
   - Go to [sendgrid.com](https://sendgrid.com)
   - Free tier: 100 emails/day

2. **Install Package**
   ```bash
   npm install @sendgrid/mail
   ```

3. **Update API Endpoint**
   - Edit `src/pages/api/contact.ts`
   - Uncomment SendGrid implementation

4. **Add Environment Variable**
   ```
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   ```

### Option C: Netlify Forms (No Code Required)

If using Netlify hosting:

1. **Update Form HTML**
   ```html
   <form
     name="contact"
     method="POST"
     data-netlify="true"
     netlify-honeypot="bot-field"
   >
     <input type="hidden" name="form-name" value="contact" />
     <!-- existing form fields -->
   </form>
   ```

2. **Configure Notifications**
   - Go to Netlify dashboard → Forms
   - Set up email notifications
   - Optional: integrate with Slack, Zapier, etc.

## Analytics Integration

### Google Analytics 4

1. **Create GA4 Property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create account and property
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add to Site**
   - Edit `src/layouts/Layout.astro`
   - Add before closing `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script is:inline>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Plausible Analytics (Privacy-friendly alternative)

1. **Sign up**
   - Go to [plausible.io](https://plausible.io)
   - Add your domain

2. **Add Script**
   ```html
   <script defer data-domain="outcomedigital.co.uk" src="https://plausible.io/js/script.js"></script>
   ```

## Production Build Testing

Before deploying, test the production build locally:

```bash
cd outcome-marketing-website

# Clean previous build
rm -rf dist

# Run production build
npm run build

# Preview production build
npm run preview
```

**Expected Output:**
```
✓ 49 pages built in 2.5s
✓ Preview server running at http://localhost:4321/
```

**Test Checklist:**
- [ ] All pages load correctly
- [ ] Images are optimized and load properly
- [ ] Navigation works on all pages
- [ ] Contact form submits successfully
- [ ] Mobile responsiveness is maintained
- [ ] No console errors in browser
- [ ] Legal pages (privacy, terms) are accessible
- [ ] Meta tags are present (view page source)

## Post-Deployment Tasks

### 1. Submit to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `outcomedigital.co.uk`
3. Verify ownership (DNS method recommended)
4. Submit sitemap: `https://outcomedigital.co.uk/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [webmaster.bing.com](https://www.bing.com/webmasters)
2. Add site and verify
3. Submit sitemap

### 2. Set Up Monitoring

**Uptime Monitoring:**
- [UptimeRobot](https://uptimerobot.com) - Free for basic monitoring
- [Pingdom](https://pingdom.com)
- [StatusCake](https://statuscake.com)

**Error Monitoring:**
- [Sentry](https://sentry.io) - Track JavaScript errors
- Add to `src/layouts/Layout.astro`:
```html
<script src="https://js.sentry-cdn.com/YOUR_DSN.min.js" crossorigin="anonymous"></script>
```

### 3. Performance Optimization

**Image Optimization:**
- All images are already optimized via Astro's built-in image optimization
- Uses WebP format with fallbacks
- Lazy loading enabled by default

**Lighthouse Audit:**
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://outcomedigital.co.uk --view
```

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### 4. Security Headers

Add security headers to hosting platform:

**Netlify** - Create `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

**Vercel** - Create `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: Out of memory**
```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Form Not Working

1. Check browser console for errors
2. Verify API endpoint is accessible: `/api/contact`
3. Check environment variables are set
4. Review email service API key validity
5. Test with simple console.log in API endpoint

### Images Not Loading

1. Check image paths are correct
2. Verify images exist in `src/assets/` or `public/`
3. Check Astro image optimization config
4. Review browser console for 404 errors

### Slow Page Load

1. Run Lighthouse audit to identify issues
2. Check image sizes and optimization
3. Review JavaScript bundle size
4. Consider lazy loading for below-fold content
5. Check CDN configuration

## Rollback Procedure

### Netlify/Vercel
1. Go to Deployments page
2. Find previous working deployment
3. Click "Publish deploy" or "Promote to production"
4. Changes take effect immediately

### Manual Rollback
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard COMMIT_HASH
git push origin main --force
```

## Environment Variables Reference

| Variable | Required | Purpose | Where to Get |
|----------|----------|---------|--------------|
| `RESEND_API_KEY` | Optional* | Email sending via Resend | [resend.com/api-keys](https://resend.com/api-keys) |
| `SENDGRID_API_KEY` | Optional* | Email sending via SendGrid | [SendGrid Dashboard](https://app.sendgrid.com/settings/api_keys) |
| `PUBLIC_SITE_URL` | No | Base URL for absolute links | Your domain |
| `GOOGLE_ANALYTICS_ID` | No | Analytics tracking | GA4 Dashboard |

*One email service is required for contact form to work

## Support and Maintenance

### Regular Maintenance Tasks

**Monthly:**
- [ ] Review contact form submissions
- [ ] Check analytics for traffic trends
- [ ] Review search console for SEO issues
- [ ] Update content as needed

**Quarterly:**
- [ ] Update dependencies: `npm update`
- [ ] Run security audit: `npm audit`
- [ ] Review and update legal pages if regulations change
- [ ] Backup site and database (if applicable)

**Annually:**
- [ ] Renew domain registration
- [ ] Review hosting plan and costs
- [ ] Update copyright year in footer
- [ ] Comprehensive content review

### Getting Help

For deployment issues:
1. Check this guide's troubleshooting section
2. Review hosting platform documentation
3. Check Astro documentation: [docs.astro.build](https://docs.astro.build)
4. Astro Discord: [astro.build/chat](https://astro.build/chat)

## Deployment Costs Estimate

### Free Option (Recommended for Start)
- **Hosting**: Netlify/Vercel Free Tier - £0/month
- **Email**: Resend Free Tier (100/day) - £0/month
- **Domain**: ~£10/year
- **SSL**: Included free
- **Total**: ~£10/year

### Paid Option (Higher Volume)
- **Hosting**: Netlify Pro - £15/month
- **Email**: Resend Pro (50k/month) - £15/month
- **Domain**: ~£10/year
- **Analytics**: Plausible - £6/month
- **Total**: ~£36/month

## Quick Deploy Commands

```bash
# 1. Navigate to project
cd outcome-marketing-website

# 2. Install dependencies
npm install

# 3. Test build
npm run build

# 4. Preview locally
npm run preview

# 5. Push to Git (triggers auto-deploy)
git add .
git commit -m "Ready for production"
git push origin main
```

## Success!

Once deployed successfully:
1. ✅ Visit your live site
2. ✅ Test contact form submission
3. ✅ Submit sitemap to search engines
4. ✅ Set up monitoring
5. ✅ Celebrate! 🎉

Your Outcome Digital Marketing website is now live and ready to attract clients!

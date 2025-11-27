'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  hearAbout: string;
  helpWith: string[];
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    hearAbout: '',
    helpWith: [],
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Live form submission - replace with your actual endpoint
      console.log('Form submitted:', formData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitSuccess(true);

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        hearAbout: '',
        helpWith: [],
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      helpWith: prev.helpWith.includes(value)
        ? prev.helpWith.filter(item => item !== value)
        : [...prev.helpWith, value]
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80&auto=format"
            alt="Professional communication and consultation"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(45, 58, 58, 0.85), rgba(45, 58, 58, 0.80))' }} />
        </div>
        <Container className="relative z-20 py-16">
          <div className="text-center">
            <h1 className="font-dm-serif text-cottage-cream text-4xl md:text-5xl lg:text-6xl mb-4">
              Let's Start a Conversation
            </h1>
            <p className="text-mist-white text-lg md:text-xl max-w-2xl mx-auto">
              No pressure, no hard sell. Just honest advice about your goals and how we might help.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content - Split Layout */}
      <Section className="bg-cottage-cream">
        <Container>
          <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Column - Content (40%) */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-dm-serif text-slate-deep text-3xl mb-4">
                  Let's Talk About Your Business
                </h2>
                <p className="text-secondary-text leading-relaxed">
                  No pressure, no hard sell. Just an honest conversation about your goals
                  and how we might be able to help. Whether you're just exploring options
                  or ready to get started, we're here to listen.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-dm-sans font-semibold text-slate-deep uppercase tracking-wide mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@outcomemarketing.co.uk"
                    className="text-trevaunance-teal-dark hover:text-slate-deep transition-colors text-lg font-medium"
                  >
                    hello@outcomemarketing.co.uk
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-dm-sans font-semibold text-slate-deep uppercase tracking-wide mb-2">
                    Response Time
                  </h3>
                  <p className="text-secondary-text">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-mist-white rounded-lg p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-trevaunance-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-dm-sans font-semibold text-slate-deep">No hard sell - just honest advice</h4>
                    <p className="text-sm text-secondary-text mt-1">
                      We'll tell you what you need to hear, not what you want to hear
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-trevaunance-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-dm-sans font-semibold text-slate-deep">Free initial consultation</h4>
                    <p className="text-sm text-secondary-text mt-1">
                      No charge for our first conversation about your needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-trevaunance-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-dm-sans font-semibold text-slate-deep">Cornwall-based, UK-focused</h4>
                    <p className="text-sm text-secondary-text mt-1">
                      Local roots with the expertise to compete nationally
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form (60%) */}
            <div className="md:col-span-3">
              <div className="bg-mist-white rounded-lg shadow-lg p-8">
                {submitSuccess ? (
                  <div className="text-center py-12 animate-fade-up">
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      {/* Animated circle */}
                      <svg className="w-16 h-16 text-trevaunance-teal animate-scale-in" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      {/* Animated checkmark */}
                      <svg className="w-16 h-16 text-trevaunance-teal absolute inset-0" fill="none" viewBox="0 0 24 24">
                        <path
                          className="animate-checkmark"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          stroke="currentColor"
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                    </div>
                    <h3 className="font-dm-serif text-slate-deep text-2xl mb-2">Message Sent!</h3>
                    <p className="text-secondary-text mb-6">
                      We'll get back to you within 24 hours. Keep an eye on your inbox.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="text-trevaunance-teal-dark hover:text-slate-deep font-dm-sans font-semibold transition-colors duration-200"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name - Required */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-dm-sans font-semibold text-slate-deep mb-2">
                        Name <span className="text-harbour-rust">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-slate-200 focus:border-trevaunance-teal focus:ring-trevaunance-teal/20'
                        } focus:ring-4 focus:outline-none transition-all duration-300 focus:scale-[1.01]`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>

                    {/* Email - Required */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-dm-sans font-semibold text-slate-deep mb-2">
                        Email <span className="text-harbour-rust">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-slate-200 focus:border-trevaunance-teal focus:ring-trevaunance-teal/20'
                        } focus:ring-4 focus:outline-none transition-all duration-300 focus:scale-[1.01]`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone - Optional */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-dm-sans font-semibold text-slate-deep mb-2">
                        Phone <span className="text-sm text-muted-text font-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-trevaunance-teal focus:ring-4 focus:ring-trevaunance-teal/20 focus:outline-none transition-all duration-300 focus:scale-[1.01]"
                        placeholder="01234 567890"
                      />
                    </div>

                    {/* Business Name - Optional */}
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-dm-sans font-semibold text-slate-deep mb-2">
                        Business Name <span className="text-sm text-muted-text font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-trevaunance-teal focus:ring-4 focus:ring-trevaunance-teal/20 focus:outline-none transition-all duration-300 focus:scale-[1.01]"
                        placeholder="Your company name"
                      />
                    </div>

                    {/* How did you hear about us */}
                    <div>
                      <label htmlFor="hearAbout" className="block text-sm font-dm-sans font-semibold text-slate-deep mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        id="hearAbout"
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-trevaunance-teal focus:ring-4 focus:ring-trevaunance-teal/20 focus:outline-none transition-all duration-300 bg-white focus:scale-[1.01]"
                      >
                        <option value="">Select an option</option>
                        <option value="google">Google</option>
                        <option value="social">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* What can we help with - Checkboxes */}
                    <div>
                      <label className="block text-sm font-dm-sans font-semibold text-slate-deep mb-3">
                        What can we help with?
                      </label>
                      <div className="space-y-2">
                        {[
                          { value: '1-page-website', label: '1-Page Website' },
                          { value: 'blog-writing', label: 'Blog Writing' },
                          { value: 'website-seo', label: 'Website SEO' },
                          { value: 'market-research', label: 'Market Research' },
                          { value: 'not-sure', label: 'Not sure yet' }
                        ].map(option => (
                          <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={formData.helpWith.includes(option.value)}
                              onChange={() => handleCheckboxChange(option.value)}
                              className="w-5 h-5 rounded border-slate-200 text-trevaunance-teal focus:ring-4 focus:ring-trevaunance-teal/20 focus:outline-none cursor-pointer transition-all duration-200 hover:scale-110"
                            />
                            <span className="text-secondary-text group-hover:text-slate-deep transition-colors">
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message - Textarea */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-dm-sans font-semibold text-slate-deep mb-2">
                        Tell us a bit more about your project <span className="text-sm text-muted-text font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-trevaunance-teal focus:ring-4 focus:ring-trevaunance-teal/20 focus:outline-none transition-all duration-300 resize-y focus:scale-[1.01]"
                        placeholder="Share any details about what you're looking for..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-harbour-rust text-mist-white font-dm-sans font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 focus:ring-4 focus:ring-harbour-rust/30 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-100 hover:shadow-xl"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>

                    <p className="text-sm text-muted-text text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

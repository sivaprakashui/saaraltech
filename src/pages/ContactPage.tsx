import React, { useEffect, useState } from 'react';
import { CheckCircle2, Globe, Mail, Phone, Send } from 'lucide-react';
import { Layout } from '@/src/components/Layout';
import { PageHero } from '@/src/components/PageHero';
import { COMPANY_INFO, SERVICES } from '@/src/data/siteData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    service: 'AI and Data Engineering',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<FormState | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        service: serviceParam,
        subject: prev.subject || `Inquiry regarding ${serviceParam}`,
      }));
    }
  }, []);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = 'Please provide a valid work or personal email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      nextErrors.subject = 'Please include a brief subject for your inquiry.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      nextErrors.message = 'Please share at least a brief summary (15+ characters) of your requirements.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRecord({ ...formData });
      setFormData({
        name: '',
        email: '',
        subject: '',
        service: 'AI and Data Engineering',
        message: '',
      });
    }, 350);
  };

  const buildMailtoHref = (record: FormState) => {
    const body = `Name: ${record.name}\nEmail: ${record.email}\nFocus Area: ${record.service}\n\n${record.message}`;
    return `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(record.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Layout activePage="contact">
      <PageHero
        sectionLabel="Contact Us"
        breadcrumbCurrent="Contact Us"
        title="Start an Engineering Conversation With SaaralTech Solutions"
        description="Reach our operations desk directly by email or phone, or submit your project requirements below for a focused technical consultation."
      />

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Direct Contact Details (No Google Map / No Address) */}
            <aside data-gsap="reveal" className="lg:col-span-5 space-y-8">
              <div className="rounded-2xl bg-[#1D354C] p-8 text-white space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#60C3F7]">
                    Direct Channels
                  </p>
                  <h2 className="text-2xl font-bold text-white">
                    SaaralTech Operations Desk
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-300">
                    Connect with us for architecture reviews, PHP migration assessments, BI engineering, or cloud infrastructure support.
                  </p>
                </div>

                <ul className="space-y-5 border-t border-white/10 pt-6">
                  <li>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="group flex items-start gap-4 text-sm"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-[#60C3F7] group-hover:bg-[#3AA3DC] group-hover:text-white transition-colors">
                        <Mail className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs text-slate-400">Email</p>
                        <p className="font-semibold text-white group-hover:text-[#60C3F7] transition-colors break-all">
                          {COMPANY_INFO.email}
                        </p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href={COMPANY_INFO.mobileHref}
                      className="group flex items-start gap-4 text-sm"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-[#60C3F7] group-hover:bg-[#3AA3DC] group-hover:text-white transition-colors">
                        <Phone className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs text-slate-400">Mobile</p>
                        <p className="font-semibold text-white group-hover:text-[#60C3F7] transition-colors tabular-nums">
                          {COMPANY_INFO.mobile}
                        </p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href={COMPANY_INFO.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 text-sm"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-[#60C3F7] group-hover:bg-[#3AA3DC] group-hover:text-white transition-colors">
                        <Globe className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs text-slate-400">Website</p>
                        <p className="font-semibold text-white group-hover:text-[#60C3F7] transition-colors">
                          {COMPANY_INFO.website}
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4">
                <h3 className="text-lg font-bold text-[#1D354C]">
                  What to Include in Your Inquiry
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  {[
                    'Target service focus (AI & Data, BI, PHP Migration, or Cloud DevOps)',
                    'Current technology stack or legacy version constraints',
                    'Desired project timeline or technical placement requirements',
                    'Preferred contact window for an initial scoping call',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3AA3DC]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right Column: Validated Contact Form */}
            <div data-gsap="reveal" className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-10">
                <div className="mb-8 space-y-2 border-b border-slate-100 pb-6">
                  <h2 className="text-2xl font-bold text-[#1D354C]">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-slate-600">
                    Complete the form below and our operations team will review your requirements within one business day.
                  </p>
                </div>

                {submittedRecord && (
                  <div
                    role="status"
                    className="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6 space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-emerald-950">
                          Inquiry Prepared Successfully
                        </h3>
                        <p className="text-sm text-emerald-900">
                          Thank you, {submittedRecord.name}. Your inquiry regarding{' '}
                          <span className="font-semibold">{submittedRecord.subject}</span> has been recorded.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 pt-1 pl-8">
                      <a
                        href={buildMailtoHref(submittedRecord)}
                        className="inline-flex items-center gap-2 rounded-md bg-[#1D354C] px-4 py-2 text-xs font-semibold text-white hover:bg-[#3AA3DC] transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Open in Email Client ({COMPANY_INFO.email})</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmittedRecord(null)}
                        className="text-xs font-semibold text-emerald-900 underline hover:no-underline"
                      >
                        Send another inquiry
                      </button>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-[#1D354C] mb-2">
                        Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, name: e.target.value }));
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder="Your full name"
                        aria-invalid={Boolean(errors.name)}
                        className={`w-full rounded-md border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-rose-500 focus:ring-rose-200'
                            : 'border-slate-300 focus:border-[#3AA3DC] focus:ring-[#3AA3DC]/25'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs font-medium text-rose-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-[#1D354C] mb-2">
                        Email <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="you@company.com"
                        aria-invalid={Boolean(errors.email)}
                        className={`w-full rounded-md border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-200'
                            : 'border-slate-300 focus:border-[#3AA3DC] focus:ring-[#3AA3DC]/25'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs font-medium text-rose-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-semibold text-[#1D354C] mb-2">
                        Subject <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, subject: e.target.value }));
                          if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined }));
                        }}
                        placeholder="e.g. PHP 8.3 Migration Assessment"
                        aria-invalid={Boolean(errors.subject)}
                        className={`w-full rounded-md border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          errors.subject
                            ? 'border-rose-500 focus:ring-rose-200'
                            : 'border-slate-300 focus:border-[#3AA3DC] focus:ring-[#3AA3DC]/25'
                        }`}
                      />
                      {errors.subject && (
                        <p className="mt-1.5 text-xs font-medium text-rose-600">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-sm font-semibold text-[#1D354C] mb-2">
                        Service Focus
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, service: e.target.value }))
                        }
                        className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#3AA3DC] focus:outline-none focus:ring-2 focus:ring-[#3AA3DC]/25"
                      >
                        {SERVICES.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                        <option value="Technical Placement & QA Testing">
                          Technical Placement & QA Testing
                        </option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-[#1D354C] mb-2">
                      Message <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, message: e.target.value }));
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="Describe your current system, engineering goals, and expected timeline..."
                      aria-invalid={Boolean(errors.message)}
                      className={`w-full rounded-md border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-200'
                          : 'border-slate-300 focus:border-[#3AA3DC] focus:ring-[#3AA3DC]/25'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs font-medium text-rose-600">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">
                      Direct inquiries can also be sent to{' '}
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-semibold text-[#1D7CB3] hover:underline"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-[#3AA3DC] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#298CC4] disabled:opacity-60 transition-colors whitespace-nowrap shrink-0"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

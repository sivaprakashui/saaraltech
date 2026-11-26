import React, { useEffect, useState } from 'react';
import { CheckCircle2, Globe, Mail, Phone, Send } from 'lucide-react';
import { Layout } from '@/src/components/Layout';
import { PageHero } from '@/src/components/PageHero';
import { SITE_IMAGES } from '@/src/assets/images';
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
        backgroundImage={SITE_IMAGES.contactHeroBg}
        overlayClassName=""
        overlayStyle={{
          backgroundColor: 'rgb(51 51 51 / 0.5)',
          backgroundImage:
            'linear-gradient(-259deg, rgb(16 184 87 / 0.4) 0%, rgb(16 184 87 / 0.4) 1%, rgb(23 183 223 / 0.4) 100%)',
        }}
      />

      <section className="bg-[#F8FAFC] font-sans">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
            {/* Left Column: Direct Contact Details (No Google Map / No Address) */}
            <aside data-gsap="reveal" className="lg:col-span-5 space-y-8">
              <div
                className="rounded-2xl p-8 text-white space-y-6 shadow-sm"
                style={{ background: 'linear-gradient(45deg, #10b857, #17b7df)' }}
              >
                <div className="space-y-2 font-sans">
                  <p className="text-[15px] md:text-[16px] lg:text-[18px] font-normal uppercase tracking-wide text-white/95">
                    Direct Channels
                  </p>
                  <h2 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-white leading-[1.35] lg:leading-[1.4]">
                    SaaralTech Operations Desk
                  </h2>
                  <p className="text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[1.6] text-white/95">
                    Connect with us for architecture reviews, PHP migration assessments, BI engineering, or cloud infrastructure support.
                  </p>
                </div>

                <ul className="space-y-5 border-t border-white/25 pt-6">
                  <li>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="group flex items-start gap-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/20 text-white group-hover:bg-white group-hover:text-[#0B2536] transition-colors">
                        <Mail className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[13px] md:text-[14px] text-white/85">Email</p>
                        <p className="text-[15px] md:text-[16px] font-semibold text-white group-hover:underline transition-colors break-all">
                          {COMPANY_INFO.email}
                        </p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href={COMPANY_INFO.mobileHref}
                      className="group flex items-start gap-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/20 text-white group-hover:bg-white group-hover:text-[#0B2536] transition-colors">
                        <Phone className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[13px] md:text-[14px] text-white/85">Mobile</p>
                        <p className="text-[15px] md:text-[16px] font-semibold text-white group-hover:underline transition-colors tabular-nums">
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
                      className="group flex items-start gap-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/20 text-white group-hover:bg-white group-hover:text-[#0B2536] transition-colors">
                        <Globe className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[13px] md:text-[14px] text-white/85">Website</p>
                        <p className="text-[15px] md:text-[16px] font-semibold text-white group-hover:underline transition-colors">
                          {COMPANY_INFO.website}
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 font-sans">
                <h3 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-black leading-[1.35] lg:leading-[1.4]">
                  What to Include in Your Inquiry
                </h3>
                <ul className="space-y-3 text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[1.6] text-[#333333]">
                  {[
                    'Target service focus (AI & Data, BI, PHP Migration, or Cloud DevOps)',
                    'Current technology stack or legacy version constraints',
                    'Desired project timeline or technical placement requirements',
                    'Preferred contact window for an initial scoping call',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#1DA05F]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right Column: Validated Contact Form */}
            <div data-gsap="reveal" className="lg:col-span-7 font-sans lg:flex lg:flex-col">
              <div
                className="rounded-2xl p-7 sm:p-10 shadow-sm text-white lg:flex-1 lg:flex lg:flex-col"
                style={{ background: 'linear-gradient(45deg, #10b857, #17b7df)' }}
              >
                <div className="mb-8 space-y-2 border-b border-white/25 pb-6">
                  <h2 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-white leading-[1.35] lg:leading-[1.4]">
                    Send Us a Message
                  </h2>
                  <p className="text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[1.6] text-white/95">
                    Complete the form below and our operations team will review your requirements within one business day.
                  </p>
                </div>

                {submittedRecord && (
                  <div
                    role="status"
                    className="mb-8 rounded-xl border border-white/40 bg-white p-6 space-y-3 text-slate-900 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#10b857]" aria-hidden="true" />
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-[#0B2536]">
                          Inquiry Prepared Successfully
                        </h3>
                        <p className="text-sm text-[#333333]">
                          Thank you, {submittedRecord.name}. Your inquiry regarding{' '}
                          <span className="font-semibold">{submittedRecord.subject}</span> has been recorded.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 pt-1 pl-8">
                      <a
                        href={buildMailtoHref(submittedRecord)}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#10b857] px-5 py-2 text-xs font-semibold text-[#10b857] hover:bg-gradient-to-r hover:from-[#10b857] hover:to-[#17b7df] hover:text-white hover:border-transparent transition-all duration-200"
                      >
                        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Open in Email Client ({COMPANY_INFO.email})</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmittedRecord(null)}
                        className="text-xs font-semibold text-[#0B2536] underline hover:no-underline cursor-pointer"
                      >
                        Send another inquiry
                      </button>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-6 lg:flex-1 lg:flex lg:flex-col">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-white mb-2">
                        Name <span className="text-white">*</span>
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
                        className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-rose-500 focus:ring-rose-200'
                            : 'border-white/60 focus:border-white focus:ring-white/40'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 inline-block rounded bg-white/95 px-2 py-0.5 text-xs font-semibold text-rose-700">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-white mb-2">
                        Email <span className="text-white">*</span>
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
                        className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-200'
                            : 'border-white/60 focus:border-white focus:ring-white/40'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 inline-block rounded bg-white/95 px-2 py-0.5 text-xs font-semibold text-rose-700">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-semibold text-white mb-2">
                        Subject <span className="text-white">*</span>
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
                        className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          errors.subject
                            ? 'border-rose-500 focus:ring-rose-200'
                            : 'border-white/60 focus:border-white focus:ring-white/40'
                        }`}
                      />
                      {errors.subject && (
                        <p className="mt-1.5 inline-block rounded bg-white/95 px-2 py-0.5 text-xs font-semibold text-rose-700">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-sm font-semibold text-white mb-2">
                        Service Focus
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, service: e.target.value }))
                        }
                        className="w-full rounded-md border border-white/60 bg-white px-4 py-3 text-sm text-slate-900 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
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

                  <div className="lg:flex-1 lg:flex lg:flex-col">
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-white mb-2">
                      Message <span className="text-white">*</span>
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
                      className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 lg:flex-1 lg:min-h-[160px] ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-200'
                          : 'border-white/60 focus:border-white focus:ring-white/40'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 inline-block rounded bg-white/95 px-2 py-0.5 text-xs font-semibold text-rose-700">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-white/95">
                      Direct inquiries can also be sent to{' '}
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-semibold text-white underline hover:no-underline"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-white px-7 py-2.5 text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-[#0B2536] hover:bg-transparent hover:text-white disabled:opacity-60 transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
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

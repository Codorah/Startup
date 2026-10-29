'use client';

import { useEffect, useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  User,
  Mail,
  Phone,
  Briefcase,
  Wallet,
  FileText,
  MapPin,
} from 'lucide-react';
import { CONTACT } from '@/lib/site';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface ContactSectionProps {
  dict: Dictionary['contact'];
}

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  service: 'select',
  budget: 'select',
  message: '',
};

export default function ContactSection({ dict }: ContactSectionProps) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Links marked with data-service (service rows, training cards) preselect the need
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest<HTMLElement>('[data-service]');
      const service = link?.dataset.service;
      if (service && service in dict.serviceOptions) {
        setFormData((prev) => ({ ...prev, service }));
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [dict.serviceOptions]);

  const update = (field: keyof typeof INITIAL_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const options: Record<string, string> = { ...dict.serviceOptions, ...dict.budgetOptions };
    const label = (value: string) => (value === 'select' ? '' : options[value] ?? value);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: label(formData.service),
          budget: label(formData.budget),
        }),
      });

      if (!response.ok) {
        setError(response.status === 503 ? dict.errorUnavailable : dict.errorGeneric);
        return;
      }

      setIsSuccess(true);
      setFormData(INITIAL_FORM);
    } catch {
      setError(dict.errorGeneric);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition-all duration-200';
  const labelClass = 'flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wide';

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span data-reveal className="section-label">{dict.badge}</span>
          <h2 data-reveal className="display-md text-slate-900">{dict.title}</h2>
          <p data-reveal className="text-lg text-slate-600 leading-relaxed">{dict.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div data-reveal="left" className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-700 text-white p-7 shadow-xl shadow-violet-500/20">
              <span className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-extrabold mb-4">{dict.whyTitle}</h3>
              <ul className="space-y-3 text-sm text-violet-100">
                {dict.whyItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 space-y-4">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">{dict.directTitle}</p>
              <div className="space-y-3 text-sm text-slate-600">
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 hover:text-violet-700 transition-colors group">
                  <span className="w-9 h-9 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0 group-hover:bg-violet-100 transition-colors">
                    <Mail className="w-4 h-4 text-violet-600" />
                  </span>
                  {CONTACT.email}
                </a>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-violet-700 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <Phone className="w-4 h-4 text-emerald-600" />
                  </span>
                  WhatsApp · {CONTACT.whatsappDisplay}
                </a>
                <p className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-slate-500" />
                  </span>
                  {CONTACT.location}
                </p>
              </div>
            </div>
          </div>

          <div data-reveal="right" className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/60 p-7 sm:p-10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />

              {isSuccess ? (
                <div className="relative py-16 flex flex-col items-center text-center space-y-5" role="status">
                  <span className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{dict.successTitle}</h3>
                    <p className="text-slate-500 max-w-md">{dict.success}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="mt-2 px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    {dict.newMessage}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className={labelClass}>
                        <User className="w-3.5 h-3.5 text-violet-500" />
                        {dict.name} *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={update('name')}
                        placeholder={dict.namePlaceholder}
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className={labelClass}>
                        <Mail className="w-3.5 h-3.5 text-violet-500" />
                        {dict.email} *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={update('email')}
                        placeholder={dict.emailPlaceholder}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className={labelClass}>
                        <Phone className="w-3.5 h-3.5 text-violet-500" />
                        {dict.phone}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={update('phone')}
                        placeholder={dict.phonePlaceholder}
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-service" className={labelClass}>
                        <Briefcase className="w-3.5 h-3.5 text-violet-500" />
                        {dict.service}
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={update('service')}
                        className={inputClass}
                      >
                        {Object.entries(dict.serviceOptions).map(([value, text]) => (
                          <option key={value} value={value} disabled={value === 'select'}>
                            {text}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-budget" className={labelClass}>
                      <Wallet className="w-3.5 h-3.5 text-violet-500" />
                      {dict.budget}
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={update('budget')}
                      className={inputClass}
                    >
                      {Object.entries(dict.budgetOptions).map(([value, text]) => (
                        <option key={value} value={value}>
                          {text}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className={labelClass}>
                      <FileText className="w-3.5 h-3.5 text-violet-500" />
                      {dict.message} *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={update('message')}
                      placeholder={dict.messagePlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-600 hover:from-violet-800 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {dict.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {dict.submit}
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">{dict.privacy}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

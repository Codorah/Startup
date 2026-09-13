'use client';

import { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  dict: Dictionary['modal'];
  defaultService?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  dict,
  defaultService = 'select',
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    budget: 'select',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-reliability API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-100 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600"
          aria-label={dict.close}
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-12 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{dict.title}</h3>
            <p className="text-slate-600 max-w-md">{dict.success}</p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Codorah Partnership</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {dict.title}
              </h3>
              <p className="text-sm text-slate-500 mt-1">{dict.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {dict.name} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={dict.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {dict.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={dict.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {dict.phone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={dict.phonePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {dict.service} *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all bg-slate-50/50"
                  >
                    <option value="select">{dict.serviceOptions.select}</option>
                    <option value="webMobile">{dict.serviceOptions.webMobile}</option>
                    <option value="ai">{dict.serviceOptions.ai}</option>
                    <option value="cloud">{dict.serviceOptions.cloud}</option>
                    <option value="design">{dict.serviceOptions.design}</option>
                    <option value="security">{dict.serviceOptions.security}</option>
                    <option value="training">{dict.serviceOptions.training}</option>
                    <option value="other">{dict.serviceOptions.other}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {dict.budget}
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all bg-slate-50/50"
                >
                  <option value="select">{dict.budgetOptions.select}</option>
                  <option value="tier1">{dict.budgetOptions.tier1}</option>
                  <option value="tier2">{dict.budgetOptions.tier2}</option>
                  <option value="tier3">{dict.budgetOptions.tier3}</option>
                  <option value="tier4">{dict.budgetOptions.tier4}</option>
                  <option value="training">{dict.budgetOptions.training}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {dict.message} *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={dict.messagePlaceholder}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all bg-slate-50/50 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{dict.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{dict.submit}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

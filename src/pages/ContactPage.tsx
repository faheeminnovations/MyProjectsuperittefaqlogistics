import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Truck,
  ShieldCheck,
  Calculator,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/logisticsData';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  // Contact Message form state matching original site fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    securityCheck: '',
  });

  const [captchaNum1] = useState(7);
  const [captchaNum2] = useState(4);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  // Rate Estimator state
  const [estimatorOrigin, setEstimatorOrigin] = useState('Lahore');
  const [estimatorDest, setEstimatorDest] = useState('Karachi');
  const [estimatorWeight, setEstimatorWeight] = useState(5000);
  const [estimatorService, setEstimatorService] = useState('ftl');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(formData.securityCheck, 10) !== captchaNum1 + captchaNum2) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setFormSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*Inquiry via Website Contact Form - Super Ittefaq Logistics*
• *Name:* ${formData.name || 'Visitor'}
• *Phone:* ${formData.phone || 'Not provided'}
• *Email:* ${formData.email || 'Not provided'}
• *Subject:* ${formData.subject || 'General Inquiry'}
• *Message:* ${formData.message || 'I would like to inquire about your logistics services.'}`;

    window.open(
      `https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  // Approximate distance & pricing calculation for logistics helper
  const getEstimatedTransit = () => {
    if (
      (estimatorOrigin === 'Lahore' && estimatorDest === 'Karachi') ||
      (estimatorOrigin === 'Karachi' && estimatorDest === 'Lahore')
    ) {
      return { dist: '1,220 km', days: '36 - 48 Hours', baseCost: 'Call / Request Quote' };
    }
    if (
      (estimatorOrigin === 'Lahore' && estimatorDest === 'Islamabad') ||
      (estimatorOrigin === 'Islamabad' && estimatorDest === 'Lahore')
    ) {
      return { dist: '375 km', days: '12 - 18 Hours', baseCost: 'Fast Turnaround' };
    }
    return { dist: 'Regional Corridor', days: '24 Hours Scheduled', baseCost: 'Instant Booking' };
  };

  const estimate = getEstimatedTransit();

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find Our Location & Dispatch Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight">
            Contact Super Ittefaq Logistics
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Reach out directly to our central transport headquarters in Depalpur or connect with our 24/7 operations helpline across Pakistan.
          </p>
        </div>
      </section>

      {/* Main Office Information Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Visit Our Central Office</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Super ittefaq mini goods, Razvi Chowk, Dipalpur Okara Road, Depalpur, Punjab, Pakistan
            </p>
            <div className="text-[11px] font-semibold text-amber-600">
              Fleet staging yard & client reception
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Call Us & WhatsApp</h3>
            <div className="space-y-1 text-xs">
              <div>
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-slate-900 hover:text-amber-600">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="text-slate-500">Available 7 days a week for dispatches</div>
            </div>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700"
            >
              <span>Chat via WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Email Inquiries</h3>
            <div className="space-y-1 text-xs">
              <div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-slate-900 hover:text-amber-600">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="text-slate-500">For commercial tenders, bids, and contracts</div>
            </div>
            <div className="text-[11px] font-semibold text-slate-400">
              Replies typically within 2 hours
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Freight Route Estimator & Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Form (Matching original website structure) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
            <div className="space-y-1 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                We Love To Hear
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sans">
                Send Us a Direct Message
              </h2>
              <p className="text-xs text-slate-500">
                Submit your freight inquiry, cargo volume, or partnership proposal.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Message Successfully Sent!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.name}</span>. Our transport team at Razvi Chowk, Depalpur has received your note regarding{' '}
                  <span className="font-semibold">"{formData.subject}"</span> and will respond promptly.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppSend}
                    className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Continue on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                        securityCheck: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="office@yourcompany.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +92 300 6967450"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. FTL Quote Lahore to Karachi"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your cargo specifications, weight, timeline, and destination..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Security Check Captcha matching original site */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <label className="block text-xs font-semibold text-slate-700">
                    Security Check *: What is {captchaNum1} + {captchaNum2}?
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      required
                      placeholder="Enter sum"
                      value={formData.securityCheck}
                      onChange={(e) => setFormData({ ...formData, securityCheck: e.target.value })}
                      className="w-32 px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                    />
                    <span className="text-[11px] text-slate-500">
                      Anti-spam verification
                    </span>
                  </div>
                  {captchaError && (
                    <p className="text-xs text-rose-600 font-semibold">
                      Incorrect answer. Please solve {captchaNum1} + {captchaNum2}.
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Working Hours & Interactive Rate Calculator */}
          <div className="lg:col-span-5 space-y-6">
            {/* Working Hours Card (Exact schedule from site) */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Operational Schedule</span>
              </div>
              <h3 className="text-lg font-bold font-sans">Depalpur Operations Desk</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We work 7 days a week, every day excluding major national holidays.
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/80">
                  <span className="text-slate-300">Monday - Friday:</span>
                  <span className="font-bold text-white">{COMPANY_INFO.hours.weekdays}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/80">
                  <span className="text-slate-300">Saturday:</span>
                  <span className="font-bold text-white">{COMPANY_INFO.hours.saturday}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/80">
                  <span className="text-slate-300">Sunday & Holidays:</span>
                  <span className="font-bold text-white">{COMPANY_INFO.hours.sundayAndHolidays}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/50">
                  <span className="text-emerald-300">Dispatch & Operations Desk:</span>
                  <span className="font-bold text-emerald-400">24 / 7 Live</span>
                </div>
              </div>
            </div>

            {/* Quick Route & Corridor Planner */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Corridor Transit Estimator</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Check Route Timeline</h3>

              <div className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Origin Hub
                    </label>
                    <select
                      value={estimatorOrigin}
                      onChange={(e) => setEstimatorOrigin(e.target.value)}
                      className="w-full p-2 rounded-lg border border-slate-200 bg-slate-50 text-xs font-medium"
                    >
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Multan">Multan</option>
                      <option value="Depalpur">Depalpur (HQ)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Destination
                    </label>
                    <select
                      value={estimatorDest}
                      onChange={(e) => setEstimatorDest(e.target.value)}
                      className="w-full p-2 rounded-lg border border-slate-200 bg-slate-50 text-xs font-medium"
                    >
                      <option value="Karachi">Karachi</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Multan">Multan</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Depalpur">Depalpur</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex justify-between text-slate-600">
                    <span>Approx Road Distance:</span>
                    <span className="font-bold text-slate-900">{estimate.dist}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Estimated Linehaul Transit:</span>
                    <span className="font-bold text-emerald-600">{estimate.days}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Service Availability:</span>
                    <span className="font-bold text-slate-900">Daily Regular</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=I+need+a+rate+quote+for+${estimatorOrigin}+to+${estimatorDest}+freight.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Get Live Rate on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

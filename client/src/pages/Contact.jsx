import { useState } from 'react';
import { submitEnquiry } from '../api/client.js';

const initialState = { name: '', company: '', email: '', phone: '', enquiryType: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle');
  const [charCount, setCharCount] = useState(0);

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (e.target.name === 'message') setCharCount(e.target.value.length);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await submitEnquiry(form);
      setStatus('sent');
      setForm(initialState);
      setCharCount(0);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E]">

      {/* ===== HERO HEADER ===== */}
      <section className="relative pt-28 pb-14 text-center overflow-hidden bg-[#0A1628]">
        {/* Hexagon SVG background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hex" x="0" y="0" width="60" height="104" patternUnits="userSpaceOnUse">
                <polygon points="30,2 58,17 58,47 30,62 2,47 2,17" fill="none" stroke="#C9A24B" strokeWidth="0.8"/>
                <polygon points="30,54 58,69 58,99 30,114 2,99 2,69" fill="none" stroke="#C9A24B" strokeWidth="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex)"/>
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-[#C9A24B]" />
            <span className="text-[#C9A24B] text-xs font-bold tracking-[0.3em] uppercase">Get In Touch</span>
            <div className="w-6 h-[1px] bg-[#C9A24B]" />
          </div>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-white mb-4">
            Send an Enquiry
          </h1>
          <div className="w-12 h-[2px] bg-[#C9A24B] mx-auto mb-5" />
          <p className="text-white/55 text-sm leading-relaxed">
            Have a question or need more information?<br />
            Fill out the form and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* ===== MAIN FORM + DETAILS PANEL ===== */}
      <section className="py-12 px-4">
        <div className="container-vc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* ---- LEFT: Enquiry Form ---- */}
            <div className="lg:col-span-7 bg-[#0D1B2E] rounded-2xl border border-[#C9A24B]/20 p-8">
              {/* Form header */}
              <div className="flex items-center gap-4 mb-7">
                <div className="w-11 h-11 rounded-full bg-[#C9A24B]/15 border border-[#C9A24B]/35 flex items-center justify-center text-[#C9A24B] flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif-luxury text-lg font-bold text-white">Enquiry Details</h2>
                  <p className="text-white/40 text-xs mt-0.5">Please fill in the details below</p>
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-5">
                {/* Row 1: Name + Company */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Enter your full name"
                    required
                    icon={
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    }
                  />
                  <FormField
                    label="Company"
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    placeholder="Enter your company name"
                    required
                    icon={
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2" />
                      </svg>
                    }
                  />
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Enter your email address"
                    required
                    icon={
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    }
                  />
                  <FormField
                    label="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="Enter your phone number"
                    icon={
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                      </svg>
                    }
                  />
                </div>

                {/* Enquiry Type */}
                <div>
                  <label className="text-[11px] font-bold text-white/60 uppercase tracking-widest block mb-2">
                    Enquiry Type <span className="text-[#C9A24B]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/35 pointer-events-none">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                      </svg>
                    </div>
                    <select
                      name="enquiryType"
                      value={form.enquiryType}
                      onChange={onChange}
                      required
                      className="w-full pl-10 pr-10 py-3 rounded-lg bg-[#0A1628] border border-[#C9A24B]/25 text-sm text-white/70 focus:outline-none focus:border-[#C9A24B] appearance-none cursor-pointer transition-colors"
                    >
                      <option value="" disabled>Select enquiry type</option>
                      <option value="General">General</option>
                      <option value="Product Enquiry">Product Enquiry</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Regulatory Documentation">Regulatory Documentation</option>
                      <option value="Export Enquiry">Export Enquiry</option>
                      <option value="Quality / Compliance">Quality / Compliance</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/35 pointer-events-none">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[11px] font-bold text-white/60 uppercase tracking-widest block mb-2">
                    Message <span className="text-[#C9A24B]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-3.5 text-white/35 pointer-events-none">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={onChange}
                      required
                      maxLength={1000}
                      placeholder="Please enter your message..."
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0A1628] border border-[#C9A24B]/25 text-sm text-white/70 placeholder-white/25 focus:outline-none focus:border-[#C9A24B] resize-none transition-colors"
                    />
                    <span className="absolute bottom-2.5 right-3.5 text-[10px] text-white/30">{charCount}/1000</span>
                  </div>
                </div>

                {/* Submit Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex items-center gap-2.5 px-7 py-3 bg-[#C9A24B] hover:bg-[#E8D5A3] text-[#07090E] font-bold text-sm tracking-wider uppercase rounded-lg transition-all duration-200 disabled:opacity-60 shadow-lg"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
                  </button>
                  <div className="flex items-center gap-2 text-white/35">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span className="text-xs">We respect your privacy. Your details are safe with us.</span>
                  </div>
                </div>

                {status === 'sent' && (
                  <p className="text-[#C9A24B] text-sm bg-[#C9A24B]/10 border border-[#C9A24B]/25 rounded-lg px-4 py-3">
                    ✓ Thank you — your enquiry has been received. We'll respond within one business day.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/25 rounded-lg px-4 py-3">
                    Something went wrong. Please try again or email us directly at export@vencilla.com
                  </p>
                )}
              </form>
            </div>

            {/* ---- RIGHT: Company Details + Map ---- */}
            <div className="lg:col-span-5 flex flex-col gap-5">

              {/* Company Details Card */}
              <div className="bg-[#0D1B2E] rounded-2xl border border-[#C9A24B]/20 p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#C9A24B]/15 border border-[#C9A24B]/35 flex items-center justify-center text-[#C9A24B]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2" />
                      <line x1="2" y1="13" x2="22" y2="13" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif-luxury text-base font-bold text-white">Company Details</h3>
                    <div className="w-8 h-[1.5px] bg-[#C9A24B] mt-1" />
                  </div>
                </div>

                <ul className="space-y-5">
                  {/* Address */}
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C9A24B]/10 border border-[#C9A24B]/25 flex items-center justify-center text-[#C9A24B] flex-shrink-0 mt-0.5">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold leading-snug">Vencilla Global Excellence</p>
                      <p className="text-white/50 text-xs leading-relaxed mt-0.5">
                        434/3b, Somakanji wadi,<br />Khatodara, Surat. 395002
                      </p>
                    </div>
                  </li>
                  {/* Email */}
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C9A24B]/10 border border-[#C9A24B]/25 flex items-center justify-center text-[#C9A24B] flex-shrink-0">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm">export@vencilla.com</span>
                  </li>
                  {/* Phone */}
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C9A24B]/10 border border-[#C9A24B]/25 flex items-center justify-center text-[#C9A24B] flex-shrink-0">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm">+91 7622009300</span>
                  </li>
                </ul>
              </div>

              {/* Our Location Card */}
              <div className="bg-[#0D1B2E] rounded-2xl border border-[#C9A24B]/20 overflow-hidden flex-1">
                <div className="flex items-center gap-3 px-6 pt-5 pb-4">
                  <div className="text-[#C9A24B]">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="font-serif-luxury text-base font-bold text-white">Our Location</h3>
                </div>

                {/* Map embed */}
                <div className="w-full h-48 relative">
                  <iframe
                    title="Vencilla Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0!2d72.8!3d21.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e0000000001%3A0x1!2sKhatodara%2C+Surat%2C+Gujarat!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* View on Google Maps button */}
                <a
                  href="https://maps.google.com/?q=Khatodara,Surat,Gujarat,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#0A1628] border-t border-[#C9A24B]/20 text-[#C9A24B] text-xs font-bold tracking-widest uppercase hover:bg-[#C9A24B]/10 transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM FEATURE STRIP ===== */}
      <section className="border-t border-[#C9A24B]/15 py-8 bg-[#0A1628]">
        <div className="container-vc">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-[#C9A24B]/15">
            {[
              {
                label: 'Quick Response',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
              },
              {
                label: 'Secure & Confidential',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                ),
              },
              {
                label: 'Expert Support',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                ),
              },
              {
                label: 'Global Reach',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                ),
              },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-center text-center gap-2.5 px-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A24B]/10 border border-[#C9A24B]/25 flex items-center justify-center text-[#C9A24B]">
                  {f.icon}
                </div>
                <span className="text-white/65 text-xs font-semibold tracking-wide">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, name, value, onChange, type = 'text', placeholder, required, icon }) {
  return (
    <div>
      <label className="text-[11px] font-bold text-white/60 uppercase tracking-widest block mb-2">
        {label} {required && <span className="text-[#C9A24B]">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/35 pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0A1628] border border-[#C9A24B]/25 text-sm text-white/80 placeholder-white/25 focus:outline-none focus:border-[#C9A24B] transition-colors"
        />
      </div>
    </div>
  );
}


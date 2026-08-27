import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { submitQuoteRequest } from '../api/client.js';

export default function RequestQuote() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: params.get('product') || '',
    quantity: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle');

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      if (file) data.append('document', file);
      await submitQuoteRequest(data);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="min-h-screen bg-[#F9F6F0] pt-28 pb-20 px-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl p-8 sm:p-12 max-w-lg w-full text-center space-y-6">
          <div className="w-16 h-16 bg-[#007A48]/10 text-[#007A48] border border-[#007A48]/30 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#C9A24B] tracking-[0.25em] uppercase block mb-1">
              REQUEST RECEIVED
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#07090E]">
              Thank You for Your Enquiry
            </h2>
          </div>
          <p className="text-sm text-[#4A5A63] leading-relaxed">
            Our commercial export team will review your specifications for{' '}
            <strong className="text-[#07090E]">{form.product || 'your requirement'}</strong> and respond with pricing, COA/DMF documentation, and lead time within 24 hours.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => { setStatus('idle'); setForm({ name: '', company: '', email: '', phone: '', country: '', product: '', quantity: '', message: '' }); setFile(null); }}
              className="px-6 py-3 bg-[#07090E] text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#1a1a1a] transition-all"
            >
              Submit Another Request
            </button>
            <a
              href="https://wa.me/917622009300"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#1EBE5D] transition-all flex items-center justify-center gap-2"
            >
              Chat on WhatsApp &rarr;
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#07090E] pt-24 pb-20">
      
      {/* ===== HEADER ===== */}
      <section className="py-12 border-b border-gray-200/80 bg-white/70 backdrop-blur-sm">
        <div className="container-vc max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#C9A24B]" />
            <span className="text-[#C9A24B] text-xs font-bold tracking-[0.3em] uppercase">
              REQUEST A QUOTE
            </span>
            <div className="w-8 h-[2px] bg-[#C9A24B]" />
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07090E] mb-4">
            Get Commercial Quotation & Specifications
          </h1>
          <p className="text-sm sm:text-base text-[#4A5A63] max-w-2xl mx-auto leading-relaxed">
            Share your product requirements and our commercial export team will respond with competitive bulk pricing, pharmacopoeial documentation, and delivery timelines.
          </p>
        </div>
      </section>

      {/* ===== FORM SECTION ===== */}
      <section className="py-12">
        <div className="container-vc max-w-4xl">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 sm:p-10">
            
            {/* Sub-header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A24B]/15 text-[#C9A24B] flex items-center justify-center font-bold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif-luxury text-lg font-bold text-[#07090E]">
                    Commercial Requirement Form
                  </h2>
                  <p className="text-xs text-[#4A5A63]">Fill in the specifications below for export inquiry</p>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A24B] bg-[#C9A24B]/10 px-3 py-1 rounded-full border border-[#C9A24B]/30 hidden sm:inline-block">
                ⚡ 24H Response Guaranteed
              </span>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              
              {/* Row 1: Full Name & Company */}
              <div className="grid sm:grid-cols-2 gap-6">
                <LightField
                  label="FULL NAME"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  placeholder="Enter your full name"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  }
                />
                <LightField
                  label="COMPANY"
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  required
                  placeholder="Enter company / organization name"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2" />
                    </svg>
                  }
                />
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-6">
                <LightField
                  label="EMAIL"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder="name@company.com"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  }
                />
                <LightField
                  label="PHONE"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  required
                  placeholder="+1 (555) 000-0000"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                    </svg>
                  }
                />
              </div>

              {/* Row 3: Country & Product / API */}
              <div className="grid sm:grid-cols-2 gap-6">
                <LightField
                  label="COUNTRY"
                  name="country"
                  value={form.country}
                  onChange={onChange}
                  required
                  placeholder="e.g. United Kingdom, USA, Germany"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  }
                />
                <LightField
                  label="PRODUCT / API"
                  name="product"
                  value={form.product}
                  onChange={onChange}
                  required
                  placeholder="e.g. Pregabalin API / Cotton Fabric"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  }
                />
              </div>

              {/* Estimated Quantity */}
              <LightField
                label="ESTIMATED QUANTITY"
                name="quantity"
                value={form.quantity}
                onChange={onChange}
                placeholder="e.g. 25 kg / month or 5,000 meters"
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                }
              />

              {/* Message */}
              <div>
                <label className="text-[11px] font-bold text-[#07090E]/80 tracking-wider uppercase block mb-1.5">
                  MESSAGE
                </label>
                <div className="relative">
                  <div className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#FBFBFB] border border-gray-300 rounded-lg text-sm text-[#07090E] placeholder-gray-400 focus:bg-white focus:border-[#C9A24B] focus:ring-2 focus:ring-[#C9A24B]/20 focus:outline-none transition-all resize-none"
                    placeholder="Specification requirements, target market, timeline, etc."
                  />
                </div>
              </div>

              {/* Attach Document Custom Component */}
              <div>
                <label className="text-[11px] font-bold text-[#07090E]/80 tracking-wider uppercase block mb-1.5">
                  ATTACH DOCUMENT (OPTIONAL)
                </label>
                <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-4 bg-[#FBFBFB] hover:bg-white hover:border-[#C9A24B] transition-colors flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#07090E]">
                        {file ? file.name : 'Upload RFQ, Specification Sheet or Dossier'}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {file ? `${(file.size / 1024).toFixed(1)} KB` : 'PDF, DOCX, XLSX, JPG or PNG (Max 15MB)'}
                      </p>
                    </div>
                  </div>
                  
                  <label className="cursor-pointer px-4 py-2 bg-[#07090E] hover:bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex-shrink-0">
                    Choose File
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-[#C9A24B] hover:bg-[#D4AF37] text-[#07090E] font-bold text-sm uppercase tracking-widest rounded-lg shadow-md shadow-[#C9A24B]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  {status === 'sending' ? 'SUBMITTING REQUEST...' : 'SUBMIT REQUEST'}
                </button>
              </div>

              {status === 'error' && (
                <p className="text-xs text-red-600 text-center bg-red-50 p-3 rounded-lg border border-red-200">
                  Something went wrong. Please try again or email us directly at <strong>export@vencilla.com</strong>.
                </p>
              )}
            </form>
          </div>

          {/* ===== TRUST STRIP ===== */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex flex-col items-center gap-2">
              <span className="text-[#C9A24B] text-xl">⚡</span>
              <span className="text-xs font-bold text-[#07090E]">Fast 24H Turnaround</span>
              <span className="text-[11px] text-[#4A5A63]">Direct response from commercial manager</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex flex-col items-center gap-2">
              <span className="text-[#C9A24B] text-xl">📜</span>
              <span className="text-xs font-bold text-[#07090E]">CEP & DMF Available</span>
              <span className="text-[11px] text-[#4A5A63]">Complete pharmacopoeial dossiers</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex flex-col items-center gap-2">
              <span className="text-[#C9A24B] text-xl">🌍</span>
              <span className="text-xs font-bold text-[#07090E]">48+ Export Markets</span>
              <span className="text-[11px] text-[#4A5A63]">Worldwide logistics & shipping</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex flex-col items-center gap-2">
              <span className="text-[#C9A24B] text-xl">🔒</span>
              <span className="text-xs font-bold text-[#07090E]">100% Confidential</span>
              <span className="text-[11px] text-[#4A5A63]">Protected business inquiries</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

function LightField({ label, name, value, onChange, type = 'text', required, placeholder, icon }) {
  return (
    <div>
      <label className="text-[11px] font-bold text-[#07090E]/80 tracking-wider uppercase block mb-1.5">
        {label} {required && <span className="text-[#C9A24B]">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-[#FBFBFB] border border-gray-300 rounded-lg text-sm text-[#07090E] placeholder-gray-400 focus:bg-white focus:border-[#C9A24B] focus:ring-2 focus:ring-[#C9A24B]/20 focus:outline-none transition-all"
        />
      </div>
    </div>
  );
}


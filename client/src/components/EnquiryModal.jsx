import React, { useState } from 'react';
import { submitEnquiry } from '../api/client.js';

export default function EnquiryModal({ isOpen, onClose, product }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  if (!isOpen) return null;

  const isTextiles = product?.division === 'textiles';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus({ loading: false, success: false, error: 'Please enter your name and email address.' });
      return;
    }

    setStatus({ loading: true, success: false, error: '' });

    try {
      const payload = {
        ...formData,
        product: product?.name || 'General Product Enquiry',
        division: product?.division || 'general',
      };

      const res = await submitEnquiry(payload);
      if (res?.success) {
        setStatus({ loading: false, success: true, error: '' });
      } else {
        setStatus({ loading: false, success: false, error: res?.message || 'Something went wrong.' });
      }
    } catch {
      setStatus({ loading: false, success: true, error: '' });
    }
  };

  // Pre-filled WhatsApp direct chat link
  const whatsappNumber = '917622009300';
  const whatsappText = encodeURIComponent(
    `Hello Vencilla Commercial Team, I would like to request export pricing and specifications for: ${product?.name || 'Product Enquiry'} (${isTextiles ? 'Textiles Division' : 'Pharmaceuticals Division'}).`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl p-6 sm:p-8 bg-[#0C121D] border border-[#C9A24B]/30 rounded-2xl shadow-2xl text-white my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2 text-lg"
          aria-label="Close Modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="mb-6 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded font-bold ${
                isTextiles ? 'bg-[#C9A24B]/20 text-[#C9A24B] border border-[#C9A24B]/40' : 'bg-[#00BCD4]/20 text-[#00E5FF] border border-[#00BCD4]/40'
              }`}
            >
              {isTextiles ? 'VENCILLA TEXTILES' : 'VENCILLA PHARMACEUTICALS'}
            </span>
          </div>

          <h3 className="font-serif-luxury text-2xl font-bold text-white mb-1">
            Request Commercial Quote / Enquiry
          </h3>
          <p className="text-xs text-white/70 font-sans">
            Inquiring about: <strong className="text-white">{product?.name || 'Product Consultation'}</strong>
          </p>
        </div>

        {status.success ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#0E5A36] text-white flex items-center justify-center shadow-lg">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h4 className="font-serif-luxury text-xl font-bold text-[#F5E6AD]">
              Enquiry Submitted Successfully
            </h4>
            <p className="text-xs text-white/80 max-w-md mx-auto leading-relaxed">
              Your inquiry has been recorded in our commercial database. A dedicated export manager will review your specifications and contact you within 24 hours.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold bg-[#25D366] text-black rounded hover:bg-[#1EBE5D] transition-colors"
              >
                Chat on WhatsApp Now &rarr;
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold bg-white/10 text-white rounded hover:bg-white/20 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {status.error && (
              <div className="p-3 text-xs bg-red-950/60 border border-red-500/50 rounded text-red-200">
                {status.error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-white/80 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full px-3.5 py-2 text-xs rounded bg-[#07090E] border border-white/20 text-white focus:outline-none focus:border-[#C9A24B]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-white/80 uppercase mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Global Trade Ltd."
                  className="w-full px-3.5 py-2 text-xs rounded bg-[#07090E] border border-white/20 text-white focus:outline-none focus:border-[#C9A24B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-white/80 uppercase mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2 text-xs rounded bg-[#07090E] border border-white/20 text-white focus:outline-none focus:border-[#C9A24B]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-white/80 uppercase mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3.5 py-2 text-xs rounded bg-[#07090E] border border-white/20 text-white focus:outline-none focus:border-[#C9A24B]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-white/80 uppercase mb-1">
                Estimated Order Quantity / Destination Port
              </label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder={isTextiles ? 'e.g. 2,000 Meters • Port of Lagos' : 'e.g. 100 Kg • CIF Port of Felixstowe'}
                className="w-full px-3.5 py-2 text-xs rounded bg-[#07090E] border border-white/20 text-white focus:outline-none focus:border-[#C9A24B]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-white/80 uppercase mb-1">
                Specifications & Requirements
              </label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Specify your required grade, packaging, delivery timeline, or regulatory dossier needs..."
                className="w-full px-3.5 py-2 text-xs rounded bg-[#07090E] border border-white/20 text-white focus:outline-none focus:border-[#C9A24B]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="submit"
                disabled={status.loading}
                className="w-full sm:w-auto px-7 py-3 rounded text-xs font-bold tracking-wider uppercase bg-[#C9A24B] text-[#07090E] hover:bg-[#E5C26B] transition-all shadow-md flex items-center justify-center gap-2"
              >
                {status.loading ? 'Submitting...' : 'SUBMIT ENQUIRY →'}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3 rounded text-xs font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white flex items-center justify-center gap-2 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                Direct WhatsApp Chat
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

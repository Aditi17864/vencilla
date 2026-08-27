import React from 'react';

const SectionHeading = ({ eyebrow, title, subtitle, align = 'left', className = '' }) => {
  const isCenter = align === 'center';
  
  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className="eyebrow mb-4">
          {eyebrow}
        </div>
      )}
      
      {title && (
        <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-white mb-6 leading-tight">
          {title}
        </h2>
      )}
      
      <div className={isCenter ? 'gold-divider-center mb-6' : 'gold-divider mb-6'}></div>
      
      {subtitle && (
        <p className={`text-[#c0c0c0]/70 font-['Inter'] leading-relaxed ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

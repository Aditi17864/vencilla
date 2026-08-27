/**
 * Vencilla Theme AJAX Form Handlers
 * Handles Enquiry Modal, Contact Page Form, and Quote Request (with File Upload)
 */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {

    // 1. Enquiry Modal Form Submission
    const modalForm = document.getElementById('vencilla-enquiry-modal-form');
    if (modalForm) {
      modalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = modalForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'SUBMITTING...';

        const formData = new FormData(modalForm);
        formData.append('action', 'vencilla_enquiry');

        fetch(vencillaAjax.url, {
          method: 'POST',
          body: formData,
          credentials: 'same-origin'
        })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.success) {
            modalForm.reset();
            const formBody = document.getElementById('modal-form-body');
            const successDiv = document.getElementById('modal-success');
            if (formBody) formBody.style.display = 'none';
            if (successDiv) successDiv.style.display = 'block';
          } else {
            alert(data.data ? data.data.message : 'Submission failed. Please check required fields.');
          }
        })
        .catch(function(err) {
          console.error(err);
          alert('Network connection error. Please retry or contact us directly on WhatsApp.');
        })
        .finally(function() {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        });
      });
    }

    // 2. Contact Page Form Handler
    const contactForm = document.getElementById('vencilla-contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        const successBox = document.getElementById('contact-success');
        const errorBox = document.getElementById('contact-error');

        submitBtn.disabled = true;
        submitBtn.textContent = 'TRANSMITTING...';

        const formData = new FormData(contactForm);
        formData.append('action', 'vencilla_enquiry');

        fetch(vencillaAjax.url, {
          method: 'POST',
          body: formData,
          credentials: 'same-origin'
        })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.success) {
            contactForm.reset();
            if (successBox) {
              successBox.style.display = 'block';
              successBox.textContent = data.data.message;
            }
            if (errorBox) errorBox.style.display = 'none';
          } else {
            if (errorBox) {
              errorBox.style.display = 'block';
              errorBox.textContent = data.data ? data.data.message : 'Please fill all required fields correctly.';
            }
          }
        })
        .catch(function(err) {
          if (errorBox) {
            errorBox.style.display = 'block';
            errorBox.textContent = 'Server communication error. Please try again.';
          }
        })
        .finally(function() {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        });
      });
    }

    // 3. Request A Quote Form Handler (Multi-Part File Upload)
    const quoteForm = document.getElementById('vencilla-quote-form');
    if (quoteForm) {
      quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = quoteForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        const formState = document.getElementById('quote-form-state');
        const successState = document.getElementById('quote-success-state');

        submitBtn.disabled = true;
        submitBtn.textContent = 'PROCESSING QUOTE...';

        const formData = new FormData(quoteForm);
        formData.append('action', 'vencilla_quote');

        fetch(vencillaAjax.url, {
          method: 'POST',
          body: formData,
          credentials: 'same-origin'
        })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.success) {
            quoteForm.reset();
            if (formState) formState.style.display = 'none';
            if (successState) successState.style.display = 'block';
          } else {
            alert(data.data ? data.data.message : 'Quote request submission failed. Please verify form details.');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        })
        .catch(function(err) {
          alert('Network timeout. Please retry or contact export@vencilla.com directly.');
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        });
      });
    }

  });
})();

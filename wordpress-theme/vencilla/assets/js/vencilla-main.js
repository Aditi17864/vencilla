/**
 * Vencilla Theme Main JavaScript
 * Handles header transitions, mobile navigation, tab switches, client-side product filtering, modal dialogues, and scroll reveal effects.
 */
(function() {
  'use strict';

  // 1. Header Scroll Effect
  function initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 2. Mobile Menu Toggle
  function initMobileMenu() {
    const btn = document.getElementById('hamburger-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    const spans = btn.querySelectorAll('span');
    let isOpen = false;

    btn.addEventListener('click', function() {
      isOpen = !isOpen;
      menu.style.display = isOpen ? 'block' : 'none';
      document.body.style.overflow = isOpen ? 'hidden' : '';

      if (spans.length >= 3) {
        spans[0].style.transform = isOpen ? 'translateY(8px) rotate(45deg)' : '';
        spans[1].style.opacity = isOpen ? '0' : '1';
        spans[2].style.transform = isOpen ? 'translateY(-8px) rotate(-45deg)' : '';
      }
    });

    // Close when clicking nav links
    menu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        isOpen = false;
        menu.style.display = 'none';
        document.body.style.overflow = '';
        if (spans.length >= 3) {
          spans[0].style.transform = '';
          spans[1].style.opacity = '1';
          spans[2].style.transform = '';
        }
      });
    });
  }

  // 3. Scroll Reveal Animations (Intersection Observer)
  function initScrollReveal() {
    const items = document.querySelectorAll('.reveal-item');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function(el) { el.classList.add('revealed'); });
      return;
    }

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    items.forEach(function(el) {
      observer.observe(el);
    });
  }

  // 4. Division Showcase Tabs (Textiles / Pharma)
  function initDivisionTabs() {
    const tabButtons = document.querySelectorAll('.division-tab-btn');
    const tabContents = document.querySelectorAll('.division-tab-content');
    if (!tabButtons.length) return;

    tabButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const target = this.getAttribute('data-tab');

        tabButtons.forEach(function(b) { b.classList.remove('active'); });
        tabContents.forEach(function(c) { c.style.display = 'none'; c.classList.remove('active'); });

        this.classList.add('active');
        const activeContent = document.querySelector('.division-tab-content[data-content="' + target + '"]');
        if (activeContent) {
          activeContent.style.display = 'block';
          activeContent.classList.add('active');
        }
      });
    });
  }

  // 5. Enquiry Modal Controller
  function initEnquiryModal() {
    const modal = document.getElementById('enquiry-modal');
    if (!modal) return;

    function openModal(productId, productName, division) {
      const productInput = modal.querySelector('input[name="product"]');
      const divisionInput = modal.querySelector('input[name="division"]');

      if (productInput && productName) {
        productInput.value = productName;
      }
      if (divisionInput && division) {
        divisionInput.value = division;
      }

      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      
      // Reset form view if success was shown
      const formBody = document.getElementById('modal-form-body');
      const successDiv = document.getElementById('modal-success');
      if (formBody) formBody.style.display = 'block';
      if (successDiv) successDiv.style.display = 'none';
    }

    // Attach to dynamic enquiry buttons
    document.addEventListener('click', function(e) {
      const btn = e.target.closest('[data-enquiry-btn]');
      if (btn) {
        e.preventDefault();
        openModal(
          btn.getAttribute('data-product-id') || '',
          btn.getAttribute('data-product-name') || '',
          btn.getAttribute('data-division') || ''
        );
      }

      if (e.target.matches('[data-modal-close]') || e.target.closest('[data-modal-close]') || e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
      }
    });

    window.vencillaOpenModal = openModal;
    window.vencillaCloseModal = closeModal;
  }

  // 6. Interactive 3D Perspective Tilt on Fabric Card
  function initFabricTilt() {
    const card = document.querySelector('.fabric-3d-card');
    if (!card) return;

    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      card.style.transform = 'perspective(1000px) rotateY(' + (x * 12) + 'deg) rotateX(' + (-y * 10) + 'deg) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
    });
  }

  // 7. Client-Side Product Filter & Realtime Search
  function initProductFilter() {
    const searchInput = document.querySelector('.product-search-input');
    const categoryBtns = document.querySelectorAll('.category-filter-btn');
    const productWrappers = document.querySelectorAll('.product-card-wrapper');

    if (!productWrappers.length) return;

    let activeCategory = 'all';
    let searchQuery = '';

    function applyFilter() {
      let visibleCount = 0;

      productWrappers.forEach(function(card) {
        const name = (card.getAttribute('data-name') || '').toLowerCase();
        const cat = (card.getAttribute('data-category') || '').toLowerCase();
        const cas = (card.getAttribute('data-cas') || '').toLowerCase();

        const matchesCat = (activeCategory === 'all') || (cat === activeCategory.toLowerCase());
        const matchesSearch = !searchQuery || name.includes(searchQuery) || cat.includes(searchQuery) || cas.includes(searchQuery);

        if (matchesCat && matchesSearch) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      const emptyState = document.querySelector('.products-empty-state');
      if (emptyState) {
        emptyState.style.display = (visibleCount === 0) ? 'block' : 'none';
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', function() {
        searchQuery = this.value.toLowerCase().trim();
        applyFilter();
      });
    }

    categoryBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        categoryBtns.forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        activeCategory = this.getAttribute('data-category') || 'all';
        applyFilter();
      });
    });
  }

  // Initialize all modules when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initHeaderScroll();
    initMobileMenu();
    initScrollReveal();
    initDivisionTabs();
    initEnquiryModal();
    initFabricTilt();
    initProductFilter();
  });
})();

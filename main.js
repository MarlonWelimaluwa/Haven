/* =============================================
   HAVEN — Burnout Recovery Coach
   main.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* =====================
     1. NAVBAR SCROLL
  ===================== */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });


  /* =====================
     2. MOBILE MENU
  ===================== */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  const openMenu  = () => { mobileMenu.classList.add('open'); hamburger.classList.add('active'); document.body.style.overflow = 'hidden'; };
  const closeMenu = () => { mobileMenu.classList.remove('open'); hamburger.classList.remove('active'); document.body.style.overflow = ''; };

  hamburger?.addEventListener('click', openMenu);
  mobileClose?.addEventListener('click', closeMenu);
  document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', closeMenu));
  mobileMenu?.addEventListener('click', e => { if (e.target === mobileMenu) closeMenu(); });


  /* =====================
     3. SCROLL REVEAL
  ===================== */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


  /* =====================
     4. FAQ ACCORDION
  ===================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.querySelector('.faq-q')?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(f => f.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });


  /* =====================
     5. FEELING ITEMS HOVER EFFECT
     (subtle highlight when hovering feelings checklist)
  ===================== */
  document.querySelectorAll('.feeling-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      document.querySelectorAll('.feeling-item').forEach(i => i.style.opacity = '0.55');
      item.style.opacity = '1';
    });
    item.addEventListener('mouseleave', () => {
      document.querySelectorAll('.feeling-item').forEach(i => i.style.opacity = '1');
    });
  });


  /* =====================
     6. SMOOTH SCROLL
  ===================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    });
  });


  /* =====================
     7. EMAILJS CONTACT FORM
  ===================== */

  // ⚠️ Replace with your EmailJS credentials:
  const EMAILJS_PUBLIC_KEY  = 'ccMNxZpGD7S987cw5';
  const EMAILJS_SERVICE_ID  = 'service_ztvi0kv';
  const EMAILJS_TEMPLATE_ID = 'template_56frc2a';

  if (typeof emailjs !== 'undefined') emailjs.init(EMAILJS_PUBLIC_KEY);

  const form        = document.getElementById('contactForm');
  const submitBtn   = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');
  const formError   = document.getElementById('formError');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btnSpan = submitBtn.querySelector('span');
    const originalText = btnSpan.textContent;
    btnSpan.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    if (formError) formError.style.display = 'none';

    const data = {
      from_name:   form.querySelector('[name="from_name"]').value.trim(),
      from_email:  form.querySelector('[name="from_email"]').value.trim(),
      situation:   form.querySelector('[name="situation"]').value,
      message:     form.querySelector('[name="message"]').value.trim(),
      reply_to:    form.querySelector('[name="from_email"]').value.trim(),
    };

    try {
      if (typeof emailjs === 'undefined') throw new Error('EmailJS not configured yet. Add your credentials in main.js.');
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data);
      form.style.display = 'none';
      formSuccess.classList.add('show');
    } catch (err) {
      console.error('EmailJS Error:', err);
      if (formError) {
        formError.style.display = 'block';
        formError.textContent = err.message?.includes('not configured')
          ? '⚠️ EmailJS not configured yet — add your credentials in main.js.'
          : '❌ Something went wrong. Please try again or reach out directly.';
      }
      btnSpan.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
    }
  });


  /* =====================
     8. AUTO YEAR
  ===================== */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade in sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.project, .ai-card, .section-title, .about-content').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Video section smooth reveal
document.querySelectorAll('a[href="#video-section"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const video = document.querySelector('#video-section');
    if (video) {
      video.scrollIntoView({ behavior: 'smooth' });
      // Highlight the section briefly
      video.style.transition = 'box-shadow 0.4s';
      video.style.boxShadow = '0 0 0 2px var(--accent)';
      setTimeout(() => { video.style.boxShadow = 'none'; }, 1500);
    }
  });
});

// Nav background opacity on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (nav) {
    nav.style.background = window.scrollY > 100
      ? 'rgba(10,12,16,0.95)'
      : 'rgba(10,12,16,0.85)';
  }
});

console.log('Portfolio ready — 陈海川');

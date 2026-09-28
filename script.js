/**
 * PKK BAB 4 - CLEAN EDITORIAL BLOG SCRIPTS
 * Developed by: M. Fachry Praditya
 * Features:
 * - Reading progress bar
 * - Mobile drawer navigation
 * - Sticky header shadow on scroll
 * - Print / PDF export
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ===================================================================
     1. Reading Progress Bar
  =================================================================== */
  const progressFill = document.getElementById('progressFill');
  const siteHeader = document.getElementById('siteHeader');

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (docHeight > 0 && progressFill) {
      const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      progressFill.style.width = `${progress}%`;
    }

    // Add shadow to header on scroll
    if (siteHeader) {
      if (scrollTop > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ===================================================================
     2. Mobile Drawer Navigation
  =================================================================== */
  const btnHamburger = document.getElementById('btnHamburger');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const btnCloseDrawer = document.getElementById('btnCloseDrawer');

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (btnHamburger) btnHamburger.addEventListener('click', openDrawer);
  if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);

  // Close drawer when clicking a nav link
  const drawerLinks = document.querySelectorAll('.drawer-nav a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  /* ===================================================================
     3. Print / PDF Export
  =================================================================== */
  const btnPrint = document.getElementById('btnPrint');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }

});

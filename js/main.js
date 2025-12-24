/**
 * Dev4Life - Personal Portfolio
 * Main JavaScript File
 */

(function() {
    'use strict';

    // DOM Elements
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section[id]');

    /**
     * Mobile Navigation Toggle
     */
    function initMobileNav() {
        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    /**
     * Smooth Scroll for Anchor Links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const headerOffset = 70;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Scroll Animations - Fade In Elements
     */
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll(
            '.project-card, .commercial-item, .section-header, .about-content, .contact-wrapper'
        );

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(function(element) {
            element.classList.add('fade-in');
            observer.observe(element);
        });
    }

    /**
     * Active Navigation Link Highlighting
     */
    function initActiveNavLink() {
        function updateActiveLink() {
            const scrollPosition = window.scrollY + 100;

            sections.forEach(function(section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector('.nav-menu a[href="#' + sectionId + '"]');

                if (navLink) {
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        navLinks.forEach(function(link) {
                            link.style.color = '';
                        });
                        navLink.style.color = 'var(--color-text)';
                    }
                }
            });
        }

        // Throttle scroll event
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateActiveLink();
                    ticking = false;
                });
                ticking = true;
            }
        });

        updateActiveLink();
    }

    /**
     * Header Background on Scroll
     */
    function initHeaderBackground() {
        const nav = document.querySelector('.nav');

        function updateNavBackground() {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(250, 250, 250, 0.95)';
            } else {
                nav.style.background = 'rgba(250, 250, 250, 0.85)';
            }
        }

        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateNavBackground();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    /**
     * Initialize all modules
     */
    function init() {
        initMobileNav();
        initSmoothScroll();
        initScrollAnimations();
        initActiveNavLink();
        initHeaderBackground();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

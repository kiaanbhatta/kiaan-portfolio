(() => {
    "use strict";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const $ = (s, root = document) => root.querySelector(s);
    const $$ = (s, root = document) => [...root.querySelectorAll(s)];

    /* Scroll progress + navbar state */
    const progress = document.createElement("div");
    progress.className = "scroll-progress";
    progress.innerHTML = '<div class="scroll-progress-bar"></div>';
    document.body.appendChild(progress);

    let scrollTick = false;
    const updateScroll = () => {
        const max = document.documentElement.scrollHeight - innerHeight;
        const value = max > 0 ? scrollY / max : 0;
        $(".scroll-progress-bar").style.transform = `scaleX(${Math.max(0, Math.min(1, value))})`;
        $(".navbar")?.classList.toggle("nav-scrolled", scrollY > 18);
        scrollTick = false;
    };
    addEventListener("scroll", () => {
        if (!scrollTick) {
            requestAnimationFrame(updateScroll);
            scrollTick = true;
        }
    }, { passive: true });
    addEventListener("resize", updateScroll, { passive: true });
    updateScroll();

    /* Assign reveal directions without changing any content */
    $$(".section-heading, .about-photo, .about-text, .contact-heading, .more-projects, .footer-container")
        .forEach((el, i) => el.classList.add(i % 2 ? "motion-right" : "motion-left"));

    $$(".about-info .info-box").forEach((el, i) => {
        el.classList.add("stagger-item");
        el.style.transitionDelay = `${i * 80}ms`;
    });

    $$(".skill-card").forEach((el, i) => {
        el.classList.add("motion-scale");
        el.style.transitionDelay = `${i * 90}ms`;
    });

    $$(".project-card").forEach((el, i) => {
        el.classList.add(i % 2 ? "motion-right" : "motion-left");
        el.style.transitionDelay = `${i * 100}ms`;
    });

    $$(".service-box").forEach(el => el.classList.add("motion-right"));

    $$(".contact-link").forEach((el, i) => {
        el.classList.add("stagger-item");
        el.style.transitionDelay = `${i * 70}ms`;
    });

    const animated = $$(".motion-left, .motion-right, .motion-scale, .stagger-item");

    if (reduced || !("IntersectionObserver" in window)) {
        animated.forEach(el => el.classList.add("is-visible"));
    } else {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
        animated.forEach(el => observer.observe(el));
    }

    /* Animate existing inline skill widths smoothly */
    const bars = $$(".progress-bar");
    const skills = $("#skills");
    const showBars = () => bars.forEach(bar => bar.classList.add("progress-animated"));
    if (skills && !reduced && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            if (entries.some(e => e.isIntersecting)) {
                showBars();
                observer.disconnect();
            }
        }, { threshold: 0.25 });
        observer.observe(skills);
    } else {
        showBars();
    }

    /* Active section indication */
    const ids = ["home", "about", "skills", "projects", "services", "contact"];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    const desktopLinks = $$('nav a[href^="#"]');

    function active(id) {
        desktopLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
        $$(".mobile-nav-panel a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
    }

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            const visible = entries.filter(e => e.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            if (visible[0]) active(visible[0].target.id);
        }, { threshold: [0.15, 0.35, 0.6], rootMargin: "-15% 0px -55% 0px" });
        sections.forEach(s => observer.observe(s));
    }

    /* Mobile menu reuses the existing desktop navigation */
    const originalNav = $("nav");
    if (originalNav && !$(".mobile-nav-panel")) {
        const panel = document.createElement("div");
        panel.className = "mobile-nav-panel";
        $$("a", originalNav).forEach(a => panel.appendChild(a.cloneNode(true)));
        document.body.appendChild(panel);

        const button = document.createElement("button");
        button.className = "mobile-menu-toggle";
        button.type = "button";
        button.setAttribute("aria-label", "Open navigation");
        button.setAttribute("aria-expanded", "false");
        button.innerHTML = "<span></span><span></span><span></span>";
        document.body.appendChild(button);

        const close = () => {
            panel.classList.remove("is-open");
            button.classList.remove("is-open");
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Open navigation");
        };

        button.addEventListener("click", () => {
            const open = panel.classList.toggle("is-open");
            button.classList.toggle("is-open", open);
            button.setAttribute("aria-expanded", String(open));
            button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
        });

        $$("a", panel).forEach(a => a.addEventListener("click", close));
        document.addEventListener("click", e => {
            if (panel.classList.contains("is-open") && !panel.contains(e.target) && !button.contains(e.target)) close();
        });
        addEventListener("resize", () => { if (innerWidth > 600) close(); }, { passive: true });
    }

    /* Desktop ambient cursor glow */
    if (!reduced && !touch) {
        const glow = document.createElement("div");
        glow.className = "cursor-glow";
        document.body.appendChild(glow);

        let mx = innerWidth / 2, my = innerHeight / 2;
        let gx = mx, gy = my, frame = null;

        addEventListener("mousemove", e => {
            mx = e.clientX; my = e.clientY;
            if (!frame) {
                frame = requestAnimationFrame(() => {
                    gx += (mx - gx) * 0.14;
                    gy += (my - gy) * 0.14;
                    glow.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate3d(-50%, -50%, 0)`;
                    frame = null;
                });
            }
        }, { passive: true });
        document.body.classList.add("cursor-active");
    }

    /* Subtle project-card 3D tilt */
    if (!reduced && !touch) {
        $$(".project-card").forEach(card => {
            let frame = null;
            card.addEventListener("pointermove", e => {
                const r = card.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width - 0.5;
                const y = (e.clientY - r.top) / r.height - 0.5;
                if (frame) cancelAnimationFrame(frame);
                frame = requestAnimationFrame(() => {
                    card.style.transform =
                        `perspective(900px) rotateX(${(-y * 4.5).toFixed(2)}deg) rotateY(${(x * 4.5).toFixed(2)}deg) translateY(-8px)`;
                });
            }, { passive: true });
            card.addEventListener("pointerleave", () => {
                if (frame) cancelAnimationFrame(frame);
                card.style.transform = "";
            });
        });
    }

    /* Gentle hero-card depth */
    if (!reduced && !touch) {
        const hero = $(".hero"), card = $(".hero-card");
        if (hero && card) {
            let frame = null;
            hero.addEventListener("pointermove", e => {
                const r = hero.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width - 0.5;
                const y = (e.clientY - r.top) / r.height - 0.5;
                if (frame) cancelAnimationFrame(frame);
                frame = requestAnimationFrame(() => {
                    card.style.transform =
                        `translateY(0) rotateX(${(-y * 2.5).toFixed(2)}deg) rotateY(${(x * 2.5).toFixed(2)}deg)`;
                });
            }, { passive: true });
            hero.addEventListener("pointerleave", () => card.style.transform = "");
        }
    }

    /* Preserve smooth anchor navigation while keeping reduced-motion accessible */
    $$('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            const target = document.querySelector(link.getAttribute("href"));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
            history.replaceState(null, "", link.getAttribute("href"));
        });
    });

    active(location.hash ? location.hash.slice(1) : "home");
})();
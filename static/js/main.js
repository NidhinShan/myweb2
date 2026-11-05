/* =========================================================================
   DARK EDITORIAL PORTFOLIO — JAVASCRIPT ENGINE
   Interactive Works Index · Floating 3D Mockup Previews · Animated Tickers
   Data Binding · Filter Switchers · Direct Messaging Gateway
   ========================================================================= */

(function () {
  'use strict';

  /* ===== Config & Helpers ===== */
  const FORM_ENDPOINT = "";
  const root = document.documentElement;
  const base = document.body.dataset.base || "";
  const page = document.body.dataset.page || "home";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);
  const esc = (s) => String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const chips = (arr) => `<div class="chips">${(arr || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>`;
  const P = (typeof DATA !== "undefined" && DATA.profile) ? DATA.profile : {};

  // Force dark mode as default & primary
  root.dataset.theme = "dark";
  try { localStorage.setItem("theme", "dark"); } catch (e) {}

  /* ===== 1. Interactive Works & Floating Mockup Previews Dataset ===== */
  const WORKS_DATA = [
    {
      id: "localhaul",
      title: "LocalHaul",
      category: "Logistics Coordination Engine",
      count: "01",
      ticker: "LocalHaul → LocalHaul → LocalHaul → LocalHaul → LocalHaul",
      tags: ["Node.js", "PostgreSQL", "Full-Stack"],
      link: "#projects",
      targetId: "project-localhaul",
      mockups: {
        card1: {
          badge: "FLEET RADAR",
          val: "99.4%",
          desc: "Active Fleet Route Efficiency",
          type: "metric"
        },
        card2: {
          badge: "LOGISTICS ENGINE",
          title: "LocalHaul Dispatch",
          sub: "Route coordination & delivery tracking suite",
          tag: "Node.js · PostgreSQL",
          status: "Fleet Active",
          action: "View Project ↗"
        },
        card3: {
          badge: "ACTIVE DISPATCH",
          items: ["Route #104 · Delivered", "Route #105 · In Transit", "Route #106 · Queued"]
        }
      }
    },
    {
      id: "gopal",
      title: "GoPal Systems",
      category: "Smart Campus Utility & Event Suite",
      count: "02",
      ticker: "GoPal Systems → GoPal Systems → GoPal Systems → GoPal Systems",
      tags: ["JavaScript", "APIs", "Tailwind"],
      link: "#projects",
      targetId: "project-gopal",
      mockups: {
        card1: {
          badge: "CAMPUS RADAR",
          val: "Live",
          desc: "Interactive Institutional Radar",
          type: "metric"
        },
        card2: {
          badge: "CAMPUS SUITE",
          title: "GoPal Navigation",
          sub: "Smart venue tracking & utilities for fests",
          tag: "JavaScript · Tailwind",
          status: "NSSCE Live",
          action: "View Project ↗"
        },
        card3: {
          badge: "EVENT LOGISTICS",
          items: ["Main Stage · Keynote", "Tech Hub · Hackathon", "Auditorium · Finals"]
        }
      }
    },
    {
      id: "governance",
      title: "Campus Governance",
      category: "University Union Councillor & Class Rep",
      count: "03",
      ticker: "Campus Governance → Leadership → UUC NSSCE → Governance",
      tags: ["Student Welfare", "Advocacy", "Policy"],
      link: "#roles",
      targetId: "roles",
      mockups: {
        card1: {
          badge: "STUDENT BODY",
          val: "3,000+",
          desc: "University Council Representation",
          type: "metric"
        },
        card2: {
          badge: "COLLEGE UNION",
          title: "University Councillor",
          sub: "Liaison between NSSCE and APJAKTU",
          tag: "Student Governance",
          status: "2026 – Present",
          action: "Explore Roles ↗"
        },
        card3: {
          badge: "COUNCIL FOCUS",
          items: ["Academic Liaison", "Student Welfare Council", "Inter-Batch Electives"]
        }
      }
    },
    {
      id: "festival-ops",
      title: "Festival Operations",
      category: "Event Head & Coordinator — AGAM '26",
      count: "04",
      ticker: "Festival Operations → AGAM '26 → Operations Lead → Logistics",
      tags: ["Event Direction", "Crowd Ops", "Logistics"],
      link: "#roles",
      targetId: "roles",
      mockups: {
        card1: {
          badge: "COORDINATION",
          val: "1,500+",
          desc: "Coordinated Fest Attendees",
          type: "metric"
        },
        card2: {
          badge: "FLAGSHIP ARTS FEST",
          title: "AGAM '26 Lead",
          sub: "Central ops, stage direction & volunteer crews",
          tag: "Operations & Direction",
          status: "College Union 2026",
          action: "View Details ↗"
        },
        card3: {
          badge: "STAGE MILESTONES",
          items: ["Central Stage Operations", "Crowd Control Logistics", "Volunteer Crew Sprints"]
        }
      }
    },
    {
      id: "treasury",
      title: "Treasury & Finance",
      category: "Treasurer & Joint Treasurer — STACS",
      count: "05",
      ticker: "Treasury & Accounts → STACS → Financial Records → Ledger",
      tags: ["Budgeting", "Ledgers", "Auditing"],
      link: "#roles",
      targetId: "roles",
      mockups: {
        card1: {
          badge: "TRANSPARENCY",
          val: "100%",
          desc: "Audited Ledger Reconciliation",
          type: "metric"
        },
        card2: {
          badge: "DEPT ASSOCIATION",
          title: "STACS Treasurer",
          sub: "Budgeting, sponsorships & technical fests",
          tag: "Dept of CSE · NSSCE",
          status: "2024 – 2026",
          action: "View Ledgers ↗"
        },
        card3: {
          badge: "BUDGET STREAMS",
          items: ["Tech Fest Accounts", "Sponsorship Receivables", "Prize Disbursements"]
        }
      }
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & CTF",
      category: "DEDSEC CTF Challenges & 5+ Hackathons",
      count: "06",
      ticker: "Cybersecurity & CTF → 5+ Hackathons → DEDSEC → Exploits",
      tags: ["Exploits", "Cryptography", "Network"],
      link: "#timeline",
      targetId: "timeline",
      mockups: {
        card1: {
          badge: "SPRINTS",
          val: "5+",
          desc: "Hackathons Tackled & Prototyped",
          type: "metric"
        },
        card2: {
          badge: "CTF CHALLENGES",
          title: "DEDSEC Exploits",
          sub: "Capture The Flag challenges & cryptography",
          tag: "Web Security & CTF",
          status: "2026 Competitor",
          action: "View Timeline ↗"
        },
        card3: {
          badge: "TECH SPRINT WINS",
          items: ["Useless Projects 3.0", "Fast Full-Stack Sprints", "Network Security Protocols"]
        }
      }
    }
  ];

  /* ===== 2. Render Shared Layout (Header + Footer) ===== */
  function renderLayout() {
    const links = [
      ["home", "index.html", "Home"],
      ["about", "index.html#about", "About"],
      ["projects", "index.html#projects", "Works"],
      ["roles", "templates/roles.html", "Roles"],
      ["timeline", "templates/timeline.html", "Timeline"],
      ["hobbies", "templates/hobbies.html", "Hobbies"],
      ["contact", "templates/contact.html", "Contact"]
    ];

    const headerEl = $("#site-header");
    const footerEl = $("#site-footer");

    if (headerEl) {
      headerEl.innerHTML = `
        <header class="site-header">
          <nav class="container nav" aria-label="Main Navigation">
            <a class="logo" href="${base}index.html">
              <span class="logo-badge">NS</span>
              <span>NIDHIN SHAN</span>
            </a>
            <ul class="nav-links" id="nav-links">
              ${links.map(([id, href, label]) => {
                const isCurrent = (id === page) || (page === "home" && id === "home");
                return `<li><a href="${base}${href}" ${isCurrent ? 'aria-current="page"' : ""}>${label}</a></li>`;
              }).join("")}
            </ul>
            <div class="nav-actions">
              <div class="nav-status-pill">
                <span class="live-pulse-dot"></span>
                <span>Available Today</span>
              </div>
              <button class="icon-btn hamburger" id="menu-btn" aria-label="Toggle menu" aria-expanded="false">☰</button>
            </div>
          </nav>
        </header>`;
    }

    if (footerEl) {
      footerEl.innerHTML = `
        <footer class="site-footer">
          <div class="container">
            <p>© ${new Date().getFullYear()} <strong>${esc(P.name || "Nidhin Shan")}</strong> · B.Tech CSE Student · NSSCE (APJAKTU)</p>
            <p style="font-size:0.8rem; margin-top:0.4rem; opacity:0.6;">Crafted with Dark Editorial Precision, Semantic HTML, CSS &amp; JavaScript</p>
          </div>
        </footer>`;
    }

    // Mobile Hamburger
    const btn = $("#menu-btn"), nav = $("#nav-links");
    if (btn && nav) {
      const setOpen = (open) => {
        nav.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", open);
      };
      btn.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
      nav.addEventListener("click", (e) => {
        if (e.target.tagName === "A") setOpen(false);
      });
    }
  }

  /* ===== 3. Bind Profile Data & Anchors ===== */
  function bindProfile() {
    $$("[data-bind]").forEach((el) => {
      const key = el.dataset.bind;
      if (P[key]) el.textContent = P[key];
    });

    const set = (id, href) => {
      const el = $(id);
      if (el && href) el.href = href;
    };
    set("#gh-link", P.github);
    set("#li-link", P.linkedin);
    set("#mail-link", `mailto:${P.email}`);
    set("#resume-btn", base + (P.resume || "static/assets/resume.pdf"));
  }

  /* ===== 4. Initialize Interactive Editorial Works Index & Floating Mockups ===== */
  function initWorksIndex() {
    const listContainer = $("#works-index-container");
    const mockupContainer = $("#floating-mockup-preview");
    if (!listContainer || !mockupContainer) return;

    let activeIdx = 0;

    // Render list items
    listContainer.innerHTML = WORKS_DATA.map((w, idx) => `
      <div class="works-row ${idx === 0 ? "active" : ""}" data-work-idx="${idx}" role="button" tabindex="0">
        <!-- Normal Row -->
        <div class="works-row-normal">
          <div class="works-row-title-wrap">
            <span class="works-row-title">${esc(w.title)}</span>
            <span class="works-row-desc">${esc(w.category)}</span>
          </div>
          <span class="works-row-count">${esc(w.count)}</span>
        </div>

        <!-- Active Yellow Pill Ribbon with Marquee Ticker -->
        <div class="works-row-active-pill">
          <div class="ticker-track">
            <span class="ticker-content">${esc(w.ticker)} · ${esc(w.ticker)}</span>
          </div>
          <span class="ticker-count-badge">${esc(w.count)}</span>
        </div>
      </div>
    `).join("");

    // Function to render the 3D-tilted mockups
    const renderMockups = (idx) => {
      const item = WORKS_DATA[idx];
      if (!item) return;

      const m = item.mockups;
      mockupContainer.innerHTML = `
        <div class="mockup-stack">
          <!-- Card 1 (Back Left Tilted -7deg) -->
          <div class="mockup-card card-left">
            <div class="mockup-card-header">
              <span class="mockup-badge">${esc(m.card1.badge)}</span>
              <span class="mockup-dot"></span>
            </div>
            <div class="mockup-metric-ring">
              <span>${esc(m.card1.val)}</span>
            </div>
            <div>
              <div class="mockup-metric-val">${esc(m.card1.val)}</div>
              <div class="mockup-metric-desc">${esc(m.card1.desc)}</div>
            </div>
          </div>

          <!-- Card 2 (Front Center Tilted 2deg - Heroic Focus) -->
          <div class="mockup-card card-center">
            <div class="mockup-card-header">
              <span class="mockup-badge">${esc(m.card2.badge)}</span>
              <span class="mockup-dot"></span>
            </div>
            <div>
              <h4 class="mockup-title">${esc(m.card2.title)}</h4>
              <p class="mockup-sub">${esc(m.card2.sub)}</p>
              <span class="mockup-tag-pill">${esc(m.card2.tag)}</span>
            </div>
            <div class="mockup-btn">
              <span>${esc(m.card2.status)}</span>
              <span>${esc(m.card2.action)}</span>
            </div>
          </div>

          <!-- Card 3 (Right Tilted 8deg) -->
          <div class="mockup-card card-right">
            <div class="mockup-card-header">
              <span class="mockup-badge">${esc(m.card3.badge)}</span>
              <span class="mockup-dot"></span>
            </div>
            <div class="mockup-list-stack">
              ${(m.card3.items || []).map(it => `<div class="mockup-list-item">${esc(it)}</div>`).join("")}
            </div>
            <span class="mockup-tag-pill" style="align-self: flex-start;">${esc(item.tags[0] || "Architecture")}</span>
          </div>
        </div>
      `;

      // Interactive card tapping & action handling
      const cards = mockupContainer.querySelectorAll(".mockup-card");
      cards.forEach((card) => {
        card.addEventListener("click", (e) => {
          // If clicked the action button, navigate to target
          if (e.target.closest(".mockup-btn")) {
            e.stopPropagation();
            const target = item.link;
            if (target && target.startsWith("#")) {
              const el = document.querySelector(target);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }
            return;
          }

          // On mobile, tapping any card in the stack brings it to front
          if (window.innerWidth <= 768) {
            cards.forEach(c => c.classList.remove("is-top"));
            card.classList.add("is-top");
          }
        });
      });
    };

    // Initial render
    renderMockups(0);

    // Event listeners on rows
    const rows = listContainer.querySelectorAll(".works-row");
    rows.forEach((row) => {
      const idx = parseInt(row.dataset.workIdx, 10);

      const activateRow = () => {
        if (activeIdx === idx) return;
        activeIdx = idx;
        rows.forEach((r, i) => r.classList.toggle("active", i === idx));
        renderMockups(idx);
      };

      row.addEventListener("mouseenter", activateRow);
      row.addEventListener("focus", activateRow);

      row.addEventListener("click", () => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
          if (activeIdx === idx) {
            // If already active, follow the anchor link
            const target = WORKS_DATA[idx]?.link;
            if (target && target.startsWith("#")) {
              const el = document.querySelector(target);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }
          } else {
            // First tap activates this row & updates mockup cards below without jumping
            activateRow();
          }
        } else {
          activateRow();
          const target = WORKS_DATA[idx]?.link;
          if (target && target.startsWith("#")) {
            const el = document.querySelector(target);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });

    // Cursor Parallax on the mockup wrapper (desktop only)
    const worksZone = $(".editorial-works-zone");
    if (worksZone && !reduce) {
      worksZone.addEventListener("mousemove", (e) => {
        if (window.innerWidth <= 768) return; // Never set inline transform on mobile
        const rect = worksZone.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        mockupContainer.style.transform = `translateY(calc(-50% + ${y * 15}px)) translateX(${x * 15}px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
      });

      worksZone.addEventListener("mouseleave", () => {
        if (window.innerWidth <= 768) {
          mockupContainer.style.transform = "";
          return;
        }
        mockupContainer.style.transform = "translateY(-50%) rotateY(0deg) rotateX(0deg)";
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth <= 768) {
          mockupContainer.style.transform = "";
        } else {
          mockupContainer.style.transform = "translateY(-50%) rotateY(0deg) rotateX(0deg)";
        }
      });
    }
  }

  /* ===== 5. Render Core Editorial Sections (About, Projects, Roles, Timeline, Hobbies) ===== */
  function initEditorialSections() {
    // 5.1 Stats Counter
    const statsContainer = $("#stats-grid");
    if (statsContainer && DATA.stats) {
      statsContainer.innerHTML = DATA.stats.map(s => `
        <div class="stat-box">
          <b><span data-count="${s.value}">0</span>${esc(s.suffix)}</b>
          <small>${esc(s.label)}</small>
        </div>
      `).join("");
    }

    // 5.2 Projects
    const projectsContainer = $("#projects-grid");
    if (projectsContainer && DATA.projects) {
      projectsContainer.innerHTML = DATA.projects.map((p, idx) => `
        <article class="project-card reveal" id="project-${idx === 0 ? 'localhaul' : 'gopal'}">
          <div>
            <div class="project-top-row">
              <span class="project-category-tag">Featured Project · 0${idx + 1}</span>
              <span class="mockup-dot"></span>
            </div>
            <h3 class="project-title">${esc(p.title)}</h3>
            <p class="project-desc">${esc(p.description)}</p>
            ${chips(p.tags)}
          </div>
          <div class="project-links">
            <a href="${esc(p.demo)}" target="_blank" rel="noopener" class="project-link-btn">
              <span>Live System</span>
              <span class="arrow">↗</span>
            </a>
            <a href="${esc(p.github)}" target="_blank" rel="noopener" class="project-link-btn">
              <span>Source Code</span>
              <span class="arrow">↗</span>
            </a>
          </div>
        </article>
      `).join("");
    }

    // 5.3 Leadership & Roles
    const rolesContainer = $("#roles-grid");
    if (rolesContainer && DATA.roles) {
      rolesContainer.innerHTML = DATA.roles.map(r => `
        <article class="role-card reveal">
          <div>
            <h3>${esc(r.title)}</h3>
            <p class="role-meta">${esc(r.organization)} · ${esc(r.tenure)}</p>
            <ul class="role-impact-list">
              ${(r.impact || []).map(imp => `<li>${esc(imp)}</li>`).join("")}
            </ul>
          </div>
          ${chips(r.skills)}
        </article>
      `).join("");
    }

    // 5.4 Timeline & Milestones
    const timelineContainer = $("#timeline-matrix");
    const timelineFilters = $("#timeline-filters");
    if (timelineContainer && DATA.timeline) {
      const rawTimeline = DATA.timeline;
      let currentFilter = "All";

      const drawTimeline = () => {
        const filtered = rawTimeline.filter(t => currentFilter === "All" || t.category === currentFilter);
        timelineContainer.innerHTML = filtered.map(t => `
          <div class="timeline-card reveal">
            <span class="timeline-badge">${esc(t.year)} · ${esc(t.category)}</span>
            <h3>${esc(t.title)}</h3>
            <p>${esc(t.description)}</p>
          </div>
        `).join("");
        if (typeof initReveal === "function") initReveal();
      };

      if (timelineFilters) {
        const cats = ["All", ...new Set(rawTimeline.map(t => t.category))];
        timelineFilters.innerHTML = cats.map((c, i) => `
          <button class="filter-btn ${i === 0 ? "active" : ""}" data-timeline-filter="${esc(c)}">${esc(c)}</button>
        `).join("");

        timelineFilters.addEventListener("click", (e) => {
          const btn = e.target.closest(".filter-btn");
          if (!btn) return;
          timelineFilters.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b === btn));
          currentFilter = btn.dataset.timelineFilter;
          drawTimeline();
        });
      }

      drawTimeline();
    }

    // 5.5 Beyond The Code / Hobbies
    const hobbiesContainer = $("#hobbies-grid");
    const hobbiesFilterBar = $("#hobbies-filter-bar");
    if (hobbiesContainer && DATA.hobbies) {
      let currentHobbyFilter = "all";

      const drawHobbies = () => {
        const filtered = DATA.hobbies.filter(h => currentHobbyFilter === "all" || h.id === currentHobbyFilter);
        hobbiesContainer.innerHTML = filtered.map(h => `
          <article class="hobby-card reveal">
            <div>
              <span class="hobby-icon">${h.icon}</span>
              <div class="hobby-category">${esc(h.category)}</div>
              <h3>${esc(h.title)}</h3>
              <p class="hobby-tagline">${esc(h.tagline)}</p>
              <p class="hobby-desc">${esc(h.description)}</p>
            </div>
            ${chips(h.tags)}
          </article>
        `).join("");
        if (typeof initReveal === "function") initReveal();
      };

      if (hobbiesFilterBar) {
        hobbiesFilterBar.addEventListener("click", (e) => {
          const btn = e.target.closest(".filter-btn");
          if (!btn) return;
          hobbiesFilterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b === btn));
          currentHobbyFilter = btn.dataset.hobbyFilter;
          drawHobbies();
        });
      }

      drawHobbies();
    }
  }

  /* ===== 6. Contact Form Engine (Direct Email & Fallbacks) ===== */
  function initContactForm() {
    const form = $("#contact-form");
    if (!form) return;
    const status = $("#form-status");
    const targetEmail = P.email || "nidhinshan7@gmail.com";
    const web3Key = P.web3forms_key || "";

    const check = (field) => {
      let msg = "";
      const v = field.value.trim();
      if (!v) msg = "This field is required.";
      else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) msg = "Enter a valid email address.";
      else if (field.minLength > 0 && v.length < field.minLength) msg = `Please enter at least ${field.minLength} characters.`;
      
      field.classList.toggle("invalid", !!msg);
      field.classList.toggle("valid", !msg);
      return !msg;
    };

    const fields = [...form.querySelectorAll("input, textarea")];
    fields.forEach((f) => {
      f.addEventListener("blur", () => check(f));
      f.addEventListener("input", () => f.classList.contains("invalid") && check(f));
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (status) { status.className = ""; status.innerHTML = ""; }
      if (!fields.map(check).every(Boolean)) return;

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnContent = submitBtn ? submitBtn.innerHTML : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending message...</span> <span class="btn-icon">⏳</span>`;
      }

      const data = Object.fromEntries(new FormData(form));
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(data.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`${data.message}\n\n— Sent by ${data.name} (${data.email})`)}`;
      const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(data.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`${data.message}\n\n— Sent by ${data.name} (${data.email})`)}`;

      // Web3Forms API
      if (web3Key) {
        try {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({
              access_key: web3Key,
              name: data.name,
              email: data.email,
              subject: data.subject || `Portfolio message from ${data.name}`,
              message: data.message
            })
          });

          const json = await res.json().catch(() => ({}));
          if (res.ok && json.success) {
            if (status) {
              status.className = "ok";
              status.innerHTML = `
                <div class="status-box ok">
                  <b>✓ Message delivered directly!</b>
                  <p>Thank you, <strong>${esc(data.name)}</strong>! Your note has been delivered to <strong>${esc(targetEmail)}</strong>.</p>
                </div>`;
            }
            form.reset();
            if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = originalBtnContent; }
            return;
          }
        } catch (_) {}
      }

      // Local server-side relay /api/contact
      try {
        const apiRes = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            subject: data.subject || "New Inquiry from Portfolio",
            message: data.message,
            targetEmail
          })
        });

        if (apiRes.ok) {
          if (status) {
            status.className = "ok";
            status.innerHTML = `
              <div class="status-box ok">
                <b>✓ Message delivered successfully!</b>
                <p>Thank you, <strong>${esc(data.name)}</strong>! Your note has been sent to <strong>${esc(targetEmail)}</strong>.</p>
              </div>`;
          }
          form.reset();
          if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = originalBtnContent; }
          return;
        }
      } catch (_) {}

      // FormSubmit Fallback
      form.action = FORM_ENDPOINT || `https://formsubmit.co/${targetEmail}`;
      form.method = "POST";
      form.target = "_blank";
      HTMLFormElement.prototype.submit.call(form);

      if (status) {
        status.className = "ok";
        status.innerHTML = `
          <div class="status-box ok">
            <b>✓ Dispatched to delivery gateway!</b>
            <p>A secure gateway has opened to transmit your message to <strong>${esc(targetEmail)}</strong>.</p>
            <div style="display:flex; gap:0.6rem; flex-wrap:wrap; margin-top:0.8rem;">
              <a class="btn btn-primary" href="${gmailLink}" target="_blank" rel="noopener">Open in Gmail ↗</a>
              <a class="btn btn-ghost" href="${mailtoLink}">Open Mail App ↗</a>
            </div>
          </div>`;
      }

      form.reset();
      if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = originalBtnContent; }
    });
  }

  /* ===== 7. Ambient Music Player Dock Toggle ===== */
  function initMusicDockToggle() {
    const dockBtn = $("#music-dock-toggle");
    const musicCard = $("#hero-music-card");
    if (dockBtn && musicCard) {
      dockBtn.addEventListener("click", () => {
        const isHidden = musicCard.style.display === "none";
        musicCard.style.display = isHidden ? "block" : "none";
        dockBtn.classList.toggle("active", isHidden);
      });
    }
  }

  /* ===== 8. Count-Up Numbers & Scroll Reveal ===== */
  function countUp(el) {
    el.querySelectorAll("[data-count]").forEach((n) => {
      const end = +n.dataset.count;
      if (reduce) { n.textContent = end; return; }
      const t0 = performance.now();
      const step = (t) => {
        const p = Math.min((t - t0) / 1200, 1);
        n.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => { el.classList.add("in"); countUp(el); });
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        countUp(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: 0.1 });
    els.forEach((el, i) => {
      el.style.setProperty("--d", (i % 4) * 80 + "ms");
      io.observe(el);
    });
  }

  /* ===== 9. Initialize Page Lifecycle ===== */
  function init() {
    renderLayout();
    bindProfile();
    initWorksIndex();
    initEditorialSections();
    initContactForm();
    initMusicDockToggle();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();

"use client";

import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  Cpu,
  Cloud,
  Layers,
  CheckCircle,
  Sparkles,
  Mail,
  Send,
  ExternalLink,
  Star,
  TrendingUp,
  Zap,
  BarChart3,
  Database,
  Server,
  Wrench,
  GitBranch,
  Box,
  Globe,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const technologies = [
  { name: "React",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "PHP",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Python",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Docker",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "MongoDB",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Redis",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Tailwind",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
];

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Clean, performant web applications built with React, Next.js, and modern full-stack architectures — designed to scale as you grow.",
    color: "purple",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps for iOS and Android with smooth UX, offline support, and real-world performance using React Native.",
    color: "violet",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Robust REST and GraphQL APIs, microservices, authentication systems, and queue-driven architectures built for reliability under load.",
    color: "fuchsia",
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    description: "Practical AI integrations — LLM-powered features, automated workflows, RAG pipelines, and intelligent data processing using OpenAI and FastAPI.",
    color: "purple",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description: "End-to-end SaaS platforms with multi-tenancy, subscription billing, role-based access, and the infrastructure to support sustainable growth.",
    color: "violet",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Thoughtful, user-centred interfaces — from wireframes and prototypes to polished, production-ready designs that people actually enjoy using.",
    color: "fuchsia",
  },
  {
    icon: GitBranch,
    title: "API Development",
    description: "Well-documented, secure, and versioned APIs built with industry-standard patterns — ready to integrate with any frontend or third-party service.",
    color: "purple",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud architecture, deployment, and infrastructure management on AWS — built for high availability, security, and cost efficiency.",
    color: "violet",
  },
  {
    icon: Box,
    title: "DevOps",
    description: "CI/CD pipelines, Docker containerisation, zero-downtime deployments, and infrastructure-as-code to keep your releases fast and stable.",
    color: "fuchsia",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimised relational and NoSQL database schemas, query tuning, migration strategies, and data integrity practices for any scale.",
    color: "purple",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing technical support, performance monitoring, dependency updates, and feature iterations — so your product stays healthy long after launch.",
    color: "violet",
  },
  {
    icon: Globe,
    title: "Custom Software Development",
    description: "Bespoke software solutions designed around your exact business logic — not generic templates, but purpose-built tools that solve your real problems.",
    color: "fuchsia",
  },
];

const portfolio = [
  {
    title: "IoT Payment Gateway",
    category: "Enterprise Infrastructure",
    tech: ["Node.js", "Next.js", "JWT", "Redis", "Docker", "MySQL", "Razorpay"],
    description: "High-performance async payment engine with automated EMI structuring, real-time multi-currency tracking, and role-based admin workspaces. Processes $250K+ weekly transaction volume.",
    impact: "40% reduction in transactional drops via Redis queue isolation",
    link: null,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
  },
  {
    title: "IntelliAssess AI",
    category: "AI / EdTech",
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "OpenAI", "RAG"],
    description: "Automated assessment engine with 3 specialised portals (Super Admin, Teacher, Student), AI evaluation, context-aware prompt chaining, and dynamic question generation.",
    impact: "94% alignment with human scoring · 85% reductionzz in grading cycles across 10,000+ submissions",
    link: "https://intelliassess.ai/home",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
  },
  {
    title: "PrepHQ",
    category: "EdTech Platform",
    tech: ["Node.js", "Docker", "BullMQ", "Redis", "JWT", "PostgreSQL"],
    description: "Headless migration from monolithic WordPress to a Node.js ecosystem, transferring 100,000+ user records and learning assets with custom JWT auth and zero data leakage.",
    impact: "0.0% application degradation during full architectural migration",
    link: "https://prephq.theiotacademy.co/",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
  },
  {
    title: "The IoT Academy",
    category: "AI Workflow Automation",
    tech: ["PHP", "CodeIgniter", "MySQL", "n8n", "SMTP", "OpenAI"],
    description: "Internal backend extensions with custom n8n visual workflows and OpenAI prompt chains for automated student lead categorisation, inquiry routing, and email tracking.",
    impact: "55% faster support resolution · 40 hrs/week manual workload eliminated",
    link: "https://theiotacademy.co",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=500&fit=crop",
  },
  {
    title: "RRC Logistic CRM",
    category: "Logistics & B2B",
    tech: ["Laravel", "React", "Fuel APIs", "Twilio", "WhatsApp API"],
    description: "Global logistics hub mapping Fuel APIs for real-time fleet tracking with a dynamic pricing calculation engine and automated Twilio/WhatsApp customer notifications.",
    impact: "65% delivery notification accuracy boost · 22% client retention increase",
    link: "https://rrclogistic.com/",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
  },
  {
    title: "Cruise Sails",
    category: "Travel & Booking",
    tech: ["PHP", "REST APIs", "GDS APIs", "MySQL"],
    description: "Synchronised backend polling architecture matching Global Distribution System instances for cruise bookings, with real-time rate engines eliminating multi-vendor inventory sync delays.",
    impact: "100% overbooking anomalies mitigated · 14% booking volume increase",
    link: "https://cruisesails.com/",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&h=500&fit=crop",
  },
];

const testimonials = [
  {
    name: "Rajesh Verma",
    company: "The IoT Academy",
    role: "Founder",
    rating: 5,
    comment: "The team at AIAQUIRE didn't just write code — they understood our operational pain points and built automation that actually eliminated manual work. Their AI workflow integration cut our support load by over 40 hours every week.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Priya Mehta",
    company: "PrepHQ",
    role: "Product Lead",
    rating: 5,
    comment: "Migrating 100,000+ user records with zero downtime felt impossible — AIAQUIRE made it happen. Their ETL pipeline and architecture choices gave us confidence throughout the entire transition.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Shalia Anorvara",
    company: "IntelliAssess",
    role: "CTO",
    rating: 5,
    comment: "AIAQUIRE architected our LLM evaluation core from scratch. The RAG pipeline, prompt chaining, and multi-portal system were all delivered with strong engineering discipline and clean, maintainable code.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-grid-overlay" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={13} />
            <span>Startup Software Engineering Studio</span>
          </div>

          <h1 className="hero-heading">
            We Engineer{" "}
            <span className="hero-gradient-text">Software That</span>
            <br />
            Actually <span className="hero-gradient-text">Solves Problems</span>
          </h1>

          <p className="hero-subheading">
            AIAQUIRE is a software engineering studio that builds clean, scalable,
            and maintainable digital products — from web and mobile apps to AI
            integrations and cloud infrastructure.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-hero-primary">
              Start a Project <ArrowRight size={17} />
            </a>
            <a href="#portfolio" className="btn-hero-secondary">
              See Our Work
            </a>
          </div>

          <div className="hero-pills">
            {[
              "Clean Architecture",
              "Modern Tech Stack",
              "Quality-First",
              "Long-Term Support",
            ].map((pill) => (
              <span key={pill} className="hero-pill">
                <CheckCircle size={13} />
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-glow" />
          <div className="hero-dashboard-card">
            <div className="hero-dashboard-header">
              <div className="hero-dashboard-dots">
                <span /><span /><span />
              </div>
              <span className="hero-dashboard-title">Project Dashboard</span>
            </div>
            <div className="hero-dashboard-body">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=420&fit=crop"
                alt="Dashboard preview"
                width={700}
                height={420}
                className="hero-dashboard-img"
                priority
              />
              <div className="hero-dashboard-overlay">
                <div className="hero-chart-bars">
                  {[60, 80, 45, 90, 70, 85, 55].map((h, i) => (
                    <div key={i} className="hero-bar" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hero-float hero-float-tl">
            <div className="hero-float-icon"><CheckCircle size={18} /></div>
            <div>
              <p className="hero-float-title">Shipped to Production</p>
              <p className="hero-float-sub">IoT Payment Gateway</p>
            </div>
          </div>
          <div className="hero-float hero-float-br">
            <div className="hero-float-icon hero-float-icon-accent"><TrendingUp size={18} /></div>
            <div>
              <p className="hero-float-title">40% Less Dropped Txns</p>
              <p className="hero-float-sub">via Redis Queue Isolation</p>
            </div>
          </div>
          <div className="hero-float hero-float-bl">
            <div className="hero-float-icon hero-float-icon-fuchsia"><BarChart3 size={18} /></div>
            <div>
              <p className="hero-float-title">0% Downtime Migration</p>
              <p className="hero-float-sub">100K+ Records Transferred</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────

function About() {
  const pillars = [
    { icon: CheckCircle, label: "Clean Architecture" },
    { icon: Zap,         label: "Modern Tech Stack" },
    { icon: Server,      label: "Scalable by Design" },
    { icon: Wrench,      label: "Long-Term Support" },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-glow section-glow-right" />
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-img-glow" />
            <div className="about-image-card">
              <div className="about-image-container">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="AIAQUIRE engineering team"
                  width={800}
                  height={600}
                  className="about-image"
                />
                <div className="about-image-overlay" />
              </div>
            </div>
            <div className="about-image-badge">
              <span className="about-badge-year">
                <Sparkles size={18} />
              </span>
              <span className="about-badge-text">Quality-First Engineering</span>
            </div>
          </div>

          <div className="about-content">
            <span className="badge">About AIAQUIRE</span>
            <h2 className="section-title">
              A Small Team.{" "}
              <span className="gradient-text">Strong Engineering.</span>
            </h2>
            <p className="about-description">
              We are a focused software engineering studio — not a large agency.
              Our strength is a small, experienced team that writes clean code,
              uses modern tools, and genuinely cares about the products we build.
            </p>
            <p className="about-description about-description-secondary">
              We work closely with founders and product teams — from the first
              line of code to production deployment and ongoing support. No
              handoffs, no guesswork, no bloat.
            </p>

            <div className="about-pillars">
              {pillars.map(({ icon: Icon, label }) => (
                <div key={label} className="about-pillar">
                  <Icon size={16} className="about-pillar-icon" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Let&apos;s Work Together <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-glow section-glow-left" />
      <div className="container">
        <div className="section-header">
          <span className="badge">What We Build</span>
          <h2 className="section-title">
            End-to-End <span className="gradient-text">Software Services</span>
          </h2>
          <p className="section-description">
            From a simple API to a full SaaS platform — we cover every layer of
            the stack with engineering rigour and attention to detail.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="service-card">
                <div className="service-card-glow" />
                <div className={`service-icon-wrapper service-icon-${service.color}`}>
                  <Icon size={26} />
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <button className="service-card-btn">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── TECHNOLOGIES ─────────────────────────────────────────────────────────────

function Technologies() {
  return (
    <section id="technologies" className="section tech-section">
      <div className="section-glow section-glow-center" />
      <div className="container">
        <div className="section-header">
          <span className="badge">Tech Stack</span>
          <h2 className="section-title">
            Technologies <span className="gradient-text">We Work With</span>
          </h2>
          <p className="section-description">
            We choose tools for the right reasons — not trends. Every technology
            in our stack is something we&apos;ve used in real production systems.
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <div key={tech.name} className="tech-card">
              <div className="tech-logo-wrapper">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={44}
                  height={44}
                  className="tech-logo"
                  unoptimized
                />
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────

function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="section-glow section-glow-right" />
      <div className="container">
        <div className="section-header">
          <span className="badge">Real Work</span>
          <h2 className="section-title">
            Projects We&apos;ve <span className="gradient-text">Shipped</span>
          </h2>
          <p className="section-description">
            Every project here is real — built by our team, deployed to
            production, and solving actual problems for real clients.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((project) => (
            <div key={project.title} className="portfolio-card">
              <div className="portfolio-image-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="portfolio-image"
                />
                <div className="portfolio-image-overlay" />
                <span className="portfolio-category">{project.category}</span>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-description">{project.description}</p>
                <div className="portfolio-tech-stack">
                  {project.tech.map((t) => (
                    <span key={t} className="portfolio-tech-badge">{t}</span>
                  ))}
                </div>
                <div className="portfolio-impact">
                  <span className="portfolio-impact-dot" />
                  <span className="portfolio-impact-text">{project.impact}</span>
                </div>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-btn">
                    Visit Project <ExternalLink size={13} />
                  </a>
                ) : (
                  <span className="portfolio-btn portfolio-btn-disabled">
                    Private / NDA <ExternalLink size={13} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="section-glow section-glow-left" />
      <div className="container">
        <div className="section-header">
          <span className="badge">Client Reviews</span>
          <h2 className="section-title">
            Helping Startups{" "}
            <span className="gradient-text">Build Better Software</span>
          </h2>
          <p className="section-description">
            We&apos;re a young studio, so we let the work — and the people we&apos;ve
            worked with — speak for us.
          </p>
        </div>

        <div className="reviews-trust-bar">
          <span className="reviews-trust-label">Trusted by growing businesses</span>
          <div className="reviews-trust-divider" />
          <div className="reviews-trust-stars">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={18} className="reviews-star" />
            ))}
          </div>
          <span className="reviews-trust-note">Consistently rated 5 stars</span>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-card-glow" />
              <div className="testimonial-top">
                <div className="testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="testimonial-star" />
                  ))}
                </div>
                <Zap size={18} className="testimonial-zap" />
              </div>
              <p className="testimonial-comment">&ldquo;{t.comment}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar-wrapper">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="testimonial-avatar"
                  />
                </div>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-glow section-glow-center" />
      <div className="container">
        <div className="section-header">
          <span className="badge">Get In Touch</span>
          <h2 className="section-title">
            Have a Project <span className="gradient-text">in Mind?</span>
          </h2>
          <p className="section-description">
            Tell us what you&apos;re building. We&apos;ll respond within 24 hours with
            honest thoughts — no sales pitch, no pressure.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input id="name" type="text" className="form-input" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input id="email" type="email" className="form-input" placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input id="subject" type="text" className="form-input" placeholder="e.g. Web App Development" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Tell Us About Your Project</label>
                <textarea
                  id="message"
                  className="form-textarea"
                  rows={5}
                  placeholder="What are you building? What problem does it solve? What's your timeline?"
                />
              </div>
              <button type="submit" className="form-submit">
                Send Message <Send size={15} />
              </button>
            </form>
          </div>

          <div className="contact-info-wrapper">
            <div className="contact-info-card">
              <div className="contact-mail-icon-wrap">
                <Mail size={48} className="contact-mail-icon" />
              </div>
              <h3 className="contact-info-title">Let&apos;s Build Something Real</h3>
              <p className="contact-info-desc">
                We&apos;re a small team that takes on focused work. Reach out and
                let&apos;s have an honest conversation about your project.
              </p>
              <div className="contact-email-block">
                <span className="contact-email-label">Drop us a line</span>
                <a href="mailto:helloaiaquire@gmail.com" className="contact-email-value">
                  helloaiaquire@gmail.com
                </a>
              </div>
              <div className="contact-divider" />
              <div className="contact-promise-list">
                {[
                  "Reply within 24 hours",
                  "Free technical consultation",
                  "No commitment required",
                ].map((item) => (
                  <div key={item} className="contact-promise-item">
                    <CheckCircle size={15} className="contact-promise-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}

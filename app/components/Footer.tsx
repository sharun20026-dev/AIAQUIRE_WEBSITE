import { Mail, Globe, Share2, Link } from "lucide-react";

const footerServices = [
  "Web Development",
  "Mobile App Development",
  "AI Solutions",
  "SaaS Development",
  "UI/UX Design",
  "Cloud Solutions",
];

const footerLinks = [
  { label: "Home",         href: "#home" },
  { label: "About Us",     href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects",     href: "#portfolio" },
  { label: "Reviews",      href: "#testimonials" },
  { label: "Contact",      href: "#contact" },
];

const socialLinks = [
  { icon: Link,   href: "#", label: "LinkedIn" },
  { icon: Globe,  href: "#", label: "GitHub" },
  { icon: Share2, href: "#", label: "Instagram" },
  { icon: Mail,   href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <a href="#home" className="footer-logo">
                <span className="footer-logo-icon">A</span>
                <span className="footer-logo-text">
                  AIAQ<span className="footer-logo-accent">UIRE</span>
                </span>
              </a>
              <p className="footer-tagline">
                Building scalable digital products for growing businesses
                worldwide.
              </p>
              <div className="footer-socials">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} aria-label={label} className="footer-social-link">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-list">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-list-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-list">
                {footerServices.map((s) => (
                  <li key={s}>
                    <a href="#services" className="footer-list-link">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contact</h4>
              <div className="footer-contact-box">
                <p className="footer-contact-label">Email us at</p>
                <a href="mailto:helloaiaquire@gmail.com" className="footer-contact-email">
                  helloaiaquire@gmail.com
                </a>
                <a href="#contact" className="footer-contact-cta">
                  Get Free Quote →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} AIAQUIRE. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

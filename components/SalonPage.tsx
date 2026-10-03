"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  Sparkles,
  Star,
  User,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";

const services = [
  {
    name: "Hair Cut",
    price: "Rp85.000",
    duration: "45 min",
    description: "Potong, wash & styling.",
  },
  {
    name: "Hair Coloring",
    price: "Mulai Rp450.000",
    duration: "2–3 jam",
    description: "Coloring dengan konsultasi warna.",
  },
  {
    name: "Manicure",
    price: "Rp120.000",
    duration: "60 min",
    description: "Classic manicure & nail care.",
  },
  {
    name: "Eyelash",
    price: "Rp180.000",
    duration: "90 min",
    description: "Natural lash extension.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=80",
];

export default function SalonPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(services[0].name);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const selected = useMemo(
    () => services.find((service) => service.name === selectedService),
    [selectedService]
  );

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  function handleBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Halo Kak, saya ingin melakukan booking di Luna Beauty ✨",
      "",
      `*Nama:* ${form.name}`,
      `*No. WhatsApp:* ${form.phone}`,
      `*Layanan:* ${selectedService}`,
      `*Tanggal:* ${form.date}`,
      `*Jam:* ${form.time}`,
      selected ? `*Durasi:* ${selected.duration}` : "",
      form.note ? `*Catatan:* ${form.note}` : "",
      "",
      "Mohon konfirmasi ketersediaannya ya. Terima kasih 🙏",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="navbar">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark"><Scissors size={19} /></span>
          <span>LUNA<span className="logo-light">BEAUTY</span></span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#booking" onClick={() => setMenuOpen(false)}>Booking</a>
        </nav>

        <a href="#booking" className="nav-cta">Book Now <ArrowRight size={16} /></a>

        <button
          className="menu-button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> Beauty made personal</div>
          <h1>Feel beautiful.<br /><em>Be yourself.</em></h1>
          <p>
            A warm, modern beauty studio where every treatment is designed
            around you. Book your next self-care moment in just a few clicks.
          </p>
          <div className="hero-actions">
            <a href="#booking" className="button primary">Book Appointment <ArrowRight size={17} /></a>
            <a href="#services" className="button secondary">Explore Services</a>
          </div>
          <div className="hero-trust">
            <div className="avatars">
              <span>NA</span><span>AM</span><span>RS</span><span>+2k</span>
            </div>
            <div>
              <div className="stars"><Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" /></div>
              <small>Trusted by 2,000+ clients</small>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85"
              alt="Beauty salon client"
            />
          </div>
          <div className="floating-card">
            <span className="floating-icon"><Check size={18} /></span>
            <div><strong>Easy Booking</strong><small>via WhatsApp</small></div>
          </div>
          <div className="shape shape-one" />
          <div className="shape shape-two" />
        </div>
      </section>

      <section className="stats">
        <div><strong>2K+</strong><span>Happy Clients</span></div>
        <div><strong>4.9/5</strong><span>Client Rating</span></div>
        <div><strong>8+</strong><span>Beauty Services</span></div>
        <div><strong>5 Yrs</strong><span>Experience</span></div>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <div><div className="eyebrow">OUR SERVICES</div><h2>Little moments of <em>luxury.</em></h2></div>
          <p>From everyday essentials to special-occasion transformations, we have a treatment for every version of you.</p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.name}>
              <div className="service-number">0{index + 1}</div>
              <div className="service-icon"><Sparkles size={22} /></div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="service-meta"><strong>{service.price}</strong><span><Clock3 size={14} /> {service.duration}</span></div>
              <button onClick={() => { setSelectedService(service.name); document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" }); }}>
                Book this service <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about section">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=85" alt="Stylist working at salon" />
          <div className="about-badge"><span>5</span><small>years of<br />beauty</small></div>
        </div>
        <div className="about-copy">
          <div className="eyebrow">ABOUT LUNA BEAUTY</div>
          <h2>Your beauty, <em>your way.</em></h2>
          <p>Luna Beauty is a modern beauty studio built around one simple idea: beauty should feel personal, comfortable, and effortless.</p>
          <p>Our experienced team combines thoughtful consultation with quality products to make sure you leave feeling like the best version of yourself.</p>
          <ul>
            <li><Check size={17} /> Experienced beauty professionals</li>
            <li><Check size={17} /> Premium products & hygienic tools</li>
            <li><Check size={17} /> Personalized consultation</li>
          </ul>
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="section-heading centered">
          <div><div className="eyebrow">OUR SPACE</div><h2>A little peek <em>inside.</em></h2></div>
        </div>
        <div className="gallery">
          {gallery.map((src, i) => <img key={src} className={`gallery-img gallery-${i + 1}`} src={src} alt={`Luna Beauty salon ${i + 1}`} />)}
        </div>
      </section>

      <section id="booking" className="booking-section">
        <div className="booking-intro">
          <div className="eyebrow">READY WHEN YOU ARE</div>
          <h2>Book your<br /><em>me-time.</em></h2>
          <p>Fill in the form and we’ll open WhatsApp with your booking details already prepared. Just hit send.</p>
          <div className="booking-info">
            <div><span><MapPin size={17} /></span><div><strong>Visit us</strong><small>Jl. Contoh No. 123, Jakarta Selatan</small></div></div>
            <div><span><Clock3 size={17} /></span><div><strong>Opening hours</strong><small>Mon–Sun · 09.00–20.00</small></div></div>
            <div><span><Phone size={17} /></span><div><strong>WhatsApp</strong><small>+62 812-3456-7890</small></div></div>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleBooking}>
          <div className="form-title"><div><span>01</span><h3>Your details</h3></div><User size={21} /></div>
          <div className="form-grid">
            <label>Full name<input required value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="e.g. Lala" /></label>
            <label>WhatsApp number<input required value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="08xxxxxxxxxx" /></label>
          </div>

          <div className="form-title second"><div><span>02</span><h3>Appointment</h3></div><CalendarDays size={21} /></div>
          <label>Service
            <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
              {services.map((service) => <option key={service.name}>{service.name}</option>)}
            </select>
          </label>
          <div className="form-grid">
            <label>Date<input required type="date" value={form.date} onChange={(e) => updateField("date", e.target.value)} /></label>
            <label>Preferred time<input required type="time" value={form.time} onChange={(e) => updateField("time", e.target.value)} /></label>
          </div>
          <label>Notes <span className="optional">(optional)</span><textarea rows={3} value={form.note} onChange={(e) => updateField("note", e.target.value)} placeholder="Anything we should know?"></textarea></label>

          <button className="whatsapp-button" type="submit"><MessageCircle size={19} /> Continue to WhatsApp <ArrowRight size={17} /></button>
          {submitted && <div className="success-message"><Check size={16} /> WhatsApp opened with your booking template.</div>}
          <p className="form-note">By booking, you agree that the salon may contact you through WhatsApp to confirm your appointment.</p>
        </form>
      </section>

      <section className="testimonial">
        <div className="eyebrow">CLIENT LOVE</div>
        <blockquote>“I love how easy it is to book. The team is so warm, and I always leave feeling refreshed.”</blockquote>
        <div className="quote-author"><span>AS</span><div><strong>Amanda S.</strong><small>Regular client</small></div></div>
      </section>

      <footer>
        <div className="footer-brand"><div className="logo"><span className="logo-mark"><Scissors size={19} /></span>LUNA<span className="logo-light">BEAUTY</span></div><p>Beauty made personal.</p></div>
        <div className="footer-links"><a href="#services">Services</a><a href="#about">About</a><a href="#booking">Booking</a><a href="#gallery">Gallery</a></div>
        <div className="social"><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={18} /></a><a href={`https://wa.me/${WHATSAPP_NUMBER}`} aria-label="WhatsApp"><MessageCircle size={18} /></a></div>
        <div className="copyright">© 2026 Luna Beauty. All rights reserved.</div>
      </footer>
    </main>
  );
}
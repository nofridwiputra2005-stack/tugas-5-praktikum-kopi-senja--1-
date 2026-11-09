import { useState } from "react";
import { Navbar, Nav, Container, Carousel, Button, Card, Row, Col } from "react-bootstrap";

const slides = [
  {
    eyebrow: "SELAMAT DATANG DI KOPI SENJA",
    title: "Temukan Cerita dalam Setiap Cangkir",
    description: "Kopi pilihan, suasana nyaman, dan momen yang selalu ingin dikenang.",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1900&q=90"
  },
  {
    eyebrow: "DIBUAT DENGAN SEPENUH HATI",
    title: "Rasa yang Membuat Hari Lebih Berarti",
    description: "Biji kopi pilihan diracik oleh barista kami untuk menemani harimu.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1900&q=90"
  },
  {
    eyebrow: "TEMPAT UNTUK BERBAGI CERITA",
    title: "Santai Sejenak, Nikmati Senja",
    description: "Temukan tempat terbaik untuk bekerja, bertemu, atau sekadar bersantai.",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1900&q=90"
  }
];

const menuItems = [
  {
    name: "Es Kopi Senja", category: "Signature", price: "Rp22.000",
    description: "Espresso, susu segar, dan gula aren dengan rasa yang seimbang.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Cappuccino", category: "Coffee", price: "Rp25.000",
    description: "Perpaduan espresso dan steamed milk dengan foam yang lembut.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Caramel Latte", category: "Coffee", price: "Rp27.000",
    description: "Latte creamy dengan sentuhan manis karamel yang nikmat.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85"
  }
];

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Menu", href: "#menu" },
  { label: "Kontak", href: "#kontak" }
];

export default function App() {
  const [activeSection, setActiveSection] = useState("#beranda");
  const [expanded, setExpanded] = useState(false);

  function navigateTo(href) {
    setActiveSection(href);
    setExpanded(false);
  }

  return (
    <div className="app-shell">
      <Navbar expand="lg" className="main-navbar" expanded={expanded}
        onToggle={(nextExpanded) => setExpanded(nextExpanded)} sticky="top">
        <Container>
          <Navbar.Brand href="#beranda" onClick={() => navigateTo("#beranda")}>
            <span className="brand-mark">K</span>
            <span>KOPI<span className="brand-light">SENJA</span></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="kopi-navbar" aria-label="Buka navigasi" />
          <Navbar.Collapse id="kopi-navbar">
            <Nav className="ms-auto align-items-lg-center">
              {navItems.map((item) => (
                <Nav.Link key={item.href} href={item.href}
                  active={activeSection === item.href}
                  className={activeSection === item.href ? "active-link" : ""}
                  onClick={() => navigateTo(item.href)}>
                  {item.label}
                </Nav.Link>
              ))}
              <Button className="nav-order-button" href="#menu" onClick={() => navigateTo("#menu")}>
                Lihat Menu
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <section id="beranda" className="hero-section">
          <Carousel fade controls indicators interval={4500} pause="hover">
            {slides.map((slide) => (
              <Carousel.Item key={slide.title}>
                <div className="hero-slide" style={{
                  backgroundImage: `linear-gradient(90deg, rgba(20,14,10,.82), rgba(20,14,10,.25)), url("${slide.image}")`
                }}>
                  <Container className="hero-content">
                    <p className="eyebrow">{slide.eyebrow}</p>
                    <h1>{slide.title}</h1>
                    <p className="hero-description">{slide.description}</p>
                    <Button href="#menu" className="primary-button" onClick={() => navigateTo("#menu")}>
                      Jelajahi Menu <span aria-hidden="true">→</span>
                    </Button>
                  </Container>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="hero-bottom-note">
            <span>EST. 2024</span><span>GOOD COFFEE · GOOD MOMENTS</span>
          </div>
        </section>

        <section id="tentang" className="about-section section-padding">
          <Container><Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="about-image-wrap">
                <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
                  alt="Barista sedang menyiapkan kopi" className="about-image" />
                <div className="image-stamp"><strong>100%</strong><span>GOOD<br />MOOD</span></div>
              </div>
            </Col>
            <Col lg={6}>
              <p className="eyebrow dark-eyebrow">CERITA KAMI</p>
              <h2 className="section-title">Lebih dari Sekadar <em>Secangkir Kopi</em></h2>
              <p className="section-copy">Kopi Senja hadir sebagai tempat untuk berhenti sejenak dari kesibukan. Kami memilih biji kopi berkualitas dan meraciknya dengan sepenuh hati agar setiap kunjungan menjadi pengalaman yang menyenangkan.</p>
              <p className="section-copy">Baik untuk memulai pagi, menyelesaikan pekerjaan, maupun berbagi cerita bersama teman, selalu ada tempat untukmu di sini.</p>
              <a className="text-link" href="#kontak" onClick={() => navigateTo("#kontak")}>Kenali Kopi Senja <span>→</span></a>
            </Col>
          </Row></Container>
        </section>

        <section id="menu" className="menu-section section-padding">
          <Container>
            <div className="section-heading text-center">
              <p className="eyebrow dark-eyebrow">PILIHAN BARISTA</p>
              <h2 className="section-title">Menu <em>Favorit</em></h2>
              <p className="section-copy mx-auto">Temukan racikan favoritmu dan jadikan hari ini lebih istimewa.</p>
            </div>
            <Row className="g-4 mt-2">
              {menuItems.map((item) => (
                <Col md={6} lg={4} key={item.name}>
                  <Card className="menu-card h-100">
                    <div className="menu-image-wrap"><Card.Img variant="top" src={item.image} alt={item.name} /></div>
                    <Card.Body>
                      <div className="menu-meta"><span>{item.category}</span><strong>{item.price}</strong></div>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="quote-section">
          <Container>
            <p className="eyebrow">TAKE A BREAK, TAKE A SIP</p>
            <h2>“Hal sederhana, seperti secangkir kopi,<br className="desktop-break" /> bisa membuat hari terasa lebih baik.”</h2>
          </Container>
        </section>

        <section id="kontak" className="contact-section section-padding">
          <Container><Row className="g-4 align-items-center">
            <Col lg={7}>
              <p className="eyebrow dark-eyebrow">KUNJUNGI KAMI</p>
              <h2 className="section-title">Secangkir Kopi dan<br /><em>Suasana Hangat</em> Menunggumu.</h2>
              <p className="section-copy">Mampir dan nikmati waktu terbaikmu bersama Kopi Senja. Kami tunggu kedatanganmu!</p>
            </Col>
            <Col lg={5}>
              <div className="contact-card">
                <div><span className="contact-label">ALAMAT</span><p>Jl. Kopi No. 10, Jakarta, Indonesia</p></div>
                <div><span className="contact-label">JAM OPERASIONAL</span><p>Setiap hari · 08.00–22.00 WIB</p></div>
                <div><span className="contact-label">INSTAGRAM</span><p>@kopisenja.id</p></div>
                <Button href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="primary-button w-100">
                  Hubungi Kami <span>↗</span>
                </Button>
              </div>
            </Col>
          </Row></Container>
        </section>
      </main>

      <footer className="site-footer">
        <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div className="footer-brand">KOPI<span>SENJA</span></div>
          <p className="mb-0">© 2026 Kopi Senja. Dibuat untuk Tugas 5 Praktikum.</p>
          <a href="#beranda" onClick={() => navigateTo("#beranda")}>Kembali ke atas ↑</a>
        </Container>
      </footer>
    </div>
  );
}
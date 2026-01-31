import "./App.css";

function App() {
  return (
    <div className="App">
     
      <section
        className="hero"
        style={{ backgroundImage: "url('/truck1.jpg')" }}
      >
       
        <div className="overlay">
           <h2 className="company-name">Freight Logistics</h2>
          <h1>Professional Truck Dispatch Services Across the USA</h1>
          <p>
            We help owner-operators and carriers find high-paying loads and
            maximize profits.
          </p>
          <a href="#contact" className="btn">Contact Now</a>
        </div>
      </section>

      <section className="about section">
        <div className="container flex">
          <div className="text">
            <h2>About Us</h2>
            <p>
              We provide reliable and professional truck dispatch services for
              owner-operators and small carriers across the USA.
            </p>
            <p>
              We handle load searching, rate negotiation, broker communication,
              and all necessary paperwork with 24/7 support.
            </p>
          </div>
          <div className="image">
            <img src="/truck2.jpg" alt="Dispatch Service" />
          </div>
        </div>
      </section>

      <section className="services section light">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">Load Booking</div>
          <div className="card">Rate Negotiation</div>
          <div className="card">Route Planning</div>
          <div className="card">Broker Setup Assistance</div>
          <div className="card">24/7 Dispatch Support</div>
          <div className="card">Paperwork Management</div>
        </div>
      </section>

      <section className="why section">
        <div className="container flex">
          <div className="image">
            <img src="/truck3.jpg" alt="Truck on Road" />
          </div>
          <div className="text">
            <h2>Why Choose Us</h2>
            <ul>
              <li>Dedicated Personal Dispatcher</li>
              <li>Best Paying Loads</li>
              <li>No Forced Dispatch</li>
              <li>Transparent Communication</li>
              <li>Works With Owner-Operators & Small Fleets</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="steps section light">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step"><span>1</span><p>You send truck details</p></div>
          <div className="step"><span>2</span><p>We find & negotiate loads</p></div>
          <div className="step"><span>3</span><p>You drive, we handle the rest</p></div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <h2>Contact Us</h2>
        <p>📞 Phone: +1 234 567 890</p>
        <p>💬 WhatsApp: +1 234 567 890</p>
        <p>📧 Email: dispatch@example.com</p>
        
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Truck Dispatch Services</p>
      </footer>

    </div>
  );
}

export default App;

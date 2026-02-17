function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>We provide quality services and best solutions.</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
           
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +91 9876543210</p>
          </div>

        </div>

        <hr />

        <div className="text-center pb-3">
          © 2026 All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
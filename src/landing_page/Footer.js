import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="images/logo.svg" style={{ width: "50%" }} />
            <p>&copy; 2010 - 2024, All rights reserved.</p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="">About</a>
            <br />
            <a href="">Products</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Referral programme</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Tech Portal</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">CSR Initiatives</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="">Contact</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">Blog</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633 CDSL:
            Depository services through SEBI Registration no.: IN-DP-100-2015.
            Commodity Trading via MCX: 46025 – SEBI Registration no.:
            INZ000038238 Registered Address: #153/154, 4th Cross, Dollars
            Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru
            - 560078, Karnataka, India. For complaints write to:
            complaints@example.com or dp@example.com. Please read the Risk
            Disclosure Document prescribed by SEBI | ICF.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory: Name, PAN, Address, Mobile Number, Email ID.
            Benefits: Effective Communication, Speedy redressal of grievances.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock broker. Receive transaction
            details directly from Exchange via SMS/email at day end. KYC is a
            one-time process for trading with SEBI registered intermediaries."
            If applying to an IPO, mention your bank account number and sign the
            form to authorize auto-debit upon allotment. Funds remain in your
            account if not allotted. We do not provide stock tips or authorize
            third-party trading. Report impersonation via our support ticket.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

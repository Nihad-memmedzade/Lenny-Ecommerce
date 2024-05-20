import React from "react";
import "./footer.scss";
import footerLogo from "../../assets/images/footer/Logo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-col1">
          <div className="logoFooter">
            <img src={footerLogo} alt="" />
          </div>
          <p className="footer-col-pr-1">
            The biggest marketplace managed by Ideologist corp, which provides
            various kinds of daily needs and hobbies.
          </p>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">About Lenny</p>
          <p className="footer-col-pr">Information</p>
          <p className="footer-col-pr">Store Lactor</p>
          <p className="footer-col-pr">Bulk Purchase</p>
          <p className="footer-col-pr">Alteration Services</p>
          <p className="footer-col-pr">Gift Delivery Service</p>
          <p className="footer-col-pr">Live Station</p>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">About Lenny</p>
          <p className="footer-col-pr">FAQ</p>
          <p className="footer-col-pr">Return Policy</p>
          <p className="footer-col-pr">Privacy Policy</p>
          <p className="footer-col-pr">Accessibillity</p>
          <p className="footer-col-pr">Contact Us</p>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">Account</p>
          <p className="footer-col-pr">Membership</p>
          <p className="footer-col-pr">Address</p>
          <p className="footer-col-pr">Cupons</p>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">Contact Us</p>
          <p className="footer-col-pr">
            For Lenny Consumer
            <br />
            Complaint Services
          </p>
          <p className="footer-col-pr">
            (684) 555-0102 and
            <br />
            curtis.weaver@example.com
          </p>
          <p className="footer-col-pr">Customers Complaint Service</p>
          <p className="footer-col-pr">
            Directorate Generate of the
            <br />
            Republic of Indonesia
          </p>
          <p className="footer-col-pr">(480) 555-0103</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          COPYRIGHT © LENNY CO., LTD. ALL RIGHTS RESERVED.
        </p>
        <div className="footer-bottom-right">
            <p className="footer-bottom-right-pr1">Terms of use</p>
            <p className="footer-bottom-right-pr1">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

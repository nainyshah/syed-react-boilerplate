import React from 'react';

const FooterSection = (props) => (
  <section id="footer-section" className="bg-primary fixed-bottom">
    <div className="container">
      <div className="row">
        <div className="col text-center py-2">
          <h3>{props.footerTitle}</h3>
          <p>{props.copyRightText}</p>
        </div>
      </div>
    </div>
  </section>
);

export default FooterSection;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const HomeSection = (props) => (
  <header id="home-section">
    <div className="dark-overlay">
      <div className="home-inner container">
        <div className="row">
          <div className="col-lg-8 d-none d-lg-block">
            <h1 className="display-4">{props.subtitle}</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default HomeSection;

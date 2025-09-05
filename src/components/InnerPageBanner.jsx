import React from "react";
import { Link } from "react-router-dom";

const InnerPageBanner = ({ title, background, breadcrumb }) => {
  return (
    <div
      className="breadcumb-wrapper"
      style={{
        backgroundImage: `url(${background})`,
      }}
      data-overlay="theme"
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title" id="innerbannertitle">{title}</h1>
          {breadcrumb && (
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{breadcrumb}</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default InnerPageBanner;

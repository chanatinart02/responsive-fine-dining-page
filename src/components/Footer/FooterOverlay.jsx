import React from "react";

import "./FooterOverlay.css";

const FooterOverlay = () => (
  <div className="app__footerOverlay">
    {/* Black overlay */}
    <div className="app__footerOverlay-black"></div>
    {/* Background image */}
    <div className="app__footerOverlay-img app__bg"></div>
  </div>
);

export default FooterOverlay;

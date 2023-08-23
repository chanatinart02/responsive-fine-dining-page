import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuItem">
    <div className="app__menuItem-head">
      {/* Menu name */}
      <div className="app__menuItem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

      <div className="app__menuItem-dash"></div>

      {/* Price Menu */}
      <div className="app__menuItem-price">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {price}
        </p>
      </div>
    </div>

    {/* Ingredients */}
    <div className="app__menuItem-sub">
      <p className="p__opensans" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
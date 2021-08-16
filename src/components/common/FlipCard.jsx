import React from "react";

import "./flipCard.scss";

function FlipCard({ children }) {
  console.log(children.props);
  return <div className="card-container">{children}</div>;
}

export default FlipCard;

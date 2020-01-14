import React from "react";

export default props => {
  const { text, onClick, filter } = props;
  const className = filter == text ? "btn-primary" : "";
  return (
    <button className={className} onClick={() => onClick(text)}>
      {text}
    </button>
  );
};

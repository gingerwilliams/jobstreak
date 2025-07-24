import React from "react";

const TrashIcon = ({ width = 16, height = 16, fill = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 24 24"
  >
    <path d="M3 6h18v2H3V6zm2 3h14l-1.5 13.5h-11L5 9zm4 2v8h2v-8H9zm4 0v8h2v-8h-2zM9 4h6v2H9V4z" />
  </svg>
);

export default TrashIcon;

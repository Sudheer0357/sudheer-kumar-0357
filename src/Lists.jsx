import React from "react";

const Lists = ({ data }) => {
  const { degree, course, institute, year } = data;
  return (
    <li>
      <h5>{degree} in</h5>
      <h3>{course}</h3>
      <h5>{institute}</h5>
      <p>{year}</p>
    </li>
  );
};

export default Lists;

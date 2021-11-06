import React from 'react';

export default function Button({ name, type }) {
  const container = `btn-container ${type}-container`;
  const btnType = `btn ${type}`;

  return (
    <div className={container}>
      <button className={btnType}>{name}</button>
    </div>
  );
}

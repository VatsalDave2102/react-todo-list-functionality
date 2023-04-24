// import React from "react";

export default function AddInput() {
  return (
    <div className="input-container">
      <button className="input-button">
        <span className="material-symbols-outlined plus">add</span>
      </button>
      <input className="new-todo" type="text" placeholder="Add todo" />
    </div>
  );
}

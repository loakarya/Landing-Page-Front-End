import React from "react";

export default function Accordion(props) {
  return (
    <div className="container-accordion">
      <button
        className={
          (props.active === props.id ? "accordion-active" : "") + " accordion"
        }
        onClick={(e) => {
          props.active === props.id
            ? props.setActive("")
            : props.setActive(props.id);
        }}
      >
        {props.top}
      </button>
      <div
        className={(props.active === props.id ? "panel-active" : "") + " panel"}
      >
        <p>{props.bottom}</p>
      </div>
    </div>
  );
}

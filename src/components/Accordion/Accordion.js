import React, { useState } from "react";

export default function Accordion (props) {

    const [active, setActive] = useState("");

    function openPanel () {
        setActive(active === "" ? "panel-active" : "")
        console.log(active);
    }

    return ( 
        <div class="container-accordion">
            <button class={props.accordionClass} onClick={props.onClick}>{props.top}</button>
            {/* <div class={`panel ${active}`}>
                <p>{props.bottom}</p>
            </div> */}
            <div class={props.panelClass}>
                <p>{props.bottom}</p>
            </div>
        </div>
    );
}
import React from "react";

export default function Ads(props) {
  return (
    <div>
      <a href={props.href}>
        <img src={props.src} alt="Ad"></img>
      </a>
    </div>
  );
}

import React from "react";
import './InfoTooltip.css';

function InfoTooltip(props) {

  return (
    <section className={`info ${props.isOpen && `info_active`}`}>
      <div className="info__block ">
        <h2 className="info__title">{props.text}</h2>
        <button className="info__button" onClick={props.onClose}></button>
      </div>
    </section>
  )
}

export default InfoTooltip;

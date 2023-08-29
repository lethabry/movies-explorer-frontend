import React from "react";
import './FilterCheckbox.css'

function FilterCheckbox(props) {

  return (
    <div className="filter">
      <input type="checkbox" id="toggle" className="filter__checkbox" />
      <label htmlFor="toggle" className={`filter__label ${props.isCheckboxChecked ? `filter__label_checked` : `filter__label_unchecked`}`} onClick={props.onCheck}></label>
      <span className="filter__shorts">Короткометражки</span>
    </div >
  )
}

export default FilterCheckbox

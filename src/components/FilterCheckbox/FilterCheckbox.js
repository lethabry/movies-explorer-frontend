import React from "react";
import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div className="filter">
      <input type="checkbox" id="toggle" className="filter__checkbox" />
      <label htmlFor="toggle" className="filter__label"></label>
      <span className="filter__shorts">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox

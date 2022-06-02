import React from "react";

import "../../styles/fav.css";

const FilterList = ({ favFiltered, setFavFiltered }) => {
  return (
    <div className={favFiltered.length !== 0 ? "fav_container" : null}>
      {favFiltered.map((item, index) => {
        return (
          <h5 className="fav_item" key={index}>
            {item}
            <span
              onClick={() => {
                setFavFiltered(favFiltered.filter((word) => word !== item));
              }}
              className="remove_btn"
            >
              X
            </span>
          </h5>
        );
      })}
    </div>
  );
};

export default FilterList;

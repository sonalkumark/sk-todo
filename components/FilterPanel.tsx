import React from "react";

import FilterButton from "./FilterButton";

export default props => {
  const { onClick, filter } = props;
  return (
    <div className="pb-2">
      <FilterButton text="SHOW_ALL" filter={filter} onClick={onClick} />
      <FilterButton text="SHOW_COMPLETED" filter={filter} onClick={onClick} />
      <FilterButton text="SHOW_PENDING" filter={filter} onClick={onClick} />
    </div>
  );
};

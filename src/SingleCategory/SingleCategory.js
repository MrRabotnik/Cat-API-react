import React from "react";

import "./singleCategory.scss";

function SingleCategory({category, callCatsWithSelectedCategory, active}) {
  return (
    <div className={"singleCategoryContainer " + (active ? "active" : "")} onClick={() => callCatsWithSelectedCategory(category.id)}>
        {category.name}
    </div>
  );
}

export default SingleCategory;

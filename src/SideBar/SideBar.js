import React from 'react';

import SingleCategory from '../SingleCategory/SingleCategory';

import './sidebar.scss'

function SideBar({categories, callCatsWithSelectedCategory}) {

  return (
    <aside> 
        {
            categories.length && categories?.map((category) => {
                return <SingleCategory key={category.id} category={category} callCatsWithSelectedCategory={callCatsWithSelectedCategory} active={category.active} />
            })
        }
    </aside>
  );
}

export default SideBar;

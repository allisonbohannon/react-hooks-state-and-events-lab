import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [itemsToDisplay, setItemsToDisplay] = useState(items);

  function handleChange(e){
    const newCategory = e.target.value; 
    setSelectedCategory(newCategory)

    const updatedItems = items.filter((item) => {
      if (newCategory === 'All') {
        console.log('Add everything')
        return true; 
      } else {
        console.log(item.category === newCategory)
        return item.category === newCategory
      }
    })

    console.log(updatedItems)

    setItemsToDisplay(updatedItems)
  }

  


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList; 

import './App.css';
import Category from './Category';
import Menu from './Menu';
import items from './data';
import React from 'react';
import { useState } from 'react';
const allCategories = ['All', ... new Set(items.map((item) => item.category))];
function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems);
  }
  const menus = menuItems.map(item => {
    return (
      <Menu key={item.id} {...item} />
    )
  })
  return (
    <div className="App">
     

      <h2>Menu</h2>
      <Category categories={categories} filterItems={filterItems} />
      <div>
        {menus}
      </div>

    </div>
  );
}

export default App;

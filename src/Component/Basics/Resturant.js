import React from 'react';
import "./Style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";




const Resturant = () => {

    const [MenuData, setMenuData] = React.useState(Menu);

  const filterItem =(catagory) => {
    const updatedList = Menu.filter((curElem) =>{
        return curElem.catagory === catagory; 
    })
    setMenuData(updatedList);
  };
  return (
    <>
        <nav className="navbar">
            <div className="button-grp">
              <button className="btn-group__item" onClick={() => filterItem('Breakfast')}>Breakfast</button>
              <button className="btn-group__item" onClick={() => filterItem('Lunch')}>Lunch</button>
              <button className="btn-group__item" onClick={() => filterItem('Dinner')}>Dinner</button>
              <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button>
            </div>
        </nav>
        <MenuCard MenuData={MenuData} />
    </>
  );
};

export default Resturant;   
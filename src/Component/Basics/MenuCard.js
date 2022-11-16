import React from 'react'

const menuCard = ({MenuData}) => {
    console.log(MenuData);
  return (
    <>
        <div className="menu-card">
        {MenuData.map((curElem) =>{
            return(
                <>
                
                <div className="item-card" key={curElem.id}>
                <div className="card-box">
                    <span className="card-num">{curElem.id}</span>
            
                    <h1 className="dish-name">{curElem.name}</h1>
                    <span className="dish-catagory">{curElem.catagory}</span>
                    <br/>
                    <span className="description-dish">{curElem.description}</span>
                </div>
                <img src={curElem.image} alt="Images" className='dish-img' />
                <div src="/" className="order-dish">Order Now</div>
        
            </div>

        
        </>
        );
    })}
    </div>
        
    </>
  )
}

export default menuCard
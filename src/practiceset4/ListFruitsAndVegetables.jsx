import React, { useState } from 'react'

const ListFruitsAndVegetables = ({itemList}) => {
    const [data, SetData] = useState(itemList);
  return (
    <div>
        <button style={{padding:"10px", fontSize:"18px", margin:"5px", }} onClick={()=>SetData(itemList)}>All</button>
        <button style={{padding:"10px", fontSize:"18px", margin:"5px", }} onClick={()=>SetData(itemList.filter(({category})=> category === 'Fruit'))}>Fruits</button>
        <button style={{padding:"10px", fontSize:"18px", margin:"5px", }} onClick={()=>SetData(itemList.filter(({category})=> category === 'Vegetable'))}>Vegetables</button>
        <ul>
            {
                data.map(({name,id, category})=><li key={id} style={{color: category === "Fruit" ? "orange" : "green"}}>{name}</li>)
            }
        </ul>
    </div>
  )
}

export default ListFruitsAndVegetables;
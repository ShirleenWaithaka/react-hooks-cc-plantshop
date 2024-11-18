import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants,onDelete,onUpdatedPrice}) {
  return (
    <ul className="cards">
      {plants.map((plants)=>(
        <PlantCard 
        key={plants.id}
        id={plants.id}
        name={plants.name}
        price={plants.price}
        imageUrl={plants.image}
        onDelete={onDelete}
        onUpdatedPrice={onUpdatedPrice}/>
      ))}
    </ul>
  );
}

export default PlantList;

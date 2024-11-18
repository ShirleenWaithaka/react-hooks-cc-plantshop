import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants]= useState([]);
  const [searchTerm,setSearchTerm] =useState("");
  useEffect (()=>{
    fetch("http://localhost:6001/plants")
    .then ((response)=>response.json())
    .then ((data)=>setPlants(data))
  },[]);
  const handleAddPlant =(newPlant)=>{
    setPlants([...plants,newPlant]);
  };
  const handleSearch = (term)=>{
    setSearchTerm(term);
  };
  const handleUpdatePrice =(updatedPlant)=>{
  setPlants(plants .map((plants)=>
    plants.id===updatedPlant.id?updatedPlant:plants));
  };
  const handleDelete=(id)=>{
    setPlants (plants.filter((plants)=>plants.id !==id));
  };
  const filteredPlants = plants.filter((plants)=>
  plants.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onSearch={handleSearch}/>
      <PlantList 
      plants={filteredPlants}
      onDelete={handleDelete}
      onUpdatedPrice={handleUpdatePrice}/>
    </main>
  );
}

export default PlantPage;

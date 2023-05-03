import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExperApp = () => {
  const [categories, setCategories] = useState(["Overlord"]);
  const onAddCategoy = (newCategory) => {
    //agregar valores al array existente
    if (!categories.includes(newCategory)) {
      setCategories([newCategory, ...categories]);
    }
  };

  return (
    <>
      {/**Titulo */}
      <h1>GifExpertApp</h1>
      {/**Input */}
      <AddCategory onNewValue={(value) => onAddCategoy(value)} />
      {/**Listado_Gif*/}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

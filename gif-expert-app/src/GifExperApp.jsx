import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

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
      <h1>GifExpertApp</h1>
      <AddCategory onNewValue={(value) => onAddCategoy(value)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

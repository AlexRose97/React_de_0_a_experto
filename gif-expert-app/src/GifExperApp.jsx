import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExperApp = () => {
  const [categories, setCategories] = useState(["Overlord", "Dragon Ball"]);
  const onAddCategoy = (newCategory) => {
    //agregar valores al array existente
    if (!categories.includes(newCategory)) {
      setCategories([newCategory, ...categories]);
    }
  };

  return (
    <>
      {/**7FyFGat9oJjnIQ3vVN9g6fFAUd95Wn4V*/}
      {/**Titulo */}
      <h1>GifExpertApp</h1>
      {/**Input */}
      <AddCategory onNewValue={(value) => onAddCategoy(value)} />
      {/**Listado_Gif*/}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/**Item_Listado */}
    </>
  );
};

import { useState } from "react";

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    if (inputValue.trim().length > 1) {
      onNewValue(inputValue.trim());
      setInputValue("");//reiniciar el input
    }
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      ></input>
    </form>
  );
};

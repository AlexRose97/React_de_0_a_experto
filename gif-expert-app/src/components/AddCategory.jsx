import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) { return; }
    setInputValue("");//reiniciar el input
    onNewValue(inputValue.trim());
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



AddCategory.propTypes = {
  onNewValue: PropTypes.func.isRequired,
}
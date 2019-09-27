import React from "react";

const Dropdown = ({ category, setCategory }) => {
  console.log(category);
  React.useEffect(
    () => {
      const updateCategory = event => setCategory(event.target.value);
      const dropdown = document.querySelector("#Dropdown");
      dropdown.addEventListener("change", updateCategory);
      return () => dropdown.removeEventListener("change", updateCategory);
    },
    [setCategory]
  );
  return (
    <div className="dropdown-container">
      <label htmlFor="Dropdown" className="dropdown-label">
        Select a catergory to get started{" "}
      </label>
      <select id="Dropdown" className="dropdown">
        <option value="9">General Knowledge</option>
        <option value="10">Books</option>
        <option value="11">Film</option>
        <option value="12">Music</option>
        <option value="13">Theatre & Musicals</option>
        <option value="14">Television</option>
        <option value="17">Science & Nature</option>
        <option value="18">Computers</option>
        <option value="19">Mathematics</option>
        <option value="20">Mythology</option>
        <option value="21">Sports</option>
        <option value="22">Geography</option>
        <option value="23">History</option>
        <option value="24">Politics</option>
        <option value="26">Celebrities</option>
      </select>
    </div>
  );
};

export default Dropdown;

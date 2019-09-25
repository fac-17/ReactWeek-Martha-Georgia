import React from "react";

const Dropdown = () => {
  const [category, setCategory] = React.useState(null);
  // React.useEffect(() => {});
  return (
    <div>
    <label htmlFor="Dropdown">Select a catergory to get started
      <select id="Dropdown">
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
      </label>
    </div>
  );
};

export default Dropdown;

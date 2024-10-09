import React from 'react';

const CategorySelect = ({ isOpen, onClose, CATEGORY, handleCategoryChange}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Select Photo Type</h3>
        <select value={CATEGORY} onChange={handleCategoryChange}>
            <option value="sports">Sports</option>
            <option value="work">work</option>
            <option value="animals">Animals</option>
            <option value="backgrounds">Backgrounds</option>
            <option value="fashion">Fashion</option>
            <option value="nature">Nature</option>
            <option value="science">Science</option>
            <option value="education">Education</option>
            <option value="feelings">Feelings</option>
            <option value="health">Health</option>
            <option value="people">People</option>
            <option value="religion">Religion</option>
            <option value="places">Places</option>
            <option value="industry">Industry</option>
            <option value="computer">Computer</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="travel">Travel</option>
            <option value="buildings">Buildings</option>
            <option value="business">Business</option>
            <option value="music">Music</option>
        </select>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CategorySelect;
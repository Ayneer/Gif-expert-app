import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [newCategory, setNewCategory] = useState('');

    const handleOnSubmit = e => {
        e.preventDefault();
        if(!newCategory.trim()){
            alert('Debe escribir una categoria');
            setNewCategory('');
            return;
        }
        setCategories(cats => [newCategory, ...cats]);
        setNewCategory('');
    }
    const handleCategoryInputChange = e => setNewCategory(e.target.value);

    return (
        <form onSubmit={handleOnSubmit}>
            <input type='text' id='input_category' value={newCategory} onChange={handleCategoryInputChange} placeholder='My new category name...' />
            <button type='submit' id='button_add_category'>Add category</button>
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;

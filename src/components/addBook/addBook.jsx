import React from 'react';

const AddBook = () => {
    return (
        <form onSubmit="">
            <label>
                Titre:
                <input type="text" name="titre" value="" onChange="" required />
            </label>
            <label>
                Stock:
                <input type="number" name="stock" value="" onChange="" required />
            </label>
            <button type="submit">Ajouter Livre</button>
        </form>
    );
};

export default AddBook;

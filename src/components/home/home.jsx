import React from 'react';
import { LivreProvider, useLivreContext } from "../livresContext/livreContext.jsx";

const Home = () => {
    const { livres, dispatch } = useLivreContext();

    const handleAdd = (id) => {
        dispatch({ type: 'AJOUTER', payload: id });
    };

    const handleRemove = (id) => {
        dispatch({ type: 'ENLEVER', payload: id });
    };

    return (
        <div>
            <h1>Liste des Livres</h1>
            {livres.map((livre) => (
                <div key={livre.id} style={{ backgroundColor: livre.stock === 0 ? 'gray' : 'lightblue' }}>
                    <p>{livre.titre}</p>
                    <p>Stock: {livre.stock}</p>
                    <button onClick={() => handleAdd(livre.id)}>+</button>
                    <button onClick={() => handleRemove(livre.id)}>-</button>
                </div>
            ))}
        </div>
    );
};

const HomeWithProvider = () => {
    return (
        <LivreProvider>
            <Home/>
        </LivreProvider>
    );
};

export default HomeWithProvider;

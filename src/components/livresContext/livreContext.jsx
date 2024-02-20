import React, { createContext, useReducer, useContext } from "react";

const LivreContext = createContext();

const livresReducer = (state, action) => {
    switch (action.type) {
        case 'AJOUTER':
            return state.map((livre) =>
                livre.id === action.payload ? { ...livre, stock: livre.stock + 1 } : livre
            );
        case 'ENLEVER':
            return state.map((livre) =>
                livre.id === action.payload ? { ...livre, stock: Math.max(0, livre.stock - 1) } : livre
            );
        case 'AJOUTER_LIVRE':
            return [...state, { id: state.length + 1, ...action.payload, stock: parseInt(action.payload.stock, 10) }];
        default:
            return state;
    }
};

export const LivreProvider = ({ children }) => {
    const [livres, dispatch] = useReducer(livresReducer, [
        { id: 1, titre: 'Livre 1', stock: 5 },
        { id: 2, titre: 'Livre 2', stock: 0 },
    ]);

    return (
        <LivreContext.Provider value={{ livres, dispatch }}>
            {children}
        </LivreContext.Provider>
    );
};

export const useLivreContext = () => {
    return useContext(LivreContext);
};

export default LivreContext;

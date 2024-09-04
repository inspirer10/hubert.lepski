import React, { createContext, useState, useContext } from 'react';

const CursorContext = createContext();

export const useCursor = () => useContext(CursorContext);

export const CursorProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    return (
        <CursorContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </CursorContext.Provider>
    );
};

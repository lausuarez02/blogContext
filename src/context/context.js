import {createContext, useState} from 'react';

export const AppContext = createContext();

export function AppWrapper({ children}){
    const [fetching, setFetching] = useState([{}])

    return(
        <AppContext.Provider value={{fetching, setFetching}}>
            {children}
        </AppContext.Provider>
    );
}
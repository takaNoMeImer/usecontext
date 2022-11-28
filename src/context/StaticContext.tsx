/* This is the global context */
import { createContext, useState } from "react";
import { language } from "../Languages";
import { languageItem } from "../types";

interface DataProviderProps {
    children: JSX.Element | JSX.Element[]
}

/* Test create context from list language array */
export const StaticContext = createContext({})

/* Retornar provider */
export const DataProvider = ({children}:DataProviderProps) => {

    const [lenguajes, setLenguajes] = useState<Array<languageItem>>(language);
    const [listItem, setListItem] = useState<Array<languageItem>>([]);

    const deleteAll = () => {
        setLenguajes([]);
        setListItem([])
    }

    return (
        
        <StaticContext.Provider value={{lenguajes, setLenguajes, deleteAll, listItem, setListItem}}>
            { children }
        </StaticContext.Provider>
    )
}
import { languageItem } from '../types'
import { useContext, useState } from "react";
import { StaticContext } from '../context/StaticContext';

/* This is the Custom Hook */
export function useContainer() {

    const [item, setItem] = useState<languageItem>();
    const [listItem, setListItem] = useState<Array<languageItem>>([]);
    const { lenguajes, setLenguajes } = useContext( StaticContext )

    const deleteAll = () => {
        setLenguajes([]);
        setListItem([]);
    }

    const testItem = (element: languageItem) => {
        console.log(element);
        setLenguajes([...lenguajes, element]);
    }

    const recibirItem = (item: languageItem) => {
        setItem(item);
        setListItem([...listItem, item]);
    }

    const deleteElement = (item: languageItem) => {
        setListItem(listItem.filter(e => e.name != item.name));
    }

    return {
        lenguajes, listItem,
        deleteAll, testItem, recibirItem, deleteElement
    }
}
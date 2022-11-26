import { languageItem } from '../types'
import { useState } from "react";
import { language } from "../Languages";

export function useContainer() {
    const [lenguajes, setLenguajes] = useState<Array<languageItem>>(language);
    const [item, setItem] = useState<languageItem>();
    const [listItem, setListItem] = useState<Array<languageItem>>([]);

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
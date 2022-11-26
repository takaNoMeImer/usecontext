interface Item {
    item: {
        id: number,
        name: string,
        description: string,
        poster: string
    };
}

export type languageItem = Item['item']
export type FormElement = FormEvent<HTMLFormElement>
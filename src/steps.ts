

export interface MDItem {
    id: string;
    title: string;
    markdown: string;
    next: string[]
}

export type MDItemsMap = Record<string, MDItem>
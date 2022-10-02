import { MDItem, MDItemsMap } from './../steps';
import mdjson from './md.json';

export const markdownList: MDItem[] = mdjson

export const markdownMap = () => {
    const mm: MDItemsMap = {};
    markdownList.forEach(m => {
        mm[m.id] = m;
    })
    return mm;
}
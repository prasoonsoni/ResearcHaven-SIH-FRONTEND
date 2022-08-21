import {createContext} from 'react';

const DocumentContext = createContext();
const DocumentProvider = DocumentContext.Provider;
const DocumentConsumer = DocumentContext.Consumer;

export {DocumentProvider, DocumentConsumer};
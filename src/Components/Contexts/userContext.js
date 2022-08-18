import {createContext} from 'react';

const UserContext = createContext();
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;


export {UserProvider, UserConsumer};
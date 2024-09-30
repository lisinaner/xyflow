import { createContext } from 'react';

import { createStore } from '../store';
//根据react context 提供给其他程序的上下文
const StoreContext = createContext<ReturnType<typeof createStore> | null>(null);

export const Provider = StoreContext.Provider;
export default StoreContext;

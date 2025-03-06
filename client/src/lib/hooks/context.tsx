import { createContext, useContext, useReducer } from 'react';
import type { Action, AppState } from '../../types/context';
import { appReducer } from './reducers';

const initialState: AppState = {
  programs: [],
  loading: false,
  error: null,
};

const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> } | undefined>(
  undefined,
);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};

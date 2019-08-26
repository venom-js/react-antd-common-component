import React, { useReducer, Reducer } from 'react';

export function useStateReducer<T = any>(initState: T) {
  type Dispatch = Partial<T>;
  const reducer = (origin: T, payload: Dispatch): T => ({
    ...origin,
    ...payload
  });
  const [state, setState] = useReducer<Reducer<T, Dispatch>>(
    reducer,
    initState
  );
  return [state, setState] as [T, (state: Dispatch) => void];
}

export function useCreateContext<T>() {
  interface ContextProps {
    state: T;
    setState: (state: Partial<T>) => void;
  }
  const Context = React.createContext<ContextProps>(null);
  return Context;
}

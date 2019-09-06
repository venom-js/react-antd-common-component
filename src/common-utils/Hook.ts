import React, { useReducer, Reducer } from 'react';

interface ContextProps<T> {
  state: T;
  setState: (state: Partial<T>) => void;
}

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
  const Context = React.createContext<ContextProps<T>>(null);
  return Context;
}

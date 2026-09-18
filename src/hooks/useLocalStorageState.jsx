import { useState } from "react";

export function useLocalStorageState(key, initialValue) {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setLocalStorageState = (Value) => {
    setState((prevState) => {
      const newState =
        typeof Value === "function" ? Value(prevState) : Value;

      localStorage.setItem(key, JSON.stringify(newState));

      return newState;
    });
  };

  return [state, setLocalStorageState];
}


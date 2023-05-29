import { createContext, useState } from "react";

export const CategContext = createContext();

export const ModeContext = createContext();

export function ProviderMode({ children }) {
  const [ mode, setMode ] = useState(true);
  return(
    <ModeContext.Provider value={{ mode, setMode }}>
      { children }
    </ModeContext.Provider>
  )
};

export function CategProvider({ children }) {
  const [ date, setDate ] = useState(null);
  const [ num, setNum ] = useState(0);
  return(
    <CategContext.Provider value={{date, setDate, num, setNum}}>
      {children}
    </CategContext.Provider>
  )
};


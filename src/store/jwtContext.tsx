"use client"
import TJWTContext from "@/types/jwtContextType";
import { createContext, useContext, useState } from "react";

export const JWTContext = createContext<TJWTContext>({
  jwtToken: "",
  updateJWTToken: (jwtToken: string): void => {},
});

export function useJwtContext() {
  const context = useContext(JWTContext);

  return context;
}

export function JwtContextProvider({ children }: any) {
  const [jwtToken, setJwtToken] = useState("");
  const updateJWTToken = (jwtToken: string) => {
    setJwtToken(jwtToken);
  };
  return (
    <JWTContext.Provider
      value={{ jwtToken: jwtToken, updateJWTToken: updateJWTToken }}
    >
      {children}
    </JWTContext.Provider>
  );
}

"use client";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

export type ErrorState = {
  error: Error | null;
  showError: boolean;
};

export type ErrorAction =
  | {
      type: "SHOW_ERROR";
      error: Error;
    }
  | { type: "HIDE_ERROR" };

const initialErrorState: ErrorState = {
  error: null,
  showError: false,
};

const errorReducer = (state: ErrorState, action: ErrorAction): ErrorState => {
  switch (action.type) {
    case "SHOW_ERROR":
      return { ...state, error: action.error, showError: true };
    case "HIDE_ERROR":
      return { ...state, showError: false };
    default:
      return state;
  }
};

export const ErrorContext = createContext<
  | {
      state: ErrorState;
      dispatch: Dispatch<ErrorAction>;
    }
  | undefined
>(undefined);

export function ErrorContextProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [state, dispatch] = useReducer(errorReducer, initialErrorState);
  return (
    <ErrorContext.Provider value={{ state, dispatch }}>
      {children}
    </ErrorContext.Provider>
  );
}

export const useGlobalErrorContext = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("Globa Error Context is not available");
  }
  return context;
};

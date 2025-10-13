"use client";

import { createContext, useContext, useState } from "react";

type CursorType = "default" | "hover" | "label";

interface CursorContextProps {
  type: CursorType;
  text: string;
  setCursor: (type: CursorType, text?: string) => void;
}

const CursorContext = createContext<CursorContextProps>({
  type: "default",
  text: "",
  setCursor: () => {},
});

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [type, setType] = useState<CursorType>("default");
  const [text, setText] = useState("");

  const setCursor = (t: CursorType, txt?: string) => {
    setType(t);
    setText(txt || "");
  };

  return (
    <CursorContext.Provider value={{ type, text, setCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);

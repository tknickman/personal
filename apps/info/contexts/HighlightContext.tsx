import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { LinkItem } from "../config";

type Item = LinkItem | null;

type HighlightContext = {
  item: Item;
  setItem: Dispatch<SetStateAction<Item>>;
  borderColorClassName: string;
};

const HighlightContext = createContext<HighlightContext>({
  item: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setItem: () => {},
  borderColorClassName: "border-primary",
});

function HighlightRouting({ children }: { children: ReactNode }) {
  const [selectedItem, setSelectedItem] = useState<Item>(null);
  const borderColorClassName = selectedItem
    ? selectedItem.borderColor
    : "border-primary";

  return (
    <HighlightContext.Provider
      value={{
        item: selectedItem,
        setItem: setSelectedItem,
        borderColorClassName,
      }}
    >
      {children}
    </HighlightContext.Provider>
  );
}

function useHighlight(): HighlightContext {
  const context = useContext(HighlightContext);
  if (context === undefined) {
    throw new Error("useHighlight must be used within a HighlightProvider");
  }

  return context;
}

export { HighlightContext, useHighlight };
export default HighlightRouting;

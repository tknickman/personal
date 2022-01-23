import { createContext, ReactNode, useContext, useState } from "react";
import { useInterval } from "@tek/utils";
import tailwind from "../tailwind.config";

const context = createContext({});

const ADJECTIVES = ["interesting", "fun", "creative", "innovative"];
const items = [
  {
    name: "SurveyMonkey",
    color: tailwind.theme.extend.colors.surveymonkey,
    text: "text-surveymonkey",
    decoration: "decoration-surveymonkey",
    border: "border-surveymonkey",
    background: "bg-surveymonkey",
    adjectives: ADJECTIVES,
    verb: "built",
  },
  {
    name: "Under Armour",
    color: tailwind.theme.extend.colors.underarmour,
    text: "text-underarmour",
    decoration: "decoration-underarmour",
    border: "border-underarmour",
    background: "bg-underarmour",
    adjectives: ADJECTIVES,
    verb: "built",
  },
  {
    name: "Momentive.ai",
    color: tailwind.theme.extend.colors.momentive,
    text: "text-momentive",
    decoration: "decoration-momentive",
    border: "border-momentive",
    background: "bg-momentive",
    adjectives: ADJECTIVES,
    verb: "build",
  },
];

const { Provider, Consumer } = context;

const CompanyContext = ({ children }: { children: ReactNode }) => {
  const [idx, setIdx] = useState<number>(0);
  const [adjIdx, setAdjIdx] = useState<number>(0);
  const [paused, setPaused] = useState(false);

  useInterval(() => {
    if (!paused) {
      setIdx((prevIdx) => (prevIdx + 1 > items.length - 1 ? 0 : prevIdx + 1));
      setAdjIdx((prevIdx) =>
        prevIdx + 1 > ADJECTIVES.length - 1 ? 0 : prevIdx + 1
      );
    }
  }, 3500);

  const company = items[idx];
  const adj = company.adjectives[adjIdx];

  return (
    <Provider value={{ company, adj, setPaused, paused }}>{children}</Provider>
  );
};

const useCompany = () => useContext(context);

export { Provider, Consumer, CompanyContext, useCompany };

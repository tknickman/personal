import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useInterval } from "@tek/utils";
import tailwind from "../../tailwind.config";

export type Company = {
  name: string;
  color: string;
  text: string;
  decoration: string;
  border: string;
  background: string;
  fill: string;
  adjectives: string[];
  verb: string;
};

type CompanyContext = {
  company: Company;
  adjective: string;
  setPaused: Dispatch<SetStateAction<boolean>>;
  paused: boolean;
};

const ADJECTIVES = ["interesting", "fun", "creative", "innovative"];

const items: Array<Company> = [
  {
    name: "SurveyMonkey",
    color: tailwind.theme.extend.colors.surveymonkey,
    text: "text-surveymonkey",
    decoration: "decoration-surveymonkey",
    border: "border-surveymonkey",
    background: "bg-surveymonkey",
    fill: "fill-surveymonkey",
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
    fill: "fill-underarmour",
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
    fill: "fill-momentive",
    adjectives: ADJECTIVES,
    verb: "build",
  },
];

export const defaultState = {
  company: items[0],
  adjective: ADJECTIVES[0],
  setPaused: () => {},
  paused: false,
};

const context = createContext<CompanyContext>(defaultState);

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
  const adjective = company.adjectives[adjIdx];

  return (
    <Provider value={{ company, adjective, setPaused, paused }}>
      {children}
    </Provider>
  );
};

const useCompany = () => useContext(context);

export { Provider, Consumer, CompanyContext, useCompany };

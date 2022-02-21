import { ReactNode } from "react";
import { Provider, defaultState } from ".";

const MockCompanyProvider = ({ children }: { children: ReactNode }) => (
  <Provider value={defaultState}>{children}</Provider>
);

export default MockCompanyProvider;

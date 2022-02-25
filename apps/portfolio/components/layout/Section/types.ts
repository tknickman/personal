import { ReactNode } from "react";

type SectionAlign = "right" | "left" | "center";
type SectionBackground = "default" | "accent";

export type SectionProps = {
  id?: string;
  number: string;
  titleSolid: string;
  children: ReactNode;
  titleOutline?: string;
  singleLine?: boolean;
  fontSize?: string;
  animate?: boolean;
  background?: SectionBackground;
  align?: SectionAlign;
};

export type HeadingProps = Omit<SectionProps, "id" | "children">;

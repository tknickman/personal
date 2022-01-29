export type DataType = Array<{
  company: string;
  Intern?: number;
  "Software Engineer"?: number;
  "Senior Software Engineer"?: number;
  "Engineering Manager"?: number;
  "Lead Software Engineer"?: number;
}>;

const colors = {
  InternColor: "hsl(23, 70%, 50%)",
  "Software EngineerColor": "hsl(0, 70%, 50%)",
  "Senior Software EngineerColor": "hsl(31, 70%, 50%)",
  "Engineering ManagerColor": "hsl(31, 70%, 50%)",
};

const data = [
  {
    company: "SurveyMonkey",
    Intern: 4,
    "Software Engineer": 28,
    "Senior Software Engineer": 24,
    "Engineering Manager": 9,
    "Lead Software Engineer": 0,
  },
  {
    company: "Under Armour",
    Intern: 0,
    "Software Engineer": 0,
    "Senior Software Engineer": 3,
    "Engineering Manager": 0,
    "Lead Software Engineer": 10,
  },
  {
    company: "Momentive.ai",
    Intern: 0,
    "Software Engineer": 0,
    "Senior Software Engineer": 48,
    "Engineering Manager": 0,
    "Lead Software Engineer": 0,
  },
];

export default data;

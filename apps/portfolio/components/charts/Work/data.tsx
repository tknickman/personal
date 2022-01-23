export type DataType = Array<{
  id: string;
  label: string;
  value: number;
  color: string;
}>;

const data = [
  {
    id: "Remote",
    label: "Remote",
    value: 4,
    color: "hsl(72, 70%, 50%)",
  },
  {
    id: "Office",
    label: "Office",
    value: 5,
    color: "hsl(359, 70%, 50%)",
  },
];

export default data;

import colors from "tailwindcss/colors";

export type DataType = Array<{
  id: string;
  color: string;
  data: Array<{ x: number; y: number | null }>;
}>;

const data = [
  {
    id: "Python",
    color: colors.yellow["500"],
    data: [
      {
        x: 2009,
        y: 0,
      },
      {
        x: 2010,
        y: 0,
      },
      {
        x: 2011,
        y: 2,
      },
      {
        x: 2012,
        y: 5,
      },
      {
        x: 2013,
        y: 6,
      },
      {
        x: 2014,
        y: 6,
      },
      {
        x: 2015,
        y: 8,
      },
      {
        x: 2016,
        y: 9,
      },
      {
        x: 2017,
        y: 9,
      },
      {
        x: 2018,
        y: 7,
      },
      {
        x: 2019,
        y: 6,
      },
      {
        x: 2020,
        y: 5,
      },
      {
        x: 2021,
        y: 5,
      },
    ],
  },
  {
    id: "HTML/CSS",
    color: colors.pink["500"],
    data: [
      {
        x: 2009,
        y: 1,
      },
      {
        x: 2010,
        y: 3,
      },
      {
        x: 2011,
        y: 3,
      },
      {
        x: 2012,
        y: 4,
      },
      {
        x: 2013,
        y: 4,
      },
      {
        x: 2014,
        y: 4,
      },
      {
        x: 2015,
        y: 6,
      },
      {
        x: 2016,
        y: 6,
      },
      {
        x: 2017,
        y: 7,
      },
      {
        x: 2018,
        y: 9,
      },
      {
        x: 2019,
        y: 10,
      },
      {
        x: 2020,
        y: 10,
      },
      {
        x: 2021,
        y: 10,
      },
    ],
  },
  {
    id: "Javascript",
    color: colors.green["500"],
    data: [
      {
        x: 2009,
        y: 1,
      },
      {
        x: 2010,
        y: 1,
      },
      {
        x: 2011,
        y: 2,
      },
      {
        x: 2012,
        y: 3,
      },
      {
        x: 2013,
        y: 4,
      },
      {
        x: 2014,
        y: 4,
      },
      {
        x: 2015,
        y: 5,
      },
      {
        x: 2016,
        y: 5,
      },
      {
        x: 2017,
        y: 7,
      },
      {
        x: 2018,
        y: 8,
      },
      {
        x: 2019,
        y: 8,
      },
      {
        x: 2020,
        y: 9,
      },
      {
        x: 2021,
        y: 9,
      },
    ],
  },
  {
    id: "SQL",
    color: colors.red["500"],
    data: [
      {
        x: 2009,
        y: null,
      },
      {
        x: 2010,
        y: 1,
      },
      {
        x: 2011,
        y: 1,
      },
      {
        x: 2012,
        y: 1,
      },
      {
        x: 2013,
        y: 1,
      },
      {
        x: 2014,
        y: 4,
      },
      {
        x: 2015,
        y: 6,
      },
      {
        x: 2016,
        y: 7,
      },
      {
        x: 2017,
        y: 7,
      },
      {
        x: 2018,
        y: 5,
      },
      {
        x: 2019,
        y: 4,
      },
      {
        x: 2020,
        y: 6,
      },
      {
        x: 2021,
        y: 7,
      },
    ],
  },
  {
    id: "Typescript",
    color: colors.purple["500"],
    data: [
      {
        x: 2009,
        y: null,
      },
      {
        x: 2010,
        y: null,
      },
      {
        x: 2011,
        y: null,
      },
      {
        x: 2012,
        y: null,
      },
      {
        x: 2013,
        y: null,
      },
      {
        x: 2014,
        y: null,
      },
      {
        x: 2015,
        y: null,
      },
      {
        x: 2016,
        y: null,
      },
      {
        x: 2017,
        y: 3,
      },
      {
        x: 2018,
        y: 4,
      },
      {
        x: 2019,
        y: 6,
      },
      {
        x: 2020,
        y: 7,
      },
      {
        x: 2021,
        y: 8,
      },
    ],
  },
];

export default data;

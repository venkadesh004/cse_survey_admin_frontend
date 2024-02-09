export const pieChartColors = [
  ["#8BC1F7", "#519DE9", "#06C", "#004B95", "#002F5D"],
  ["#BDE2B9", "#7CC674", "#4CB140", "#38812F", "#23511E"],
  ["#A2D9D9", "#73C5C5", "#009596", "#005F60", "#003737"],
  ["#B2B0EA", "#8481DD", "#5752D1", "#3C3D99", "#2A265F"],
  ["#F9E0A2", "#F6D173", "#F4C145", "#F0AB00", "#C58C00"],
  ["#F4B678", "#EF9234", "#EC7A08", "#C46100", "#8F4700"],
  ["#C9190B", "#A30000", "#7D1007", "#470000", "#2C0000"],
  ["#F0F0F0", "#D2D2D2", "#B8BBBE", "#8A8D90", "#6A6E73"],
];

export const COData = [
  {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "CO1 Report",
        data: [],
        backgroundColor: pieChartColors[0],
      },
    ],
  },
  {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "CO2 Report",
        data: [],
        backgroundColor: pieChartColors[1],
      },
    ],
  },
  {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "CO3 Report",
        data: [],
        backgroundColor: pieChartColors[2],
      },
    ],
  },
  {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "CO4 Report",
        data: [],
        backgroundColor: pieChartColors[3],
      },
    ],
  },
  {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "CO5 Report",
        data: [],
        backgroundColor: pieChartColors[4],
      },
    ],
  },
  {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "CO6 Report",
        data: [],
        backgroundColor: pieChartColors[5],
      },
    ],
  },
  {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "CO7 Report",
        data: [],
        backgroundColor: pieChartColors[6],
      },
    ],
  },
  {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "CO8 Report",
        data: [],
        backgroundColor: pieChartColors[7],
      },
    ],
  },
];

export const tools = {
  labels: ["Appropriate", "Not Appropriate", "Changes Required"],
  datasets: [
    {
      label: "Appropriateness of the assessment tools used",
      data: [],
      backgroundColor: pieChartColors[2].slice(0, 3),
    },
  ],
};

export const hosting = {
  labels: ["Excellent", "Good", "Average", "Poor"],
  datasets: [
    {
      label: "Content hosting tools rating",
      data: [],
      backgroundColor: pieChartColors[1].slice(0, 4),
    },
  ],
};

export const rating = {
  labels: ["Excellent", "Good", "Average", "Poor"],
  datasets: [
    {
      label: "Lecture Rating",
      data: [],
      backgroundColor: pieChartColors[4].slice(0, 4),
    },
  ],
};

export const books = {
  labels: ["Available", "Not Available", "Copies Required"],
  datasets: [
    {
      label: "Availability of text/reference books",
      data: [],
      backgroundColor: pieChartColors[3].slice(0, 3),
    },
  ],
};
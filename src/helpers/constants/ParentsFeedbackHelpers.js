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

export const barChartColors = ["#0066CC", "#4CB140", "#009596", "#5752D1", "#F4C145", "#F4C145", "#EC7A08", "#8BC1F7", "#23511E"];

export const expectation = {
  labels: ["Software Engineer", "Researcher", "Enterprenuer"],
  datasets: [
    {
      label: "Expect of Parents",
      data: [],
      backgroundColor: pieChartColors[6].slice(0, 3),
    },
  ],
};

export const fullfill = {
  labels: ["Definitely", "Moderately", "Not Sure"],
  datasets: [
    {
      label: "Fullfillment of Expectations",
      data: [],
      backgroundColor: pieChartColors[3].slice(0, 3),
    },
  ],
};

export const reasons = {
  labels: ["Vicinity", "betterJobOffers", "cut-offMarks", "recommendedBy", "TCEisBest", "ambiance", "GovtAidedCollege", "updatedCurriculum"],
  datasets: [
    {
      labels: "Reasons for Choosing TCE CSE",
      data: [],
      backgroundColor: barChartColors,
    },
  ],
};
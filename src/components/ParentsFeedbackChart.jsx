import React from "react";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

import Paper from "@mui/material/Paper";

import {
  getExpectation,
  getReasons,
  getBarChart,
} from "../helpers/util/ParentsFeedbackUtil";

const ParentsFeedbackChart = ({ report }) => {
  // console.log(report);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-10 items-center justify-center h-[400px] overflow-hidden">
        <Paper sx={{ width: 300, padding: "20px" }}>
          <h1>Expectation of the Ward</h1>
          <Pie data={getExpectation(report[0])} />
        </Paper>
        <Paper sx={{ width: 300, padding: "20px" }}>
          <h1>Fullfillment of Expectations</h1>
          <Pie data={getReasons(report[1])} />
        </Paper>
      </div>
      <div>
        <Paper sx={{ width: 800, padding: "20px" }}>
          <h1>Reasons for Joining TCE CSE</h1>
          <Bar data={getBarChart(report[2])} />
        </Paper>
      </div>
    </div>
  );
};

export default ParentsFeedbackChart;

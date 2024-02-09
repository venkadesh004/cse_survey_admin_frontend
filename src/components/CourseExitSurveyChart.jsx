import React from "react";
import { Pie } from "react-chartjs-2";

import Paper from "@mui/material/Paper";

import {
  getCODataset,
  getTools,
  getBooks,
  getHosting,
  getRating,
} from "../helpers/util/CourseExitSurveyUtil";

const CourseExitSurveyChart = ({ report }) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center h-[900px] overflow-scroll">
      <Paper sx={{ width: 300, padding: "20px" }}>
        <h1>CO1</h1>
        <Pie data={getCODataset(report[4], 0)} />
      </Paper>
      <Paper sx={{ width: 300, padding: "20px" }}>
        <h1>CO2</h1>
        <Pie data={getCODataset(report[5], 1)} />
      </Paper>
      <Paper sx={{ width: 300, padding: "20px" }}>
        <h1>CO3</h1>
        <Pie data={getCODataset(report[6], 2)} />
      </Paper>
      <Paper sx={{ width: 300, padding: "20px" }}>
        <h1>CO4</h1>
        <Pie data={getCODataset(report[7], 3)} />
      </Paper>
      <Paper sx={{ width: 300, padding: "20px" }}>
        <h1>CO5</h1>
        <Pie data={getCODataset(report[8], 4)} />
      </Paper>
      <Paper sx={{ width: 300, padding: "20px" }}>
        <h1>CO6</h1>
        <Pie data={getCODataset(report[9], 5)} />
      </Paper>
      <Paper sx={{ width: 300, padding: "20px" }}>
        <h1>CO7</h1>
        <Pie data={getCODataset(report[10], 6)} />
      </Paper>
      <Paper sx={{ width: 300, padding: "20px" }}>
        <h1>CO8</h1>
        <Pie data={getCODataset(report[11], 7)} />
      </Paper>
      <Paper sx={{ width: 300, padding: "20px" }}>
        <h1>Tools Used</h1>
        <Pie data={getTools(report[0])} />
      </Paper>
      <Paper sx={{ width: 300, padding: "20px" }}>
        <h1>Books Requirement</h1>
        <Pie data={getBooks(report[3])} />
      </Paper>
      <Paper sx={{ width: 300, padding: "20px" }}>
        <h1>Lecture Rating</h1>
        <Pie data={getRating(report[2])} />
      </Paper>
      <Paper sx={{ width: 300, padding: "20px" }}>
        <h1>Hosting content Rating</h1>
        <Pie data={getHosting(report[1])} />
      </Paper>
    </div>
  );
};

export default CourseExitSurveyChart;

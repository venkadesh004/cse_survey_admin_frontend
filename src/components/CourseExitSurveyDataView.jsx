import React from "react";

import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

const columns = [
    { id: "_id", label: "Key", width: 50 },
    { id: "courseCode", label: "Course Code", minWidth: 50 },
    { id: "courseName", label: "Course Name", minWidth: 50 },
    { id: "year", label: "Year", minWidth: 50 },
    { id: "CO1", label: "CO1", minWidth: 50 },
    { id: "CO2", label: "CO2", minWidth: 50 },
    { id: "CO3", label: "CO3", minWidth: 50 },
    { id: "CO4", label: "CO4", minWidth: 50 },
    { id: "CO5", label: "CO5", minWidth: 50 },
    { id: "CO6", label: "CO6", minWidth: 50 },
    { id: "CO7", label: "CO7", minWidth: 50 },
    { id: "CO8", label: "CO8", minWidth: 50 },
    {
      id: "appropriatenessOfAssessmentToolsUsed",
      label: "Appropriateness Of Assessment Tools",
    },
    { id: "courseSuggestions", label: "Course Suggestions", minWidth: 150 },
    { id: "like", label: "Like", minWidth: 50 },
    { id: "dislike", label: "Dislike", minWidth: 50 },
    { id: "hostingTools", label: "Hosting Tools", minWidth: 50 },
    { id: "lectureRating", label: "Lecture Rating", minWidth: 50 },
    { id: "textBookAvailability", label: "Text Book Availability", minWidth: 50 },
  ];

const CourseExitSurveyDataView = ({rows}) => {
  return (
    <div className="w-full">
      <Paper
        sx={{
          width: "100%",
          height: "calc(100vh-200px)",
          overflow: "hidden",
          padding: "0px",
        }}
      >
        <TableContainer sx={{ maxHeight: "900px", overflow: "scroll" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.slice(1).map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ overflow: "scroll" }}>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      if (column.id != "_id") {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default CourseExitSurveyDataView;

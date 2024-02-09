import React from "react";

import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

const columns = [
  { id: "_id", label: "Key", minWidth: 50 },
  { id: "communication", label: "Communication", minWidth: 50 },
  { id: "contemporaryKnowledge", label: "Contemporary Knowledge", minWidth: 50 },
  { id: "criticalThinking", label: "Critical Thinking", minWidth: 50 },
  { id: "design", label: "Design", minWidth: 50 },
  { id: "designation", label: "Designation", minWidth: 50 },
  { id: "email", label: "Email", minWidth: 50 },
  { id: "exposureToIt", label: "Exposure To It", minWidth: 50 },
  { id: "interpersonal", label: "Interpersonal", minWidth: 50 },
  { id: "knowledge", label: "Knowledge", minWidth: 50 },
  { id: "knowledgeAboutSPD", label: "Knowledge About SPD", minWidth: 50 },
  { id: "leadership", label: "Leadership", minWidth: 50 },
  { id: "lifeSkills", label: "Life Skills", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 50 },
  { id: "organisationName", label: "Organisation Name", minWidth: 50 },
  { id: "overallRating", label: "Overall Rating", minWidth: 50 },
  { id: "problemSolving", label: "Problem Solving", minWidth: 50 },
  { id: "professionalEthics", label: "Professional Ethics", minWidth: 50 },
  { id: "programmingSkill", label: "Programming Skill", minWidth: 50 },
  { id: "projectManagementSkills", label: "ProjectManagement Skills", minWidth: 50 },
  { id: "suggestions", label: "Suggestions", minWidth: 50 },
  { id: "systemEngineeringSkills", label: "System Engineering Skills", minWidth: 50 },
  { id: "team", label: "Team", minWidth: 50 },
];

const RecruitersFeedbackDataView = ({ rows }) => {
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

export default RecruitersFeedbackDataView;

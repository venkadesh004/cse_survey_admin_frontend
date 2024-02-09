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
  { id: "organizationName", label: "Organization Name", minWidth: 50 },
  { id: "organizationLocation", label: "Organization Location", minWidth: 50 },
  { id: "feedbackProvider", label: "Feedback Provider", minWidth: 50 },
  {
    id: "feedbackProviderDesignation",
    label: "Feedback Provider Designation",
    minWidth: 50,
  },
  { id: "alumnusName", label: "Alumnus Name", minWidth: 50 },
  { id: "natureOfalumnusRole", label: "Nature of Alumnus Role", minWidth: 50 },
  { id: "alumnusRole", label: "Alumnus Role", minWidth: 50 },
  { id: "qualityOfWork", label: "Quality of Work", minWidth: 50 },
  {
    id: "individualAndTeamWork",
    label: "Individual and Teamwork",
    minWidth: 50,
  },
  { id: "technicalKnowledge", label: "Technical Knowlodge", minWidth: 50 },
  { id: "domainKnowledge", label: "Domain Knowledge", minWidth: 50 },
  { id: "overallRating", label: "Overall Rating", minWidth: 50 },
  { id: "suggestions", label: "Suggestions", minWidth: 50 },
  { id: "digitalSignature", label: "Digital Signatures", minWidth: 50 },
];

const EmployerFeedbackDataView = ({ rows }) => {
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

export default EmployerFeedbackDataView;

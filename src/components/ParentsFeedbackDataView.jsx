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
    { id: "studentName", label: "Student Name", width: 50 },
    { id: "parentName", label: "Parent Name", width: 50 },
    { id: "mobile", label: "Mobile", width: 50 },
    { id: "parentOccupation", label: "Parent Occupation", width: 50 },
    { id: "ParentsSuggestions", label: "Parents Suggestions", width: 50 },
    { id: "date", label: "Date", width: 50 },
    { id: "expectations", label: "Expectations", width: 50 },
    { id: "fulfill", label: "Fulfill", width: 50 },
    { id: "reasons", label: "Reasons", width: 50 },
  ];
  

const ParentsFeedbackDataView = ({rows}) => {
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

export default ParentsFeedbackDataView;

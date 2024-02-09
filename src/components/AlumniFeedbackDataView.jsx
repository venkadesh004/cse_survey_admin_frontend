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
  { id: "name", label: "name", minWidth: 50 },
  { id: "degree", label: "degree", minWidth: 50 },
  { id: "yearOfGraduation", label: "yearOfGraduation", minWidth: 50 },
  { id: "email", label: "email", minWidth: 50 },
  { id: "address", label: "address", minWidth: 50 },
  {
    id: "workingOrganisationName",
    label: "workingOrganisationName",
    minWidth: 50,
  },
  { id: "designation", label: "designation", minWidth: 50 },
  { id: "annualSalary", label: "annualSalary", minWidth: 50 },
  {
    id: "yearsWorkingInTheCompany",
    label: "yearsWorkingInTheCompany",
    minWidth: 50,
  },
  { id: "date", label: "date", minWidth: 50 },
  { id: "natureOfWork", label: "natureOfWork", minWidth: 50 },
  { id: "roles", label: "roles", minWidth: 50 },
  { id: "problemSolvingSkills", label: "problemSolvingSkills", minWidth: 50 },
  { id: "universityName", label: "universityName", minWidth: 50 },
  { id: "higherDegree", label: "higherDegree", minWidth: 50 },
  { id: "admissionYear", label: "admissionYear", minWidth: 50 },
  { id: "graduationYear", label: "graduationYear", minWidth: 50 },
  { id: "ownOrganizationName", label: "ownOrganizationName", minWidth: 50 },
  {
    id: "buisnessAndTechnicalDomain",
    label: "buisnessAndTechnicalDomain",
    minWidth: 50,
  },
  { id: "ownCompanyStartedYear", label: "ownCompanyStartedYear", minWidth: 50 },
  { id: "websiteUrl", label: "websiteUrl", minWidth: 50 },
  { id: "numberOfAwards", label: "numberOfAwards", minWidth: 50 },
  { id: "awardDetails", label: "awardDetails", minWidth: 50 },
  {
    id: "noOfPapersPublishedAfterUG",
    label: "noOfPapersPublishedAfterUG",
    minWidth: 50,
  },
  { id: "publicationDetails", label: "publicationDetails", minWidth: 50 },
  {
    id: "noOfInternationalCertifications",
    label: "noOfInternationalCertifications",
    minWidth: 50,
  },
  { id: "certificationDetails", label: "certificationDetails", minWidth: 50 },
  { id: "noOfPatentsFiled", label: "noOfPatentsFiled", minWidth: 50 },
  { id: "patentDetails", label: "patentDetails", minWidth: 50 },
  { id: "membership", label: "membership", minWidth: 50 },
  { id: "higherOfficialName", label: "higherOfficialName", minWidth: 50 },
  {
    id: "higherOfficialDesignation",
    label: "higherOfficialDesignation",
    minWidth: 50,
  },
  { id: "higherOfficialMailID", label: "higherOfficialMailID", minWidth: 50 },
  { id: "overallRatingCollege", label: "overallRatingCollege", minWidth: 50 },
  {
    id: "strngthOrWeaknessInTheProgram",
    label: "strngthOrWeaknessInTheProgram",
    minWidth: 50,
  },
  { id: "roleWishToContribute", label: "roleWishToContribute", minWidth: 50 },
];

const AlumniFeedbackDataView = ({ rows }) => {
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

export default AlumniFeedbackDataView;

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
  { id: "regNo", label: "regNo", minWidth: 50 },
  { id: "yearJoined", label: "yearJoined", minWidth: 50 },
  { id: "email", label: "email", minWidth: 50 },
  { id: "mobileNo", label: "mobileNo", minWidth: 50 },
  { id: "presentAddress", label: "presentAddress", minWidth: 50 },
  { id: "educationalExperience", label: "educationalExperience", minWidth: 50 },
  { id: "effectiveness", label: "effectiveness", minWidth: 50 },
  { id: "adminOffices", label: "adminOffices", minWidth: 50 },
  {
    id: "careerGuidanceAndPlacement",
    label: "careerGuidanceAndPlacement",
    minWidth: 50,
  },
  { id: "transportation", label: "transportation", minWidth: 50 },
  { id: "canteen", label: "canteen", minWidth: 50 },
  { id: "hostel", label: "hostel", minWidth: 50 },
  { id: "availability", label: "availability", minWidth: 50 },
  {
    id: "contactHoursOutsideLecturing",
    label: "contactHoursOutsideLecturing",
    minWidth: 50,
  },
  { id: "professionalism", label: "professionalism", minWidth: 50 },
  { id: "presentation", label: "presentation", minWidth: 50 },
  { id: "mentoring", label: "mentoring", minWidth: 50 },
  { id: "centralLibrary", label: "centralLibrary", minWidth: 50 },
  { id: "departnmentLibrary", label: "departnmentLibrary", minWidth: 50 },
  {
    id: "centralComputingCentre",
    label: "centralComputingCentre",
    minWidth: 50,
  },
  {
    id: "infrastructuresAndLabs",
    label: "infrastructuresAndLabs",
    minWidth: 50,
  },
  { id: "internet", label: "internet", minWidth: 50 },
  { id: "parking", label: "parking", minWidth: 50 },
  { id: "modernClassroom", label: "modernClassroom", minWidth: 50 },
  { id: "curriculum", label: "curriculum", minWidth: 50 },
  { id: "syllabiContent", label: "syllabiContent", minWidth: 50 },
  {
    id: "studentLearningAssessment",
    label: "studentLearningAssessment",
    minWidth: 50,
  },
  { id: "qualityOfInstruction", label: "qualityOfInstruction", minWidth: 50 },
  {
    id: "opportunityForCreativity",
    label: "opportunityForCreativity",
    minWidth: 50,
  },
  { id: "knowledgeAndEthics", label: "knowledgeAndEthics", minWidth: 50 },
  { id: "teamWork", label: "teamWork", minWidth: 50 },
  { id: "demonstrateLeadership", label: "demonstrateLeadership", minWidth: 50 },
  {
    id: "interpersonalSkillsDevelopment",
    label: "interpersonalSkillsDevelopment",
    minWidth: 50,
  },
  { id: "lifeSkills", label: "lifeSkills", minWidth: 50 },
  { id: "verbalCommunication", label: "verbalCommunication", minWidth: 50 },
  { id: "writtenCommunication", label: "writtenCommunication", minWidth: 50 },
  { id: "problemSolving", label: "problemSolving", minWidth: 50 },
  { id: "criticalThinking", label: "criticalThinking", minWidth: 50 },
  { id: "researchSkills", label: "researchSkills", minWidth: 50 },
  { id: "programmingSkills", label: "programmingSkills", minWidth: 50 },
  { id: "productDevelopment", label: "productDevelopment", minWidth: 50 },
  {
    id: "applyingSkillsInFinalYearProject",
    label: "applyingSkillsInFinalYearProject",
    minWidth: 50,
  },
  {
    id: "comfortableAtHighlevelLanguage",
    label: "comfortableAtHighlevelLanguage",
    minWidth: 50,
  },
  {
    id: "comfortableInConfiguringSystems",
    label: "comfortableInConfiguringSystems",
    minWidth: 50,
  },
  {
    id: "exposureToSocietyRelevantProjects",
    label: "exposureToSocietyRelevantProjects",
    minWidth: 50,
  },
  {
    id: "knowledgeOfpersonalHealtheErgonomics",
    label: "knowledgeOfpersonalHealtheErgonomics",
    minWidth: 50,
  },
  {
    id: "knowledgeOfSoftwareCopyright",
    label: "knowledgeOfSoftwareCopyright",
    minWidth: 50,
  },
  { id: "NSSorNCCCamps", label: "NSSorNCCCamps", minWidth: 50 },
  {
    id: "exposureToImpactOfICTsolution",
    label: "exposureToImpactOfICTsolution",
    minWidth: 50,
  },
  {
    id: "emphasisOnSDofICTsolutions",
    label: "emphasisOnSDofICTsolutions",
    minWidth: 50,
  },
  {
    id: "abilityInExecutingFinalYearProject",
    label: "abilityInExecutingFinalYearProject",
    minWidth: 50,
  },
  {
    id: "organizingAndManagingEvents",
    label: "organizingAndManagingEvents",
    minWidth: 50,
  },
  {
    id: "numberOfPapersPublished",
    label: "numberOfPapersPublished",
    minWidth: 50,
  },
  { id: "publicationDetails", label: "publicationDetails", minWidth: 50 },
  {
    id: "numberOfSoftwaresorProductsDeveloped",
    label: "numberOfSoftwaresorProductsDeveloped",
    minWidth: 50,
  },
  { id: "projectDetails", label: "projectDetails", minWidth: 50 },
  {
    id: "membershipInProfessionalSocieties",
    label: "membershipInProfessionalSocieties",
    minWidth: 50,
  },
  {
    id: "numberOfInternationalCertifications",
    label: "numberOfInternationalCertifications",
    minWidth: 50,
  },
  { id: "certificationDetails", label: "certificationDetails", minWidth: 50 },
  { id: "overallRating", label: "overallRating", minWidth: 50 },
  { id: "comment", label: "comment", minWidth: 50 },
  {
    id: "roleYouWishToContribute",
    label: "roleYouWishToContribute",
    minWidth: 50,
  },
  { id: "collegeName", label: "collegeName", minWidth: 50 },
  { id: "degree", label: "degree", minWidth: 50 },
  { id: "discipline", label: "discipline", minWidth: 50 },
  { id: "admissionYear", label: "admissionYear", minWidth: 50 },
  { id: "workforceName", label: "workforceName", minWidth: 50 },
  { id: "workforceSector", label: "workforceSector", minWidth: 50 },
  { id: "workforceDesignation", label: "workforceDesignation", minWidth: 50 },
  { id: "workforceCity", label: "workforceCity", minWidth: 50 },
  {
    id: "workforceSalaryPerAnnum",
    label: "workforceSalaryPerAnnum",
    minWidth: 50,
  },
  { id: "parttimeCollegeName", label: "parttimeCollegeName", minWidth: 50 },
  { id: "parttimeDegree", label: "parttimeDegree", minWidth: 50 },
  { id: "parttimeDiscipline", label: "parttimeDiscipline", minWidth: 50 },
  { id: "parttimeAdmissionYear", label: "parttimeAdmissionYear", minWidth: 50 },
  { id: "parttimeWorkforceName", label: "parttimeWorkforceName", minWidth: 50 },
  { id: "sector", label: "sector", minWidth: 50 },
  { id: "designation", label: "designation", minWidth: 50 },
  { id: "city", label: "city", minWidth: 50 },
  { id: "salaryPerAnnum", label: "salaryPerAnnum", minWidth: 50 },
  { id: "onlineExam", label: "onlineExam", minWidth: 50 },
  { id: "GREScore", label: "GREScore", minWidth: 50 },
  { id: "GMATScore", label: "GMATScore", minWidth: 50 },
  { id: "CATScore", label: "CATScore", minWidth: 50 },
  { id: "GATEScore", label: "GATEScore", minWidth: 50 },
];

const GraduateExitSurveyDataView = ({ rows }) => {
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

export default GraduateExitSurveyDataView;

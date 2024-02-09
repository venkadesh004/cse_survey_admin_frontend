import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import CourseExitSurvey from "./pages/CourseExitSurvey";
import AlumniFeedback from "./pages/AlumniFeedback";
import EmployerFeedback from "./pages/EmployerFeedback";
import FacultyFeedback from "./pages/FacultyFeedback";
import GraduateExitSurvey from "./pages/GraduateExitSurvey";
import ParentsFeedback from "./pages/ParentsFeedback";
import RecruitersFeedback from "./pages/RecruitersFeedback";
import PeerFeedback from "./pages/PeerFeedback";

import Chart from "chart.js/auto";
import {CategoryScale} from "chart.js";

Chart.register(CategoryScale);

const pages = [
  "Course Exit Survey",
  "Alumni Feedback",
  "Parents Feedback",
  "Recruiters Feedback",
  "Graduate Exit Survey",
  "Employer Feedback",
  "Faculty Feedback",
  "Peer Feedback"
];

const pagesComponent = [
  <CourseExitSurvey />,
  <AlumniFeedback />,
  <ParentsFeedback />,
  <RecruitersFeedback />,
  <GraduateExitSurvey />,
  <EmployerFeedback />,
  <FacultyFeedback />,
  <PeerFeedback />
];

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  return (
    <div className="overflow-hidden">
      <AppBar position="static">
        <Container maxWidth="100%">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                value={currentPage}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={page} onClick={() => {
                    setCurrentPage(index);
                    handleCloseNavMenu();
                  }} value={index}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TCE CSE SURVEY PANEL
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => {
                    setCurrentPage(index);
                    handleCloseNavMenu();
                  }}
                  value={index}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="w-[100%]">
        {pagesComponent[currentPage]}
      </div>
    </div>
  );
}
export default App;

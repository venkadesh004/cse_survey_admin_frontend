import React, { useEffect, useState } from "react";
import axios from "axios";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import CourseExitSurveyDataView from "../components/CourseExitSurveyDataView";
import CourseExitSurveyChart from "../components/CourseExitSurveyChart";

const CourseExitSurvey = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState("All");
  const [courseCodes, setCourseCodes] = useState([]);
  const [currentComponent, setCurrentComponent] = useState(0);

  const viewComponents = [
    <CourseExitSurveyDataView rows={rows} />,
    <CourseExitSurveyChart />
  ];

  const handleChange = (event) => {
    setLoading(true);
    setCode(event.target.value);
    if (event.target.value === "All") {
      axios
        .get("http://localhost:3000/courseExitSurvey/getData")
        .then((result) => {
          console.log(result.data);
          setRows(result.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(
          "http://localhost:3000/courseExitSurvey/getCourseFeedback/" +
            event.target.value
        )
        .then((result) => {
          setRows(result.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/courseExitSurvey/getData")
      .then((result) => {
        console.log(result.data);
        setRows(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/courseExitSurvey/getCourses")
      .then((result) => {
        console.log(result.data);
        setCourseCodes(result.data);
        var itemL = items;
        if (items.length <= 1) {
          result.data.forEach((value, index) => {
            console.log(value);
            itemL.push(
              <MenuItem value={value}>
                <em>{value}</em>
              </MenuItem>
            );
          });
        }
        setItems(itemL);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [items, setItems] = useState([
    <MenuItem value="All">
      <em>All</em>
    </MenuItem>,
  ]);

  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="w-[20%]">
        <div className="flex items-center flex-col">
          <h1>{rows.length} Responses</h1>
          {courseCodes.length > 1 && (
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Course Code
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={code}
                onChange={handleChange}
                autoWidth
                label="Course Code"
              >
                {items}
              </Select>
            </FormControl>
          )}
          <Button onClick={() => setCurrentComponent(0)}>View Data's</Button>
          <Button onClick={() => setCurrentComponent(1)} disabled={code === "All" ? true : false}>View Analysis</Button>
          <Button>Download Data</Button>
        </div>
      </div>
      <div className="w-[80%]">
        {loading ? (
          <div className="w-full h-[800px] flex items-center justify-center">
            Loading...
          </div>
        ) : (
          viewComponents[currentComponent]
        )}
      </div>
    </div>
  );
};

export default CourseExitSurvey;

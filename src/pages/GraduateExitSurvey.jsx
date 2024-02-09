import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";

import GraduateExitSurveyDataView from "../components/GraduateExitSurveyDataView";

const GraduateExitSurvey = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/graduateExitSurvey/getData")
      .then(async (result) => {
        console.log(result.data);
        setRows(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="w-[20%]">
        <div className="flex items-center flex-col">
          <h1 className="">{rows.length} Responses</h1>
          <Button onClick={() => setCurrentComponent(0)}>View Data</Button>
          <Button
            href="http://localhost:3000/graduateExitSurvey/downloadData"
            target="_blank"
          >
            Download Data
          </Button>
        </div>
      </div>
      <div className="w-[80%]">
        {loading ? (
          <div className="w-full h-[800px] flex items-center justify-center">
            Loading...
          </div>
        ) : (
          <GraduateExitSurveyDataView rows={rows} />
        )}
      </div>
    </div>
  );
};

export default GraduateExitSurvey;

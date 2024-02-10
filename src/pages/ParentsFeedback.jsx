import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";

import ParentsFeedbackDataView from "../components/ParentsFeedbackDataView";
import ParentsFeedbackChart from "../components/ParentsFeedbackChart";

import { getData, getFeedback, downloadData } from "../API/parentsFeedback";

const ParentsFeedback = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentComponent, setCurrentComponent] = useState(0);
  const [report, setReport] = useState([]);

  const viewComponents = [
    <ParentsFeedbackDataView rows={rows} />,
    <ParentsFeedbackChart report={report} />,
  ];

  useEffect(() => {
    axios
      .get(getData)
      .then(async (result) => {
        console.log(result.data);
        setRows(result.data);
        await axios
          .get(getFeedback)
          .then((output) => {
            setReport(output.data);
            setLoading(false);
          });
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
          <Button onClick={() => setCurrentComponent(1)}>View Analysis</Button>
          <Button
            href={downloadData}
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
          viewComponents[currentComponent]
        )}
      </div>
    </div>
  );
};

export default ParentsFeedback;

import {
  expectation,
  fullfill,
  reasons,
} from "../constants/ParentsFeedbackHelpers";

export const getExpectation = (data) => {
  var count = [0, 0, 0];
  data.forEach((element) => {
    if (element === "SoftwareEngineer") {
      count[0]++;
    } else if (element === "Reasearcher") {
      count[1]++;
    } else {
      count[2]++;
    }
  });

  expectation.datasets[0].data = count;
  return expectation;
};

export const getReasons = (data) => {
  var count = [0, 0, 0];
  data.forEach((element) => {
    if (element === "definitely") {
      count[0]++;
    } else if (element === "moderately") {
      count[1]++;
    } else {
      count[2]++;
    }
  });

  fullfill.datasets[0].data = count;
  return fullfill;
};

export const getBarChart = (data) => {
  var count = [0, 0, 0, 0, 0, 0, 0, 0];
  data.forEach((element) => {
    // console.log(element);
    if (element === "Vicinity") {
      count[0]++;
    } else if (element === "betterJobOffers") {
      count[1]++;
    } else if (element === "cut-offMarks") {
      count[2]++;
    } else if (element === "recommendedBy") {
      count[3]++;
    } else if (element === "TCEisBest") {
      count[4]++;
    } else if (element === "ambiance") {
      count[5]++;
    } else if (element === "GovtAidedCollege") {
      count[6]++;
    } else {
      count[7]++;
    }
  });

  reasons.datasets[0].data = count;
  return reasons;
}
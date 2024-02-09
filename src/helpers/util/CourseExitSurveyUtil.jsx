import {
  COData,
  tools,
  rating,
  hosting,
  books
} from "../constants/CourseExitSurveyHelpers";

export const getCODataset = (data, index) => {
  // console.log(index);
  var count = [0, 0, 0, 0, 0];
  data.forEach((element) => {
    if (element === "1") {
      count[0]++;
    } else if (element === "2") {
      count[1]++;
    } else if (element === "3") {
      count[2]++;
    } else if (element === "4") {
      count[3]++;
    } else if (element === "5") {
      count[4]++;
    }
  });

  COData[index].datasets[0].data = count;
  return COData[index];
};

export const getTools = (data) => {
  var count = [0, 0, 0];
  data.forEach((element) => {
    if (element === "appropriate") {
      count[0]++;
    } else if (element === "notappropriate") {
      count[1]++;
    } else {
      count[2]++;
    }
  });

  tools.datasets[0].data = count;
  return tools;
};

export const getHosting = (data) => {
  var count = [0, 0, 0, 0];
  data.forEach((element) => {
    if (element === "poor") {
      count[0]++;
    } else if (element === "average") {
      count[1]++;
    } else if (element === "good") {
      count[2]++;
    } else {
      count[3]++;
    }
  });

  hosting.datasets[0].data = count;
  return hosting;
};

export const getRating = (data) => {
  var count = [0, 0, 0, 0];
  data.forEach((element) => {
    if (element === "poor") {
      count[0]++;
    } else if (element === "average") {
      count[1]++;
    } else if (element === "good") {
      count[2]++;
    } else {
      count[3]++;
    }
  });

  rating.datasets[0].data = count;
  return rating;
};

export const getBooks = (data) => {
  var count = [0, 0, 0];
  data.forEach((element) => {
    if (element === "available") {
      count[0]++;
    } else if (element === "notavailable") {
      count[1]++;
    } else {
      count[2]++;
    }
  });

  books.datasets[0].data = count;
  return books;
};
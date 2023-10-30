const convertAndFormatDate = (input) => {
  // Get only the date from the input
  const splitInput = input.split("T")[0];

  // Months array that will be used to convert the integers into month
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month integer
  const monthNumber = parseInt(splitInput.split("-")[1], 10);

  const monthName = months[monthNumber - 1];

  const dateFormated = `${splitInput.split("-")[2]} ${monthName}, ${
    splitInput.split("-")[0]
  }`;

  return dateFormated;
};

export default convertAndFormatDate;

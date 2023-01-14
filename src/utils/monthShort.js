function monthShortName(monthNo) {
  // month is a string
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  return monthNames[monthNo - 1];
}

export default monthShortName;

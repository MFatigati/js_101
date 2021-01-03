function toDate(string) {
  return new Date(string + "T00:00:00");
}

const TODAY = toDate("2018-08-05");

function toString(date) {
  return `${date.getFullYear()}-${padDay(date.getMonth() + 1)}-${padDay(date.getDate())}`;
}

// needed getFullYear instead of getYear
// needed to account for zero based indexing in getMonth
// needed to pad single digit months and days

function padDay(day) {
  if (String(day).length === 1) {
    return String(0) + String(day);
  } else return day;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  return date.getDay() >= 1 && date.getDay() <= 5;
}

let myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"]
};

let offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"], // only one that is in the past
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
  "Mike's Hikes": ["2018-08-16"],
  "Gordon Ramsey Master Class": ["2018-09-11", "2018-09-12"],
  "Powerboating 101": ["2018-09-15", "2018-09-16"],
  "Discover Parachuting": ["2018-11-02"]
};

function getCompatibleEvents(classes, calendar) {
  // console.log(TODAY)
  function isAvailable(date) {
    let dateStr = toString(date);
    // console.log(dateStr, calendar[dateStr]); // PROBLEM: the dateStrs here don't match ANY of the offered classes
    return !calendar[dateStr] || calendar[dateStr].length === 0; // do all of them pass the test because the dates don't match?
  }

  let compatibleClasses = [];

  let classKeys = Object.keys(classes);
  // console.log(classKeys)
  
  classKeys.forEach(className => {
    let classDates = classes[className].map(toDate);
    // console.log(classDates);

    if (classDates.some(isInThePast)) {
      return; // accurately captures "Back To The Future Movie Night" as in the past, and stop this iteration of the forEach loop
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
    
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]
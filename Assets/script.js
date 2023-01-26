// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  const hourNine = document.getElementById('hour-9');
  const hourTen = document.getElementById('hour-10');
  const hourEleven = document.getElementById('hour-11');
  const hourTwelve = document.getElementById('hour-12');
  const hourThirteen = document.getElementById('hour-13');
  const hourFourteen = document.getElementById('hour-14');
  const hourFifteen = document.getElementById('hour-15');
  const hourSixteen = document.getElementById('hour-16');
  const hourSeventeen = document.getElementById('hour-17');

  let hourList = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    hourNine,
    hourTen,
    hourEleven,
    hourTwelve,
    hourThirteen,
    hourFourteen,
    hourFifteen,
    hourSixteen,
    hourSeventeen,
  ]

  for (let i = 0; i < hourList.length; i++) {
    if (dayjs().hour() == [i]) {
    console.log('present')
      // hourList[i].setAttribute('class', "present");
  } else if (dayjs().hour() > [i]) {
      console.log('past')
      // hourList[i].setAttribute('class', "past");
    } else {
      console.log('future');
      // hourList[i].setAttribute('class', "future");
    };
  };



  setInterval(() =>
{
  let presentDateTime = dayjs().format('dddd, MMMM D YYYY, h:mm:ss A');
  document.getElementById("currentDay").innerText = presentDateTime;
},1000);

  console.log(dayjs().hour());
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});



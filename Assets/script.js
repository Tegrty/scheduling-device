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
  const saveBtn = document.querySelectorAll('.btn');

 // Array to compare with Dayjs.hour
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
// If statement inside of a loop to match time with 
  for (let i = 9; i < hourList.length; i++) {
    if (dayjs().hour() == [i]) {
    hourList[i].setAttribute('style', 'background-color: #ff6961');
  } else if (dayjs().hour() > [i]) {
    console.log('past');
    hourList[i].setAttribute('style', 'background-color: #d3d3d3')
    } else {
      hourList[i].setAttribute('style', 'background-color: #77dd77');
    };
  };
// function to save content to local storage
  $( saveBtn ).click(function() {
        // Get nearby values of the description in JQuery
        let text = $(this).siblings("textarea").val();
        let time = $(this).parent().attr("id");
        // Save text in local storage
        localStorage.setItem(time, text);
  });

 // Values to retrieve data from local storage
  let hourNineValue= localStorage.getItem('hour-9')
  $('#hour-9 textarea').val(hourNineValue)

  let hourTenValue= localStorage.getItem('hour-10')
  $('#hour-10 textarea').val(hourTenValue)

  let hourElevenValue= localStorage.getItem('hour-11')
  $('#hour-11 textarea').val(hourElevenValue)

  let hourTwelveValue= localStorage.getItem('hour-12')
  $('#hour-12 textarea').val(hourTwelveValue)

  let hourThirteenValue= localStorage.getItem('hour-13')
  $('#hour-13 textarea').val(hourThirteenValue)

  let hourFourteenValue= localStorage.getItem('hour-14')
  $('#hour-14 textarea').val(hourFourteenValue)

  let hourFifteenValue= localStorage.getItem('hour-15')
  $('#hour-15 textarea').val(hourFifteenValue)

  let hourSixteenValue= localStorage.getItem('hour-16')
  $('#hour-16 textarea').val(hourSixteenValue)

  let hourSeventeenValue= localStorage.getItem('hour-17')
  $('#hour-17 textarea').val(hourSeventeenValue)

  setInterval(() =>
{
  let presentDateTime = dayjs().format('dddd, MMMM D YYYY, h:mm:ss A');
  document.getElementById("currentDay").innerText = presentDateTime;
},1000);

  console.log(dayjs().hour());

});



$(function () {
});

$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var description = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    console.log(description);
    console.log(time);

    localStorage.setItem(time, description);
  });

  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  $('.time-block').each(function (){
    var now = dayjs().hour();
    var calendarHour = parseInt($(this).parent().attr('id').split('-')[1]);
    if(now < calendarHour){
      $(this).addClass('past');
    } else if (now === calendarHour){
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  })
  // if(now.dayjs().hour())
});

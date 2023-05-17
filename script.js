
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    var todayDate = dayjs().format("dddd, MMMM D, YYYY HH:mma")
    $("#currentDay").text(todayDate);

    
    
    function timeTracker() {
        //gets current time
        var now = dayjs().hour();
    
        $(".time-block").each(function(){
            var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);
            

            if (timeBlock === now) {
                $(this).addClass("present")
            } else if (timeBlock < now) {
                $(this).addClass("past")
            } else {
                $(this).addClass("future")
            }
        })

           
    }
    timeTracker(); 
        
    $('.saveBtn').click(function(){
       
       var hour= $(this).parent().attr("id")
       var userInput = $(this).siblings(".description").val()
       localStorage.setItem(hour, userInput);
   $('textarea').each(function(){
    $(this).val(localStorage.getItem($(this).attr("hour")));
   })

    })

   
   
    
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
    
   
    
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    
    });
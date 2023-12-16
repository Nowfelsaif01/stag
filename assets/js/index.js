
function updateDateTime() {
    // Get the current date and time
    var currentDate = new Date();
    
    // Format the date and time as desired
    var formattedDateTime = currentDate.toLocaleString('en-US', { weekday: 'short', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });

    // Update the content of the span element
    document.getElementById('dateTime').textContent = formattedDateTime;
}

// Call the function initially to set the initial value
updateDateTime();

// Set up an interval to update the date and time every minute (you can adjust the interval as needed)
setInterval(updateDateTime, 60000);

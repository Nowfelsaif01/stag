
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



  // Function to update time
  function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    const timeElement = document.querySelector('.time');

    // Formatting the time with hours and minutes
    const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    // Update time in the element
    timeElement.textContent = formattedTime;
  }

  // Update time immediately and then every minute
  updateTime(); // Call the function immediately to avoid delay on initial load
  setInterval(updateTime, 60000); // Update time every minute (60,000 milliseconds = 1 minute)


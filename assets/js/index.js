
// Date and Time Function
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

// Time Function
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

// Testimonial Slider

if ($('.testimonial-slider').length) {
  const swiper = new Swiper('.testimonial-slider', {
    // Optional parameters
    // loop: true,
    slidesPerView: 2,
    spaceBetween: 18,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 800, 
    easing: 'easeOutQuad',
  });

   // Update button state based on swiper position
   function updateButtonState() {
    const prevButton = $('.swiper-button-prev');
    const nextButton = $('.swiper-button-next');

    if (swiper.isBeginning) {
      prevButton.removeClass('active'); // If at the beginning, deactivate prev button
      nextButton.addClass('active'); // Activate next button
    } else if (swiper.isEnd) {
      nextButton.removeClass('active'); // If at the end, deactivate next button
      prevButton.addClass('active'); // Activate prev button
    } else {
      // If neither at the beginning nor end, activate both buttons
      prevButton.removeClass('active');
      nextButton.addClass('active');
    }
  }

  // Initial button state
  updateButtonState();

  // Event listeners for slide change and reaching the end
  swiper.on('slideChange', function () {
    updateButtonState();
  });

  swiper.on('reachEnd', function () {
    updateButtonState();
  });
}



// Project Slider

if ($('.project-slider').length) {
  const swiper2 = new Swiper('.project-slider', {
    slidesPerView: 3,
    spaceBetween: 18,

    // Navigation arrows
    navigation: {
      nextEl: '.project-swiper-button-next',
      prevEl: '.project-swiper-button-prev',
    },
    speed: 800,
    easing: 'easeOutQuad',
  });

  // Update button state based on swiper position
  function updateButtonState() {
    const prevButton = $('.project-swiper-button-prev');
    const nextButton = $('.project-swiper-button-next');

    if (swiper2.isBeginning) {
      prevButton.removeClass('active'); // If at the beginning, deactivate prev button
      nextButton.addClass('active'); // Activate next button
    } else if (swiper2.isEnd) {
      nextButton.removeClass('active'); // If at the end, deactivate next button
      prevButton.addClass('active'); // Activate prev button
    } else {
      // If neither at the beginning nor end, activate both buttons
      prevButton.removeClass('active');
      nextButton.addClass('active');
    }
  }

  // Initial button state
  updateButtonState();

  // Event listeners for slide change and reaching the end
  swiper2.on('slideChange', function () {
    updateButtonState();
  });

  swiper2.on('reachEnd', function () {
    updateButtonState();
  });
}
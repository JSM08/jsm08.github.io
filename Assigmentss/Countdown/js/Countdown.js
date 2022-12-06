// Converstion for Timing

function convertToDaysLeft(milliseconds) {
    return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  }

  function convertToHoursLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
  }

  function convertToMinutesLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
  }

  function convertToSecondsLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60)) / 1000
    );
  }

  function formatCountdownText(days, hours, minutes, seconds) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
  }

  // Initialize Deadline Varibale
  let deadline = new Date ("April 1, 2023 15:00:00");

  // Initialize the variable for the element used for the countdown
  let countdown = document.getElementById("countdown");
  // get rid of content text in countdown elemnt
  countdown.innerHTML = " ";

  // function to set countdown
  function setCountdown(){
    // current date
    let now = new Date ();
    let timeLeft = deadline.getTime() - now.getTime();
    // store time converted variables in another variable to use in final display
    let daysLeft = convertToDaysLeft(timeLeft);
    let hoursLeft = convertToHoursLeft(timeLeft);
    let minutesLeft = convertToMinutesLeft(timeLeft);
    let secondsLeft = convertToSecondsLeft(timeLeft);

    countdown.innerHTML = formatCountdownText
    (daysLeft, hoursLeft, minutesLeft, secondsLeft);

  }
  setInterval(setCountdown, 1000)
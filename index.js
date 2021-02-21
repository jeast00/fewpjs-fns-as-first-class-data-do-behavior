/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let timeConvert = parseInt(string);
  if (timeConvert < 12) {
    return 'Good Morning';
  } else if (timeConvert >= 12 && timeConvert <= 17) {
    return 'Good Afternoon';
  }
    else if (timeConvert > 17 && timeConvert < 24) {
      return 'Good Evening';
    }
}



/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById('greeting').innerText = string;
}
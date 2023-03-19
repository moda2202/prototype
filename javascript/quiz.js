


// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', function () {
  localStorage.removeItem('results');
  localStorage.removeItem('page');
  // Get the start button
  const startButton = document.getElementById('start-btn');

  // Get the quiz questions and choices
  const quizQuestions = document.querySelectorAll('.question');
  const quizChoices = document.querySelectorAll('.choices');

  // Get the review button and submit button
  const reviewButton = document.getElementById('review-btn');
  const submitButton = document.getElementById('submit-btn');
  
  // Get the timer element and set the initial time
  const timerElement = document.getElementById('time-left');
  let timeLeft = 60;

  // Get the progress bar and the progress bar element
  const progressBar = document.getElementById('progress');
  const progressBarElement = document.getElementById('progress-bar');

  // Hide the quiz questions and choices, review button, and submit button
  quizQuestions.forEach(function (question) {
    question.style.display = 'none';
  });

  quizChoices.forEach(function (choices) {
    choices.style.display = 'none';
  });

  reviewButton.style.display = 'none';
  submitButton.style.display = 'none';

  // Add event listener to start button
  startButton.addEventListener('click', function () {

    // Show the quiz questions and choices, review button, and submit button
    quizQuestions.forEach(function (question) {
      question.style.display = 'block';
    });

    quizChoices.forEach(function (choices) {
      choices.style.display = 'block';
    });

    reviewButton.style.display = 'inline-block';
    submitButton.style.display = 'inline-block';

    // Hide the start button
    startButton.style.display = 'none';

    // Start the timer
    let timer = setInterval(function () {
      timeLeft--;
      timerElement.textContent = timeLeft + ' seconds';

      // Update the progress bar
      let progress = (60 - timeLeft) / 60 * 100;
      progressBar.style.width = progress + '%';

      // Stop the timer when time runs out
      if (timeLeft === 0) {
        clearInterval(timer);
        alert('Time is up!');
      }
    }, 1000);

  });

  // Add event listener to submit button
  submitButton.addEventListener('click', function () {
    // Call function to check the answers and display the results
    showResults();
    progressBar.style.display= 'none';
    clearInterval(timer)
    clearInterval(progress)
    submitButton.style.display = 'none';
  });

  // Function to check the answers and display the results
  function showResults() {
    // Get the user's answers
    const userAnswers = document.querySelectorAll('.choices input:checked');
    let score = 0;

    // Check the user's answers against the correct answers
    userAnswers.forEach(function (answer) {
      if (answer.value === 'correct') {
        score++;
      }
    });

    // Calculate the percentage of correct answers
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const textbox = document.querySelector('#textbox') 
    // Display the results
    result = 'You scored ' + score +' out of '+ quizQuestions.length+' '+'('+percentage+'%)';
    localStorage.setItem('results', result);


    
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop();
    console.log(currentPage)
    switch (currentPage) {
      case "quizHistory.html":
        localStorage.setItem('page', "quizHistory.html");
        break;
      case "quizMath.html":
        localStorage.setItem('page', "quizMath.html");
        break;
      case "quizScience.html":
        localStorage.setItem('page', "quizScience.html");
        break;
      // add more cases for other pages
      default:
        console.log('Page not recognized.');
    }
   



    window.location.href = 'results.html';


  }

});







// // Wait for the DOM to load before adding event listeners
// document.addEventListener('DOMContentLoaded', function () {

//   // Get the start button
//   const startButton = document.getElementById('start-btn');

//   // Get the quiz questions and choices
//   const quizQuestions = document.querySelectorAll('.question');
//   const quizChoices = document.querySelectorAll('.choices');

//   // Get the review button and submit button
//   const reviewButton = document.getElementById('review-btn');
//   const submitButton = document.getElementById('submit-btn');

//   // Get the timer element and set the initial time
//   const timerElement = document.getElementById('time-left');
//   let timeLeft = 60;

//   // Get the progress bar and the progress bar element
//   const progressBar = document.getElementById('progress');
//   const progressBarElement = document.getElementById('progress-bar');

//   // Hide the quiz questions and choices, review button, and submit button
//   quizQuestions.forEach(function (question) {
//     question.style.display = 'none';
//   });

//   quizChoices.forEach(function (choices) {
//     choices.style.display = 'none';
//   });

//   reviewButton.style.display = 'none';
//   submitButton.style.display = 'none';

//   // Add event listener to start button
//   startButton.addEventListener('click', function () {

//     // Show the quiz questions and choices, review button, and submit button
//     quizQuestions.forEach(function (question) {
//       question.style.display = 'block';
//     });

//     quizChoices.forEach(function (choices) {
//       choices.style.display = 'block';
//     });

//     reviewButton.style.display = 'inline-block';
//     submitButton.style.display = 'inline-block';

//     // Hide the start button
//     startButton.style.display = 'none';

//     // Start the timer
//     let timer = setInterval(function () {
//       timeLeft--;
//       timerElement.textContent = timeLeft + ' seconds';

//       // Update the progress bar
//       let progress = (60 - timeLeft) / 60 * 100;
//       progressBar.style.width = progress + '%';

//       // Stop the timer when time runs out
//       if (timeLeft === 0) {
//         clearInterval(timer);
//         alert('Time is up!');
//       }
//     }, 1000);

//   });

// });
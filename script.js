function calculateAge (event) {
  //prevent the form submit from reloading the page
  event.preventDefault();

  let year = document.getElementById("year").value;

  if (year) {
    let currentYear = new Date().getFullYear();
    // year is negative or 0
    if(year<=0){
      displayError("Please enter a number > 0");
      return;
    }
    // year is greater than current year
    if(year>currentYear){
      displayError("Please enter a year less than "+currentYear);
      return;
    }
    // year is greater than current year
    if(year<1850){
      displayError("Please enter a year more than "+1850);
      return;
    }
    displayAge(currentYear - year);    
  }
  else {
    displayError("Please enter the year");  
  }  
}

function displayError(errorMessage) {
  let errorEl = document.getElementById("result");
  errorEl.innerHTML = errorMessage;
  errorEl.style.color="red";   
}

function displayAge(age) {
  let resultEl = document.getElementById("result");
  resultEl.innerHTML = "Your age is " + age;
  resultEl.style.color="green";
}
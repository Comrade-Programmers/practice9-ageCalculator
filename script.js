function calculateAge () {
    let year = document.getElementById("year").value;

    if (year) {
        let currentYear = new Date().getFullYear();
        displayAge(currentYear - year);    
    }
    else {
        displayError();  
    }  
}


function displayError() {
    let errorEl = document.getElementById("result");
    errorEl.innerHTML = "Please enter the year";
    errorEl.style.color="red";   
}

function displayAge(age) {
    let resultEl = document.getElementById("result");
    resultEl.innerHTML = "Your age is " + age;
    resultEl.style.color="green";
}
let messages = [];
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  messages = [];

  CheckFirstName();
  CheckFirstName();
  CheckEmail();
  CheckAddress();
  CheckCity();
  CheckPostalCode();
  CheckMessage();

  if (clicked > 0) {
    payRateValidation();
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = `
        <h3>Incorrect Inputs Provided:</h3>
        <pre>${messages.join("\r\n")}</pre>
        `;
  }
});

form.addEventListener("reset", (e) => {
  messages = [];
  errorElement.innerHTML = "";
});

if (messages.length > 0) {
  e.preventDefault();
  errorElement.innerHTML = `
        <h3>Incorrect Inputs Provided:</h3>
        <pre>${messages.join("\r\n")}</pre>
        `;
}

function CheckFirstName() {
  const inputName = document.getElementById("first-name");
  if (nullChecker(inputName, "First Name")) {
    areAlphabets(inputName, "First Name should be valid!");
  }
}

function CheckLastName() {
  const inputName = document.getElementById("last-name");
  if (nullChecker(inputName, "Last Name")) {
    areAlphabets(inputName, "Last Name should be valid!");
  }
}

function CheckEmail() {
  const email = document.getElementById("email");
  if (nullChecker(email, "Email")) {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.value.match(validRegex)) {
      messages.push("Email Address should bCheck");
    }
  }
}

function CheckAddress() {
  const address = document.getElementById("address");
  if (nullChecker(address, "Address")) {
    if (address.value.length < 10) {
      messages.push("Address should be valid!");
    }
  }
}

function CheckCity() {
  const city = document.getElementById("city");
  if (nullChecker(city, "City")) {
    areAlphabets(city, "City should be valid!");
  }
}

function CheckPostalCode() {
  let postalCode = document.getElementById("postalCode");
  let validRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  if (!postalCode.value.match(validRegex)) {
    messages.push("Invalid Postal Code!");
  }
}

function CheckMessage() {
  const message = document.getElementById("message");
  if (nullChecker(message, "Message")) {
    if (address.value.length < 10) {
      messages.push("Message should be few words long!");
    }
  }
}

function payRateValidation() {
  let payRateInput = document.getElementById("hourly-rate");
  if (payRateInput.value < 13 || payRateInputValue > 35) {
    messages.push("Enter between preferred hourly pay rate range!");
  }
}

function clearSidepanel() {
  document.getElementById("sidepanel").innerHTML = "<p>Errors (if any):</p>";
}

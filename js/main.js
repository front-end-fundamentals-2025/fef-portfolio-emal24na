const paragraphElement = document.getElementById("paragraph-name");
const inputElement = document.getElementById("name-input");
const inputElementEmail = document.getElementById("email-input");
const inputElementMessage = document.getElementById("text-input");
const buttonElement = document.getElementById("send-button");

buttonElement.addEventListener("click", function (event) {
  // page refresh fix via https://stackoverflow.com/questions/71671527/why-is-the-page-instantly-reloading-on-clicking-the-form-on-submit-button
  event.preventDefault();
  //   end of citation
  let enteredName = inputElement.value;
  let enteredEmail = inputElementEmail.value;
  let enteredMessage = inputElementMessage.value;

  if (enteredName !== "" && enteredEmail !== "") {
    paragraphElement.innerText =
      "Hello " +
      enteredName +
      ", I will get back to you within 24 hours on the email " +
      enteredEmail +
      ".";
    localStorage.enteredName = enteredName;
    localStorage.enteredEmail = enteredEmail;
    localStorage.enteredMessage = enteredMessage;
  } else {
    paragraphElement.innerText = "Please type a message";
  }
});

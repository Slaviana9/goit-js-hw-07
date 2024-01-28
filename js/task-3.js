const nameInput = document.querySelector("#name-input");
nameInput.classList.add("input-name");

const title = document.querySelector("h1");
title.classList.add("title");

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim(); //remove spaces - trim

  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});

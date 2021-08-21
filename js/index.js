let inputTxt = document.querySelector("#input-txt");
let translate = document.querySelector("#translate");
let outputTxt = document.querySelector("#output-txt");

let url = `https://api.funtranslations.com/translate/doge.json`;

translate.addEventListener("click", clickEventHandler);

function getUrl(text) {
  return `${url}?text=${text}`;
}

function clickEventHandler() {
  // console.log("Clicked");
  fetch(getUrl(inputTxt.value))
    .then((response) => response.json())
    .then((json) => {
      let output = json.contents.translated;
      outputTxt.innerText = output;
    })
    .catch(errorHandler);
}

function errorHandler(error) {
  console.log("An error occurred", error);
  alert("Something went wrong, please try again later");
}

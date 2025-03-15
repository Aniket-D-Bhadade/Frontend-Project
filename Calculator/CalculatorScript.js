let Display = "";
const DisplayBar = document.querySelector(".Calculator-Bar");
const button = document.getElementsByTagName("button");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (event) => {
    const buttonText = event.target.innerText;
    if (buttonText === "=") {
      let result = eval(Display);
      DisplayBar.innerText = result;
      Display = result.toString();
    }
    else if (buttonText=="AC"){
        location.reload() ;
    }   
    else {
      console.log(event.target);
      Display = Display + event.target.innerText;
      DisplayBar.innerText = Display;
    }
  });
}

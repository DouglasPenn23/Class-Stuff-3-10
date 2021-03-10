let whatIsInH1 = document.querySelector("h1");
console.log(whatIsInH1);

const function removeDave(){
    console.log("Made it to my function!");
    let elem = document.querySelector("#removeMe");
    elem.parentElement.removeChild(elem);
}

const button = document.querySelector(".testButton");
button.addEventListener("click", () => removeDave());

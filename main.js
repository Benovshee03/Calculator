let container = document.querySelector(".container");
let bottom = document.querySelector(".bottom");
let numbers = Array.from(document.getElementsByClassName("number"));
let total = document.querySelector(".total");
numbers.map((number) => {
  number.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        total.innerHTML = "0";
        break;
      case "=":
        let newArray = total.innerHTML.split("");
        if (newArray.includes("%")) {
          if (newArray.includes("+")) {
            newArray.pop();
            let newArrays = newArray.join("");
            let splitArray = newArrays.split("+");
            let first = Number(splitArray[0]);
            let second = Number(splitArray[1]);
            total.innerHTML = first + (second * first) / 100;
          } else if (newArray.includes("-")) {
            newArray.pop();
            let newArrays = newArray.join("");
            let splitArray = newArrays.split("-");
            let first = Number(splitArray[0]);
            let second = Number(splitArray[1]);
            total.innerHTML = first - (second * first) / 100;
          }else if (newArray.includes("*")) {
            newArray.pop();
            let newArrays = newArray.join("");
            let splitArray = newArrays.split("*");
            let first = Number(splitArray[0]);
            let second = Number(splitArray[1]);
            total.innerHTML = first * (second * first) / 100;
          }else if (newArray.includes("/")) {
            newArray.pop();
            let newArrays = newArray.join("");
            let splitArray = newArrays.split("/");
            let first = Number(splitArray[0]);
            let second = Number(splitArray[1]);
            total.innerHTML = first - (second * first) / 100;
          }
          else{
            newArray.pop()
            total.innerHTML=newArray[0]*0.01
          }
        } else {
          total.innerHTML = eval(total.innerHTML);
        }
        break;
      case "->":
        if (total.innerHTML) {
          total.innerHTML = total.innerHTML.slice(0, -1);
        }
        break;
      default:
        if (total.innerHTML == 0) {
          total.innerHTML = "";
        }
        
          total.innerText += e.target.innerText;
        
        
    }
  });
});



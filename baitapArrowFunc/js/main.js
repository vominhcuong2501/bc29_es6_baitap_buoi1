const getEle = (id) => {return document.getElementById(id)};

let colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

/**
 * Tạo nút button màu
 */
// const createButton = () => {
//     let content = ""; 
//     for(let i = 0; i < colorList.length; i++) {  
//         content +=`<button class = "color-button ${colorList[i]}"
//         id= "${colorList[i]}" onclick = "${colorList[i]}()"></button>`;
//     }
//     getEle("colorContainer").innerHTML = content;
// }
// createButton();

  colorList.forEach((currentValue, currentIndex, currentArray) => {
    let btn = document.createElement("button");
    btn.className = `color-button ${currentValue}`;
    getEle("colorContainer").appendChild(btn);
  });
  
  let btnContainer = getEle("colorContainer");
  console.log(btnContainer);
  let btns = btnContainer.getElementsByClassName("color-button");
  console.log(btns);

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
  
      colorList.forEach((ele, idx) => {
        let currentHouse = getEle("house").classList;
        if (currentHouse.contains(ele)) {
          currentHouse.remove(ele);
        }
        currentHouse.add(this.classList[1]);
      });
    });
  }
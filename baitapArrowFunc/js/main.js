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

  // colorList.forEach((currentValue, currentIndex, currentArray) => {
  //   let btn = document.createElement("button");
  //   btn.className = `color-button ${currentValue}`;
  //   getEle("colorContainer").appendChild(btn);
  // });
  
  // let btnContainer = getEle("colorContainer");
  // console.log(btnContainer);
  // let btns = btnContainer.getElementsByClassName("color-button");
  // console.log(btns);

  // for (let i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function () {
  //     let current = document.getElementsByClassName("active");
  //     if (current.length > 0) {
  //       current[0].className = current[0].className.replace(" active", "");
  //     }
  //     this.className += " active";
  
  //     colorList.forEach((ele, idx) => {
  //       let currentHouse = getEle("house").classList;
  //       if (currentHouse.contains(ele)) {
  //         currentHouse.remove(ele);
  //       }
  //       currentHouse.add(this.classList[1]);
  //     });
  //   });
  // }

  const loadDivClr = () => {
    let content = "";
    colorList.forEach((ele, idx) => {
        if (idx === 0) {
            content += `<button class= "color-button ${ele} active" onclick = changeClrHouse('${ele}') ></button>`;
        } else {
            content += `<button class= "color-button ${ele}" onclick = changeClrHouse('${ele}')></button>`;
        }
    });
    getEle("colorContainer").innerHTML = content;
}

loadDivClr();

const removeActiveClr = () => {
    let btnActive = document.getElementsByClassName("color-button");
    for (let i = 0; i < btnActive.length; i++) {
        btnActive[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            console.log(current);
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

const changeClrHouse = (ele) => {
    removeActiveClr();
    let clrHouse = getEle("house").classList;
    // console.log(clrHouse);
    clrHouse.value = `house ${ele}`;
}

changeClrHouse();

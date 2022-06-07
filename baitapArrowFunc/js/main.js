const getEle = (id) => {return document.getElementById(id)};

let colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

/**
 * Tạo nút button màu
 */
const createButton = () => {
    let content = ""; 
    for(let i = 0; i < colorList.length; i++) {  
        content +=`<button class = "color-button ${colorList[i]}"
        id= "${colorList[i]}" onclick = "${colorList[i]}()"></button>`;
    }
    getEle("colorContainer").innerHTML = content;
}
createButton();

for(let i = 0; i < colorList.length; i++) { 
    getEle(colorList[i]).onclick = () => {
        getEle("house").classList.add(colorList[i]);
        
    }
}


// const pallet = () => {
//     getEle("house").classList.add('pallet');
// }
// const viridian = () => {
//     getEle("house").classList.add('viridian');
// }
// const pewter = () => {
//     getEle("house").classList.add('pewter');
// }
// const cerulean = () => {
//     getEle("house").classList.add('cerulean');
// }
// const vermillion = () => {
//     getEle("house").classList.add('vermillion');
// }
// const lavender = () => {
//     getEle("house").classList.add('lavender');
// }
// const celadon = () => {
//     getEle("house").classList.add('celadon');
// }
// const saffron = () => {
//     getEle("house").classList.add('saffron');
// }
// const fuschia = () => {
//     getEle("house").classList.add('fuschia');
// }
// const cinnabar = () => {
//     getEle("house").classList.add('cinnabar');
// }


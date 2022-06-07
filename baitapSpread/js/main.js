

const createdSpan = () => {
    let str = document.querySelector(".heading").innerHTML;
    let chars = [...str];
    let content = "";
    for(let i = 0; i < chars.length; i++) {
        content += `<span>${chars[i]}</span>`;
    };
    document.querySelector(".heading").innerHTML = content;
} 
createdSpan();
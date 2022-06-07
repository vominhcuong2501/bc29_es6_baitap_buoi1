const getEle = (id) => { return document.getElementById(id)};

const tinhDTB = (...value) => {
    let dtb = 0;
    for(let i = 0; i < value.length; i++) {
        (dtb += value[i]/value.length);
    }
    return dtb;
}

getEle("btnKhoi1").onclick = () => {
    let toan = getEle("inpToan").value*1;
    let ly = getEle("inpLy").value*1;
    let hoa = getEle("inpHoa").value*1;
    getEle("tbKhoi1").innerHTML = tinhDTB(toan, ly, hoa);
}

getEle("btnKhoi2").onclick = () => {
    let van = getEle("inpVan").value*1;
    let su = getEle("inpSu").value*1;
    let dia = getEle("inpDia").value*1;
    let anh = getEle("inpEnglish").value*1;
    getEle("tbKhoi2").innerHTML =  tinhDTB(van, su, dia, anh);
}




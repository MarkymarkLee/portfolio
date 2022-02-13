document.querySelector("#dcbutton").onclick = 
function (){

    let inp = document.createElement("input");
    inp.setAttribute("value","Markymark_playz#3950");
    document.body.appendChild(inp);
    inp.select();
    document.execCommand("copy");
    inp.parentNode.removeChild(inp);
    alert("Copied discord nametag");
    return false;

}
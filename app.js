let x=0;
let array=[];
let element="<hr>";
function add() {
    x=document.getElementById("input").value;
    array.push(x);
    document.getElementById("input").value="";
    document.getElementById("result").innerHTML="array[]="+array;
}
function edit() {
    for (let i = 0; i < array.length; i++) {
        element += "element" + i + "=" + array[i]+"<button name=\"edit\">Edit</button>"+"<button name=\"delate\">Delate</button>" +"<br>"+"<hr>";
    }
    document.getElementById("resultElemennt").innerHTML = element;
    element="";
}
function add(e) {
    e.preventDefault();
    var n1 = parseInt(document.getElementById("first-input").value);
    var n2 = parseInt(document.getElementById("second-input").value);
    var sum =n1+n2;
    document.getElementById("result").innerHTML=sum;
    return false;
}
document.getElementById('myBtn1').addEventListener("click", total);
document.getElementById('myBtn2').addEventListener("click", total);
document.getElementById('myBtn3').addEventListener("click", total);

function total() {
    var fields = this.parentNode.parentNode.childNodes;
    var total = 0;

    for (i = 0; i < fields.length; i++) {
        if (fields[i].className === "sub") {
            total = total + parseInt(fields[i].innerHTML);
        }


    }
    document.getElementById('tot').innerHTML = total;
}